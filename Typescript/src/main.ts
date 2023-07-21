let stringArr = ['one','hey','Artur']

let guitars =['strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1084, true]

let myArr: string[] = []


const exampleObj = {
    prop1: 'Dave',
    ptop2: true,
}

exampleObj.prop1 = 'Artur'

interface Guitarist  {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let JP: Guitarist = {
    name: 'Jan',
    active: false,
    albums: ['yes','no']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(JP));