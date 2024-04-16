import inquirer from 'inquirer';
const currency_conversion = {
    PKR: 277.54,
    GBP: 1.26,
    USD: 1,
    EUR: 0.92,
    SAR: 3.75,
    QAR: 3.64,
    UAE: 3.67,
    YEN: 151.61,
    BDT: 109.6,
    OMR: 0.38,
};
let answer = await inquirer.prompt([
    {
        name: 'from_currency',
        message: 'Enter from Currency',
        type: 'list',
        choices: ['PKR', 'GBP', 'USD', 'EUR', 'SAR', 'QAR', 'UAE', 'YEN', 'BDT', 'OMR']
    },
    {
        name: 'to_currency',
        message: 'Enter to Currency',
        type: 'list',
        choices: ['PKR', 'GBP', 'USD', 'EUR', 'SAR', 'QAR', 'UAE', 'YEN', 'BDT', 'OMR']
    },
    {
        name: 'amount',
        message: 'Enter the Currency Amount',
        type: 'number'
    }
]);
let fromamount = currency_conversion[answer.from_currency];
let toamount = currency_conversion[answer.to_currency];
let user_amount = answer.amount;
let base_amount = user_amount / fromamount;
let converted_amt = base_amount * toamount;
console.log(`Your desired currency ${answer.from_currency} from ${answer.to_currency} to ${toamount} ${converted_amt}`);
console.log(fromamount);
console.log(toamount);
console.log(user_amount);
console.log(base_amount);
