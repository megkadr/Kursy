"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I' m ${this.age}`;
    }
}
const Artur = new Coder('Artur', 'Rock', 23, 'Pl');
console.log(Artur.getAge()); // ? mając metode w klasie na uzyskanie wieku, możemy dostać się do wartości używajac metody z klasy
// console.log(Artur.age) //! wiek jest ustawiony jako private, nie można dostać się bezpośrednio
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I am write ${this.lang}`;
    }
}
const Sara = new WebDev('mac', 'Sara', 'POP', 25);
console.log(Sara.getLang());
console.log(Sara.getAge());
