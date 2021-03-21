function Student(name, year, degree, age) {
    this.name = name; // public field
    this.year = year;
    this.degree = degree;
    this.age = age;
   
}

Student.prototype.getStudentDetails = function (){
     return `${this.name}, ${this.age} `;
}
var suganthi = new Student("Suganthi","Third", "B.E", 20);

var sasi = new Student("Sasi","Second", "M.S", 20);
console.log(suganthi.getStudentDetails());
//Student { name: 'Suganthi', year: 'Third', degree: 'B.E', age: 20 }

console.log(suganthi.getStudentDetails());