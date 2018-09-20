// example 1
function Employee () {}
    Employee.prototype.firstName = "Abhijit";
    Employee.prototype.lastName = "Patel";
    Employee.prototype.startDate = new Date();
    Employee.prototype.signedNDA = true;
    Employee.prototype.fullName = function () {
    console.log (this.firstName + " " + this.lastName); 
};

var abhijit = new Employee () //
console.log(abhijit.fullName()); // Abhijit Patel
console.log(abhijit.signedNDA); // true

function Employee (name, profession) {
    this.name = name;
    this.profession = profession;
} // Employee () is the constructor function because we use the new keyword below to invoke it.

var richard = new Employee("Richard", "Developer") // richard is a new object we create from the Employee () constructor function.

console.log(richard.name); //richard
console.log(richard.profession); // Developer