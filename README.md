# Budgeting App 💸

A user-friendly budgeting app called budgetpal designed to help users manage their finances, track expenses, savings, and investments. This app leverages modern web technologies and integrates external APIs to provide real-time foreign exchange data,  presented in an interactive and clean interface.

---
[icecoldcoding.tech](https://icecoldcoding.tech)
## Features 🚀
- 🏙️ **Track Expenses**: track your daily, weekly, or monthly expenses.
- 💰 **Calculation of total income and budget management**: Set goals for your savings and track progress.
- 📊 **Foreign currency exchange**: different currencies mainly RWF,USD,EUR.
- 🌐 **Real-Time Exchange-Rates Updates**: Fetch live exchange rates.
- 🔄 **Savings and investment plan**: Helps user calculate savings amount according to their income and budget also giving suggestions for investment.
  
---

## Technologies Used 🛠️
This project is built with:
- **HTML**: For structuring the web page.
- **CSS**: For styling and responsive design.
- **JavaScript**: For functionality and API integration.
- **Postman**: Used for testing the API endpoints during development.
- **Currency Exchange API**: Provides real-time exchange rates (API key and URL).

---

## API Integration 🌐
The app utilizes the following :
1. **EXCHANGE-RATE API**: Provides real-time exchange rates for budgeting.
   - API key required to access live exchange rates.
   - Register on the [Exchange-rate api web](https://www.exchangerate-api.com/)

### Integration Process:
1. Register for an API key on the [Exchange-rate api web](https://www.exchangerate-api.com/) API website.
2. Use JavaScript to fetch data from these APIs.
3. Test the API endpoints with **Postman** during development.

---

## Setup and Usage 🖥️
1. Clone this repository:[git clone](https://github.com/PaulRwagasana/Budgeting-app/)
2. cd Budgeting-app
3. cd Budgetpal-app
4. vi index.html

## Usage
⚖️Income & Budget Management:

Enter your income in any currency provided and then input your budget in any currency.
click on the calculate savings button to obtain savings according to the info provided and an additional investment plan.

💳Expense tracking: 

Enter expense name
Enter amount and currency
click on add expense
If you have another expense re do the above and then add the expense to calculate total in rwf.

## Future Enhancement 🔭💡
💷 I want to intergrate more currencies.
💰 Addition of an investment api to offer stock market and investment opportunities for example in real estate and other opportunities.
🏦 Allow users to set recurring expenses (e.g., subscriptions, rent) and manage them automatically.
📈 Investment Portfolio to Track user s' investments and display real-time performance.

## Deployment
This app was deployed on both of my web-01 and web-02 servers with the loadbalancer controlling the traffick
I uploaded the files in both my web-01 and web-02 in /var/www/Budgeting-app
I configured my nginx i git bash for etc/nginx/sites-available/default
I tested it using sudo nginx -t 

## Credits/acknowledgement

API:[Exchange-rate api web](https://www.exchangerate-api.com/).

Postman for API endpoints
