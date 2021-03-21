# Prototype

## Constructor function
```
function Student(name, year, degree, age) {
    this.name = name; // public field
    this.year = year;
    this.degree = degree;
    this.age = age;
    
}



var suganthi = new Student("Suganthi","Third", "B.E", 20);
console.log(suganthi);
//Student { name: 'Suganthi', year: 'Third', degree: 'B.E', age: 20 }
```

## Methods are defined using prototype properties of the function.
```
Student.prototype.getStudentDetails = function (){
     return `${this.name}, ${this.age} `;
}

var suganthi = new Student("Suganthi","Third", "B.E", 20);

console.log(suganthi.getStudentDetails()); //Suganthi, 20 


```