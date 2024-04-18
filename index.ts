#! /usr/bin/env node 

// This line is called a shebang, it tells the OS to run it with nodejs

// Import the 'inquirer' module, which is a command line interface for node.js
import inquirer from "inquirer"

//Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence :string 
} =await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
])

const words = answers.Sentence.trim().split(" ")

// print the array of words to the console
console.log(words) 

//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
