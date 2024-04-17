#! /usr/bin/env node
//This line a shebang.
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed.underline.whiteBright("-----------*********----------Welcome To The Word Counter Program ( Made By Marjan Ahmed)-----------*********----------"));
console.log("\n");
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter a sentence: "
    }
]);
console.log("\t");
//it will seperate the word in an array
let words = answer.Sentence.trim().split(" ");
console.log(words);
//print the number of sentence
console.log(`You sentence word count is "${words.length}"`);
