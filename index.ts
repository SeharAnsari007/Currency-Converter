#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from "chalk";
console.log(chalk.green("\n\tWelcome to code with Sehar-Currency Converter\n"));

let exchangeCurrency : any = {
    USD : 1,        //United State Dollar
    EUR : 0.935,     //Euro
    PKR : 277.91,   //Pakistani Rupee
    CAD : 1.369,    //Canadian dollar
    JPY : 159.775,  //Japnese Yen
    AUD : 1.498,     //Australian dollar
    CNY : 7.261,     //Chinese Yuan
    INR : 83.565    //Indian Rupee
}
let answer = await inquirer.prompt([
    {
        name : "CovertFrom",
        type : "list",
        choices : ["USD" , "EUR" , "PKR" , "CAD" , "JPY" , "AUD" , "CNY" , "INR"],
        message : "Select the currency to convert from..."
    },
    {
        name : "ConvertTo",
        type : "list",
        choices : ["USD" , "EUR" , "PKR" , "CAD" , "JPY" , "AUD" , "CNY" , "INR"],
        message : "Select the currency to convert to..."
    },
    {
        name : "AmountEntered",
        type : "input",
        message : "Enter the amount you want to convert"
    },
]);
let fromAmount = exchangeCurrency [answer.CovertFrom];
let toAmount = exchangeCurrency [answer.ConvertTo];
let Amount = answer.AmountEntered;

let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let userAnswer = convertedAmount
console.log(`Converted Amount is ${chalk.green(userAnswer.toFixed(2))}`);