"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transcations) => {
    let total = 0;
    for (const transcation in transcations) {
        total += transcations[transcation];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
