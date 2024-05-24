#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Person1 {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person2 {
    name;
    constructor(name) {
        this.name = name;
    }
}
const d = await inquirer.prompt([{
        type: "list",
        name: "select",
        message: chalk.blue("what do you wanna do? "),
        choices: [chalk.magenta.italic.bold("1)  you wanna talk to you?"),
            chalk.green.italic.bold("2)   you wanna talk to others?"),
        ]
    }]);
// let t=new Person2(d.select);
if (d.select == chalk.magenta.italic.bold("1)  you wanna talk to you?")) {
    console.log(chalk.cyan("you are an introvert!!"));
    const n = await inquirer.prompt([{
            type: "input",
            name: "nam",
            message: chalk.yellow("Enter Your Name"),
        }
    ]);
    let p1 = new Person1(n.nam);
    console.log(chalk.red(`your name is ${p1.name} and your personality is an Introver person!`));
}
;
if (d.select == chalk.green.italic.bold("2)   you wanna talk to others?")) {
    console.log(chalk.green("you are an Extrovert!!"));
    const m = await inquirer.prompt([{
            type: "input",
            name: "man",
            message: chalk.yellow("Enter Your Name"),
        }
    ]);
    let p2 = new Person2(m.man);
    console.log(chalk.red(`your name is ${p2.name} and your personality is an Extrovert person!`));
}
;
