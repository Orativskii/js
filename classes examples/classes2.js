console.log('------ Properties and accessor methods -------');

class Person{
        #age = 1;
        #name;
        constructor(name, age){
            this.#name = name;
            this.age = age;
        }
        get name(){ return this.#name; }
        set age(value){ if(value>0 && value < 110) this.#age = value; }
        get age(){ return this.#age; }
    }
const tom = new Person("Tom", 37);
console.log(tom.name); 
tom.name = "Bob";
console.log(tom.name);


class Person1{
    #id;
    constructor(name, age, id){
        this.name = name;
        this.age = age;
        this.id = id;
    }
    set id(value){ this.#id = value;}
    print(){
        console.log(`id: ${this.#id}   name: ${this.name}   age: ${this.age}`);
    }
}
const tom1 = new Person1("Tom", 37, 1);
tom1.print(); 
tom1.id = 55;    
tom1.print();     
console.log(tom1.id);


class Person2{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){ return `${this.firstName} ${this.lastName}` }
}
const tom2 = new Person2("Tom", "Smith");
console.log(tom2.fullName);


class Person3{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){ return `${this.firstName} ${this.lastName}` }
    set fullName(value){ 
        [this.firstName, this.lastName] = value.split(" ");
    }
}
const tom3 = new Person3("Tom", "Smith");
console.log(tom3.fullName);
tom3.fullName = "Tomas Jefferson";
console.log(tom3.lastName);


console.log('------ Inheritance -------');


class Person5{
    name;
    age;
     
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person5{
    company;
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom5 = new Person5();
tom5.name = "Tom"; 
tom5.age= 34;
const bob5 = new Employee();
bob5.name = "Bob"; 
bob5.age = 36; 
bob5.company = "Google";
tom5.print();
bob5.print();  
bob5.work();


class Person6{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee6 extends Person6{
    company;
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom6 = new Person6("Tom", 34);
tom6.print();
 
const sam = new Employee6("Sam", 25);  
sam.print();


class Person7{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee7 extends Person7{
     
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom7 = new Person7("Tom", 34);
tom7.print();
 
const sam7 = new Employee7("Sam", 25, "Google");
sam7.print();
sam7.work();


class Person8{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee8 extends Person8{
     
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    print(){
        super.print();
        console.log(`Company: ${this.company}`);
    }
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
const sam8 = new Employee8("Sam", 25, "Google");
sam8.print();
