const { last } = require("lodash");

class Student {
    #age = 0; // this is a private field
    #name;
    #year;
    #degree
    constructor(name, year, degree, age) {
        this.#name = name; // public field
        this.#year = year;
        this.#degree = degree;
        this.#age = age;
        
    }

   getStudentDetails(){
       return `${this.#name}, ${this.#age} `;
   }

   updateAge(age){
     this.#age = age;
   }
}

var meghaa = new Student('Meghaa',"Second", "M.C.A", 20);
var suganthi = new Student('Suganthi', "Third", "B.E", 20);

console.log(meghaa);
meghaa.updateAge(10);
console.log(meghaa.getStudentDetails());