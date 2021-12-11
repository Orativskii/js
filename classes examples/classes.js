class Person{
    name = "Unknown";
    age= 18;
}
const tom = new Person();
console.log(tom.name);  
tom.name = "Tom";
console.log(tom.name); 


class Person1{
    name;
    age;
    move(place){
        console.log(`Go to ${place}`);
    }
    eat(){
        console.log("Eat apples");
    }
}
const tom1 = new Person1();
tom1.move("Hospital");
tom1.move("Cinema");
tom1.eat();


class Person2{
    name;
    age;
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const tom2 = new Person2();
tom2.name = "Tom";
tom2.age = 37;
tom2.print();
 
const bob = new Person2();
bob.name = "Bob";
bob.age = 41;
bob.print();


class Person3{
 
    constructor(personName, personAge){
        this.name = personName;
        this.age = personAge;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const tom3 = new Person3("Tom", 37);
tom3.print(); 
const bob3 = new Person3("Bob", 41); 
bob3.print();

console.log('------ Private fields and methods -------');


class Person4{
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
}
const tom4 = new Person4("Tom", 37);
tom4.print();


class Person5{
    #name;
    #age= 1;
    constructor(name, age){
        this.#name = name;
        this.setAge(age);
    }
    setAge(age){
        if (age > 0 && age < 110) this.#age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
}
const tom5 = new Person5("5", 37);
tom5.print();
tom5.setAge(22);
tom5.print(); 
tom5.setAge(-1234);
tom5.print();


class Person6{
    #name = "undefined";
    #age = 1;
    constructor(name, age){
        this.#name = this.#checkName(name);
        this.setAge(age);
    }
    #checkName(name){
        if(name!=="admin") return name;
    }
    setAge(age){
        if (age > 0 && age < 110) this.#age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
}
const tom6 = new Person6("Tom", 37);
tom6.print();
const bob6 = new Person6("admin", 41);
bob6.print();


console.log('------ Static fields and methods -------');


class Person7{
    static retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`); 
    }
    static printClassInfo(){ 
        console.log("Класс Person представляет человека");
    }
}
 
console.log(Person7.retirementAge);
Person7.retirementAge = 62;
console.log(Person7.retirementAge); 
Person7.printClassInfo();


class Person8{
    static #retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
    static calculateRestAges(person){
        if(this.#retirementAge > person.age){
            const restAges = this.#retirementAge - person.age;
            console.log(`До пенсии осталось ${restAges} лет`);
        }
        else console.log("Вы уже на пенсии");
    }
}
const tom8 = new Person8("Tom", 37);
Person8.calculateRestAges(tom8); 
const bob8 = new Person8("Bob", 71);
Person8.calculateRestAges(bob8);
