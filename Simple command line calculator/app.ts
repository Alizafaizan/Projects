import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([
  {
    name: "age",
    type: "number",
    message: "Enter your Age:",
  },
]);

console.log(
  chalk.blue(
    "Insha Allah, in " + (60 - answer.age) + " years you will be 60 years old."
  )
);
