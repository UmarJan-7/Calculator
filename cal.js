// Calculator
import * as inquirer from 'inquirer';
import chalk from 'chalk';
// calculator operator
var operator;
(function (operator) {
    operator["ADD"] = "Addition";
    operator["SUBTRACT"] = "Subtraction";
    operator["MULTIPLY"] = "Multiplication";
    operator["DIVIDE"] = "Division";
})(operator || (operator = {}));
const prompt = inquirer.createPromptModule();
function validatenumber(input) {
    if (isNaN(parseFloat(input))) {
        return 'Please enter a valid number';
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter a valid number:',
            validate: validatenumber
        },
        {
            type: 'rawlist',
            name: 'operator',
            message: 'Select operator:',
            choices: Object.values(operator)
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter a second valid number:',
            validate: validatenumber
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    let result;
    const selectedoperators = input.operator;
    if (selectedoperators === operator.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgCyanBright(`Result: ${result}`));
    }
    else if (selectedoperators === operator.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.red.bgBlueBright(`Result: ${result}`));
    }
    else if (selectedoperators === operator.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.whiteBright.bgYellowBright(`Result: ${result}`));
    }
    else if (selectedoperators === operator.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.black.bgWhiteBright(`Result: ${result}`));
    }
}
main();
