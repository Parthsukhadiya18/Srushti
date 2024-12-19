class Person {
    constructor(name) {
        this.name = name
    }

    personInfo() {
        // console.log("my name is a"+this.name+" ");
        console.log(`my name is a ${this.name} `);


    }
};

let p1 = new Person("Parth");
// console.log(p1);
p1.personInfo()

let p2 = new Person("Arth");
// console.log(p1);
p2.personInfo()
let p3 = new Person("Srushti");
// console.log(p1);
p3.personInfo()
let p4 = new Person("Riddhi");
// console.log(p1);
p4.personInfo()