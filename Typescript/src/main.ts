let stringArr = ['one','hey','Artur']

let guitars =['strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1084, true]
//Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

interface Guitarist  {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

let JP: Guitarist = {
    name: 'Jan',
    active: false,
    albums: ['yes','no']
}

type UserId = stringOrNumber

// Literal types

let myName: 'Artur'

let userName: 'Dave' | 'Artur' | 'Amy'
userName = 'Amy'

// functions

const add = (a: number,b: number): number => {
    return a + b
}

const logMsg = (message: any): void =>{
    console.log(message)
}

logMsg('Hello !')
logMsg(add(2,3))

let subtract = function(c: number, d: number):
number{
    return c - d
}

type mathFunction =(a: number, b: number) => number

let multiply: mathFunction =  function(c,d){
    return c * d
}

logMsg(multiply(2,2))

// optional parameters
const addAll = (a:number, b: number, c?: number):
number => {
    if(typeof c !== 'undefined'){
        return a + b + c
    } 
    return a + b   
}

// default param value
const sumAll = (a:number, b: number, c: number = 2):
number => {
    return a + b + c
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))

// Rest Parameters
const total = (...nums: number[]): number =>{
    return nums.reduce((prev,curr) => prev + curr)
}

logMsg(total(1,2,3,4))

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
    ? true : false
}