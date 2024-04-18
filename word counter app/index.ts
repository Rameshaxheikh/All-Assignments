#! /usr/bin/env node

console.log("\n\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log(chalk.greenBright("\n\t\t<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>    WORD COUNTER APP  <>>>>>>>>>>>>>>>>>>>>>>>>>>"));
console.log("\n\t\txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

import inquirer from "inquirer";
import chalk from "chalk";

const userinput :{
    counter :string
}
= await inquirer.prompt(
    [
        {
            name :"counter",
            type :"input",
            message : (chalk.red("\n\t\t\t\t\tEnter your sentence to count the words :")),
        }
    ]
  )
const words = userinput.counter.trim().split(" ")
console.log(chalk.yellow("\n\t\t\t\t\tyour sentence count words is    :      ",words.length));