class Person {
    constructor(name) {
        this.name = name
    }

    personInfo() {
        // console.log("my name is a"+this.name+" ");
        console.log(`my name is a ${this.name} `);


    }
};
class Emp extends Person {
    constructor(name, empId) {
        super(name);
        this.empId = empId
    }

    EmpInfo() {
        console.log(`my name is a ${this.name} my empId is a ${this.empId}`);

    }
};

// let p1 = new Person("Parth");
// p1.personInfo()
let E1 = new Emp("Parth", 100);
E1.EmpInfo();


let E2 = new Emp("riddhi", 101);
E2.EmpInfo();

let E3 = new Emp("srushti", 102);
E3.EmpInfo();
let E4 = new Emp("Jenil", 103);
E4.EmpInfo();