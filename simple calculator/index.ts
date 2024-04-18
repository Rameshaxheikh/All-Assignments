#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("\n\t\t\t\t<<oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo>>"));

console.log(chalk.yellow("\n\t\t\t\t\t\t\t\tWELCOME TO ONLINE CALCULATOR"));
console.log(chalk.green("\n\t\t\t\t<<oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo>>"));
let Result = await inquirer.prompt([
    {
        message :(chalk.blue("\n\t\t\t\tEnter your first number")),
        type :   "number",
        name : "first_number",
        prefix : "",
    },
    {
        message: (chalk.blue("\n\t\t\t\tEnter your second number")),
        type :"number",
        name : "secondnumber",
        prefix : " ",
    },
    {
        message:(chalk.blue("\n\t\t\t\tselect operations")),
        type : "list",
        name :"operator",
        choices :["+",
        "-",
        "*",
        "/",],
         prefix : "   ",
       
        },
        
    ]);

  if(Result.operator === '+'){

     console.log(chalk.greenBright("\n\t\t\t\tYour answer is :"),(Result.first_number+Result.secondnumber));
    }
else if(Result.operator === '-'){
    console.log(chalk.blueBright("\n\t\t\t\tYour answer is :"),(Result.first_number-Result.secondnumber));
}
else if(Result.operator === '*'){
    console.log(chalk.yellow("\n\t\t\t\tYour answer is :"),(Result.first_number*Result.secondnumber));
}
else if(Result.operator === '/'){
    console.log(chalk.gray("\n\t\t\t\tYour answer is :"),(Result.first_number/Result.secondnumber));2
}
else{
    console.log("\n\t\t\t\tplease select operation");
}

    


