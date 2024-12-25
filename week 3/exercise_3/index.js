const student = require('./StudentInfo');
const Person = require('./Person');

// Using functions from StudentInfo.js
console.log("Student Name: " + student.getName());
console.log(student.Location());
console.log(student.dob);
console.log("Grade is: " + student.Studentgrade(55));

// Creating new Person instance
const person1 = new Person("Jim", 25, "jim@example.com");
console.log("Using Person Module:", person1.getPersonInfo());
