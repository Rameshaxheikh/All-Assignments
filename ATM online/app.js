#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.cyanBright("\n\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));
console.log(chalk.magenta("\n\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    ATM MACHINE SYSTEM    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));
console.log(chalk.cyanBright("\n\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));
let accountBalance = 10000;
const pincode = 1234;
let userInput = await inquirer.prompt([
    {
        type: "number",
        name: "firstquestion",
        message: (chalk.greenBright("\n\t\t\t\t\tEnter your pin code number")),
        prefix: "*",
    }
]);
if (userInput.firstquestion === pincode) {
    console.log("\n\t\t\t()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()");
    console.log(chalk.blueBright("\n\t\t\t\t\t\t\tyour account is open succesfully"));
    console.log("\n\t\t\t()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()");
    let secondanswer = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            choices: ["withdraw", "check Balance", "Moner tranfer", "PIN change"],
            message: "select any one operation",
        }
    ]);
    if (secondanswer.operation === "withdraw") {
        let thirdanswer = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: (chalk.greenBright("\n\t\t\t\tEnter the Amount to withdraw")),
            }
        ]);
        if (thirdanswer.amount < 500) {
            console.log(chalk.cyanBright("\n\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));
            console.log(chalk.bgRed("\n\t\t\t\t\t ATM Policy Minimum withdrawal amount is 500"));
            console.log(chalk.cyanBright("\n\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));
        }
        else if (thirdanswer.amount <= accountBalance) {
            let remainingBalance = accountBalance - thirdanswer.amount;
            console.log(chalk.green(`\n\t\t\t\tAfter transaction balance ${remainingBalance}`));
        }
        else {
            console.log(chalk.bgRed("\n\t\t\t\t\tinsufficient balance"));
        }
    }
    else if (secondanswer.operation === "check Balance") {
        console.log(chalk.greenBright(`\n\t\t\t\t\t\tyour REMAING BALANCE Is ${accountBalance}`));
    }
}
else {
    console.log(chalk.yellowBright("\n\t\t\t******************************************************************************************************"));
    console.log(chalk.red("\n\t\t\t\t\t\t\tEnter correct pin code"));
    console.log(chalk.yellowBright("\n\t\t\t******************************************************************************************************"));
}
