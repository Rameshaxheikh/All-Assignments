#!/ur/bin/env node
import inquirer from "inquirer";
let user_input = await inquirer.prompt([{
        name: "userinput",
        type: "number",
        message: "ENTER YOUR NUMBER"
    }]);
let table_value = 2;
let table_value2 = 'x';
for (let i = 1; i <= 10; i++) {
    console.log(`${user_input.userinput}`, `${table_value2}`, i, "=", (user_input.userinput * i));
}
