"use strict";
let stringArr = ['one', 'hey', 'Artur'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1084, true];
let JP = {
    name: 'Jan',
    active: false,
    albums: ['yes', 'no']
};
// Literal types
let myName;
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello !');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
