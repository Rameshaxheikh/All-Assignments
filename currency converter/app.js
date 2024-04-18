#! /usr/bin/env node
//currency calculator
console.log(chalk.yellowBright("\n\t\t\t @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));
console.log(chalk.yellowBright(" \n\t\t\t\t\t\t\t LOadinG................................."));
console.log(chalk.greenBright("\n\t\t\t\t\t\t\t ONLINE CURRENCY CALCULATOR "));
console.log(chalk.yellowBright("\n\t\t\t @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userinput = await inquirer.prompt([
    {
        name: "from",
        message: (chalk.blueBright("Enter from currency")),
        type: "list",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "INR",
            "PKR"
        ],
        prefix: (chalk.redBright("<>")),
    },
    {
        name: "to",
        message: (chalk.blueBright("Enter to currency")),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        prefix: (chalk.redBright("<>")),
    },
    {
        name: "amount",
        type: "number",
        message: (chalk.blueBright("Enter your amount")),
        prefix: (chalk.redBright("<>")),
    }
]);
let fromAmount = currency[userinput.from];
let toAmount = currency[userinput.to];
let Amount = userinput.amount;
let basecurrency = Amount / fromAmount;
let convertamount = basecurrency * toAmount;
//console.log (convertamount)
if (userinput.from === "USD" && userinput.to === "USD") {
    console.log(chalk.redBright("Both 'from' and 'to' currencies cannot be USD. Please choose different currencies."));
}
else if (userinput.from === "EUR" && userinput.to === "EUR") {
    console.log(chalk.redBright("Both 'from' and 'to' currencies cannot be EUR. Please choose different currencies."));
}
else if (userinput.from === "GBP" && userinput.to === "GBP") {
    console.log(chalk.redBright("Both 'from' and 'to' currencies cannot be GBP. Please choose different currencies."));
}
else if (userinput.from === "INR" && userinput.to === "INR") {
    console.log(chalk.redBright("Both 'from' and 'to' currencies cannot be INR. Please choose different currencies."));
}
else if (userinput.from === "PKR" && userinput.to === "PKR") {
    console.log(chalk.redBright("Both 'from' and 'to' currencies cannot be INR. Please choose different currencies."));
}
else {
    ;
    console.log(chalk.greenBright("\n\t\t\t\t\t\t*********************YOUR REQUEST IS PROCESSING**********************"));
    console.log("\n\t\t\t\t\t\t\t\tCONVERT VALUE  IS ", convertamount);
}
