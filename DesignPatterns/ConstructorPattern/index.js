/**
 * Contructor Pattern
 */

 function Person(name, gender, age) {
     this.name = name;
     this.gender = gender;
     this.age = age;
 }

 Person.prototype.getInfo = function() {
     return `${this.name} is ${this.age} years old.`;
 }

 const p1 = new Person('John', 'M', 20);
 const p2 = new Person('Jenny', 'F', 18);

 console.log(p1.getInfo(), 'p1');
 console.log(p2.getInfo(), 'p2');