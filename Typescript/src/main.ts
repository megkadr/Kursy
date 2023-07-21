type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'word'
let e = <string | number>'word' // you cannot use this with React files 

const addOrConcat =(a: number,b: number,c: 'add' | 'concat'): number | string =>{
    if(c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,3,'concat') as string

// be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2,3,'concat') as number

// The DOM
const img = document.querySelector('#img')
const myImg = document.querySelector('#img') as HTMLImageElement
const middleSpecificImg = document.getElementById('#img') as HTMLImageElement

// myImg.src
// middleSpecificImg.src