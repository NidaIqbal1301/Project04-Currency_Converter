import inquirer from "inquirer";
import chalk from "chalk";
// Welcome Message
console.log(chalk.blue.bold("\n \t Welcome to Currency Converter\n"));
// Define the list of Currencies and their Exchange Rates
let exchange_rate = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // European Currency(Euro)
    "JPY": 113, // Japanese Currency(Yen)
    "CAD": 1.3, // Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 277.70, // Pakistani Rupees
};
// Promt the user to enter the amount and the currency
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select your currency to convert from",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency you want to convert into",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to convert"
    }
]);
// Perform Currency Conversion by Using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of Convesion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the Result
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
