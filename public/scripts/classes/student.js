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
