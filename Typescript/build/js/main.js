"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'word';
let e = 'word'; // you cannot use this with React files 
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
// be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 3, 'concat');
// The DOM
const img = document.querySelector('#img');
const myImg = document.querySelector('#img');
const middleSpecificImg = document.getElementById('#img');
// myImg.src
// middleSpecificImg.src
