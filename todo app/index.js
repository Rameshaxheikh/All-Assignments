#!/usr/bin/env node
console.log(chalk.blueBright("\n\t\t\t\t**********************************************************************************************"));
console.log(chalk.yellowBright(" \n\t\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ WELCOME TO TODO APPLICATION  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));
console.log(chalk.blueBright(" \n\t\t\t\t**********************************************************************************************"));
import inquirer from "inquirer";
import chalk from "chalk";
let todo = ["apple", "mango", "ramesha", "sheikh"];
while (true) {
    let userinput = await inquirer.prompt([
        {
            name: "todositem",
            type: "list",
            message: "do you want todo ",
            choices: ["add", "view", "delate", "Exit"],
        }
    ]);
    if (userinput.todositem === "add") {
        let addtodoitem = await inquirer.prompt([
            {
                name: "additem",
                type: "input",
                message: "Add item in to list",
            }
        ]);
        todo.push(addtodoitem.additem);
        console.log("\n\t\t\t\t=========================================================================================");
        console.log("\n\t\t\t\t\t\t\tADD TODO : ", (chalk.greenBright(todo)));
    }
    else if (userinput.todositem === "view") {
        console.log("\n\t\t\t\t\t\t\t  VIEW TODO : ", (chalk.greenBright(todo)));
    }
    else if (userinput.todositem === "delate") {
        let delateitem = await inquirer.prompt([
            {
                name: "datadelate",
                type: "input",
                message: "enter index in delate item",
            },
        ]);
        todo.splice(delateitem.datadelate, 1);
        console.log("\n\t\t\t\t\t\t\t DELATE TODO : ", (chalk.greenBright(todo)));
    }
    else {
        console.log;
        console.log(chalk.greenBright("\n\t\t\t\t\t\t\t\t\tCLOSE TODO APPLICATION"));
        break;
    }
}
