# Exporting classes and Importing classes

## export class syntax
```
//student.js
class Student {
    #age = 0; // this is a private field
    constructor(name, year, degree, age) {
        this.name = name; // public field
        this.year = year;
        this.degree = degree;
        this.#age = age;
        
    }

   getStudentDetails(){
       return `${this.name}, ${this.#age} `;
   }

   updateAge(age){
     this.#age = age;
   }
}

exports.Student = Student;


```
## import class syntax

```
// training.js
const studentModule = require('./student');

const suganthi = new studentModule.Student('suganthi','Third', "B.E", 20);
console.log(suganthi.getStudentDetails()); //suganthi, 20

```

