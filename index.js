#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(" Have a Fun! Enjoy random number guissing game!");
const guessed = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Choose a number to be guessed from 1 to 10: ",
    },
]);
if (guessed.userGuessednumber === randomNumber) {
    console.log(" Congrats! You just guessed a right number");
}
else {
    console.log("Oops!! Try Again");
}
;
if (guessed.userGuessednumber != randomNumber) {
    console.log(`Correct number was ${randomNumber}`);
}
;
