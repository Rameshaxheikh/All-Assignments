#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Result = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "first_number",
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondnumber"
    },
    {
        message: "select operations",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/",],
    },
]);
if (Result.operator === '+') {
    console.log(chalk.greenBright("Your answer is :"), (Result.first_number + Result.secondnumber));
}
else if (Result.operator === '-') {
    console.log(chalk.blueBright("Your answer is :"), (Result.first_number - Result.secondnumber));
}
else if (Result.operator === '*') {
    console.log(chalk.yellow("Your answer is :"), (Result.first_number * Result.secondnumber));
}
else if (Result.operator === '/') {
    console.log(chalk.gray("Your answer is :"), (Result.first_number / Result.secondnumber));
}
else {
    console.log("please select operation");
}
