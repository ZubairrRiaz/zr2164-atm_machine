#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let mypinPass = 4321;
let currentBalance = 10000;
let mypin = await inquirer.prompt([{
        name: 'pass',
        type: 'number',
        message: chalk.yellow('enter your pin!'),
    }]);
if (mypin.pass == mypinPass) {
    let opt = await inquirer.prompt([{
            name: 'operations',
            type: 'list',
            message: chalk.blue('enter your operator!'),
            choices: ['cash credit?', 'cash withdraw?', 'billpay?', 'checkBalance?'],
        }]);
    if (opt.operations === 'cash credit?') {
        let add = await inquirer.prompt({
            name: 'add',
            type: 'number',
            message: chalk.yellowBright('enter your amount'),
        });
        if (add.add > 50000) {
            console.log(`Not working. Maximum range of credit is 50000!`);
        }
        else {
            currentBalance += add.add;
            console.log(chalk.bgBlackBright(`Here is your balance "${currentBalance}"`));
        }
    }
    else if (opt.operations === 'cash withdraw?') {
        let minus = await inquirer.prompt({
            name: 'minus',
            type: 'list',
            choices: [1000, 2000, 5000, 10000]
        });
        if (minus.minus > 10000) {
            console.log(chalk.gray('Cant withdraw because your account balance is 10000;'));
        }
        else {
            currentBalance -= minus.minus;
            console.log(chalk.bgRedBright `Here is your current balance "${currentBalance}"`);
        }
    }
    else if (opt.operations === 'checkBalance?') {
        console.log(chalk.bgBlackBright(`Here is your current balance "${currentBalance}"`));
    }
    else if (opt.operations === 'billpay?') {
        let bill = await inquirer.prompt({
            name: 'bill',
            type: 'number',
            message: chalk.bgGreen('enter your amount'),
        });
        if (bill.bill > 20000) {
            console.log(chalk.bgGreenBright(`Error! maximum ammount of billpay is 20000.`));
        }
        else {
            currentBalance -= bill.bill;
            console.log(chalk.bgCyanBright(`After bill pay Here is your balance "${currentBalance}"`));
        }
    }
}
else {
    console.log('invalid pin code!');
}
