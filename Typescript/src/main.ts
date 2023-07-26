// Index Signatures

interface TransactionObj{
    [index: string]: number,
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transcations: TransactionObj):
number =>{
    let total = 0
    for(const transcation in transcations){
        total += transcations[transcation]
    }
    return total
}

console.log(todaysNet(todaysTransactions))