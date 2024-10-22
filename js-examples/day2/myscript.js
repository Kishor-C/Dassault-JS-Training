function test(a, ...b) {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`length of b = ${b.length}`);
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // writing function keyword throws error, it is understood because its inside the class
    display() {
        console.log('display(): P')
        return `Name=${this.name}, Age=${this.age}`;
    }
}
// employee class inherits person
class Employee extends Person {
    constructor(id, name, age, salary) {
        super(name, age); // calls super class constructor to initialize name & age
        this.id = id;
        this.salary = salary;
    }
    display() {
        super.display(); // invokes the super class display
        console.log('display() : E')
        return `Id=${this.id}, Name=${this.name}, Age=${this.age}, Salary=${this.salary}`;
    }
}