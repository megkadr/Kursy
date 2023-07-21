"use strict";
let stringArr = ['one', 'hey', 'Artur'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1084, true];
let myArr = [];
const exampleObj = {
    prop1: 'Dave',
    ptop2: true,
};
exampleObj.prop1 = 'Artur';
let JP = {
    name: 'Jan',
    active: false,
    albums: ['yes', 'no']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(JP));
