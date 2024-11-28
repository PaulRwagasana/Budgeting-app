document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const incomeForm = document.getElementById('income-form');
    const expensesList = document.getElementById('expenses');
    const totalAmountDisplay = document.getElementById('total-amount');
    const savingsDisplay = document.getElementById('savings-amount');
    const investmentRecommendations = document.getElementById('investment-recommendations');
  
    let totalAmount = 0;
    let exchangeRates = {};
  
    // Fetch exchange rates from the API on page load
    fetchExchangeRates();
  
    // This will help me handle expense form submission
    expenseForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const expenseName = document.getElementById('expense-name').value;
      const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
      const currency = document.getElementById('currency').value;
  
      if (currency !== 'RWF') {
        convertToRWF(expenseAmount, currency).then((convertedAmount) => {
          addExpense(expenseName, convertedAmount, 'RWF');
          updateTotal(convertedAmount);
          resetForm(expenseForm);
        });
      } else {
        addExpense(expenseName, expenseAmount, 'RWF');
        updateTotal(expenseAmount);
        resetForm(expenseForm);
      }
    });
  
    // This will help me handle income and budget form submission
    incomeForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const income = parseFloat(document.getElementById('income').value);
      const incomeCurrency = document.getElementById('income-currency').value;
      const budget = parseFloat(document.getElementById('budget').value);
      const budgetCurrency = document.getElementById('budget-currency').value;
  
      Promise.all([convertToRWF(income, incomeCurrency), convertToRWF(budget, budgetCurrency)])
        .then(([convertedIncome, convertedBudget]) => {
          const remaining = convertedIncome - convertedBudget;
          savingsDisplay.textContent = `Remaining: ${remaining.toFixed(2)} RWF`;
  
          if (remaining > 0) {
            recommendInvestments(remaining);
          } else {
            investmentRecommendations.innerHTML = `<p>No savings available. Adjust your budget.</p>`;
          }
        });
    });
  
    // Fetching exchange rates
    async function fetchExchangeRates() {
      const apiKey = '4fbc8509c9a2ad7796f919e2'; // My API key
      const url = `https://v6.exchangerate-api.com/v6/4fbc8509c9a2ad7796f919e2/latest/USD`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.result === 'success') {
          exchangeRates = data.conversion_rates;
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    }
  
    // Converting any currency to RWF
    async function convertToRWF(amount, currency) {
      return (amount * exchangeRates['RWF'] / exchangeRates[currency]).toFixed(2);
    }
  
    // Add the expense to the list
    function addExpense(name, amount, currency) {
      const li = document.createElement('li');
      li.innerHTML = `${name}: ${amount} ${currency} 
        <button onclick="removeExpense(this, ${amount})">Remove</button>`;
      expensesList.appendChild(li);
    }
  
    // Update total amount
    function updateTotal(amount) {
      totalAmount += parseFloat(amount);
      totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }
  
    // Recommend investment options
    function recommendInvestments(amount) {
      investmentRecommendations.innerHTML = `
        <ul> <br><h1>investment Recommendations</h1></br>
          <br><li>50% (${(amount * 0.5).toFixed(2)} RWF) - Stocks</li>
          <li>30% (${(amount * 0.3).toFixed(2)} RWF) - Savings</li>
          <li>20% (${(amount * 0.2).toFixed(2)} RWF) - Retirement account (401k)</li></br>
        </ul>`;
    }
  
    // Reset form
    function resetForm(form) {
      form.reset();
    }
  
    // Remove expense
    window.removeExpense = function (button, amount) {
      button.parentElement.remove();
      totalAmount -= parseFloat(amount);
      totalAmountDisplay.textContent = totalAmount.toFixed(2);
    };
  });
  