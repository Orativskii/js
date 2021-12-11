console.log('------ Copying objects -------');

const tom = { name: "Tom"};
const bob = tom;
console.log(tom.name);
console.log(bob.name);
         
bob.name = "Bob";
console.log("После изменения")
console.log(tom.name); 
console.log(bob.name);


const tom1 = { name: "Tom", age: 37};
const bob1 = Object.assign({}, tom1);
bob1.name = "Bob";
bob1.age = 41;
         
console.log(`Объект tom. Name: ${tom1.name}   Age: ${tom1.age}`);
console.log(`Объект bob. Name: ${bob1.name}   Age: ${bob1.age}`);

const tom2 = { name: "Tom"};
const sam2 = { age: 37};
const person = { height: 170};
Object.assign(person, tom2, sam2);
console.log(person);


const tom3 = { name: "Tom", age: 37};
const sam3 = { age: 45};
const person1 = { height: 170};
Object.assign(person1, tom3, sam3);
console.log(person1); 


const tom4 = { name: "Tom", company: {title: "Microsoft"}};
const bob4 = Object.assign({}, tom4);
bob4.name = "Bob";
bob4.company.title = "Google";
console.log(tom4.name);
console.log(tom4.company.title);

const tom5 = { name: "Tom", age: 37, company: "Google"};
const bob5 = {...tom5}
bob5.name = "Bob";
          
console.log(tom5);
console.log(bob5)


const tom6 = { name: "Tom"};
const bob6 = { name: "Bob"};
console.log(tom6 == bob6); 
console.log(tom6 === bob6);


console.log('------ Checking for existence and iterating over methods and properties -------');

const user = {};
user.name = "Tom";
user.age = 26;
user.print = function(){
     
    console.log(this.name);
    console.log(this.age);
};
const hasNameProp = "name" in user;
console.log(hasNameProp);
 
const hasWeightProp = "weight" in user;
console.log(hasWeightProp);


const hasNameProp1 = user.hasOwnProperty("name");
console.log(hasNameProp1);
const hasPrintMethod = user.hasOwnProperty("print");
console.log(hasPrintMethod);
const hasWeightProp1 = user.hasOwnProperty("weight");
console.log(hasWeightProp1);


const tom8 = {
    name: "Tom",
    age: 26,
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};

for(const prop in tom8) {
    console.log(prop, " : ", tom8[prop]);
}


for(const prop of Object.entries(tom8)) {
    console.log(prop);
}


for(const prop of Object.keys(tom8)) {
    const value = tom8[prop];   
    console.log(prop,value);
}


console.log(Object.values(tom8));


console.log('------ Objects in functions -------');

function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
           console.log("Имя: " + this.name + " возраст: " + this.age);
        }
    };
};
var tom9 = createUser("Tom", 26);
tom9.displayInfo();
var alice = createUser("Alice", 24);
alice.displayInfo();


function createUser1(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            console.log("Имя: " + this.name + " возраст: " + this.age);
        },
        driveCar: function(car){
            console.log(this.name + " ведет машину " + car.name);
        }
    };
};
 
function createCar(mName, mYear){
    return{
        name: mName,
        year: mYear
    };
};
var tom9 = createUser1("Том", 26);
tom9.displayInfo();
var bently = createUser1("Бентли", 2004);
tom9.driveCar(bently);


console.log('------ Objects constructor -------');

function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function(){
        console.log("Модель: " + this.name + "  Год выпуска: " + this.year);
    };
};

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
        console.log(this.name + " ведет машину " + car.name);
    };
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + this.age);
    };
};
 
var tom10 = new User("Том", 26);
tom10.displayInfo();
var bently = new Car("Бентли", 2004);
tom10.driveCar(bently);


var isUser = tom10 instanceof User;
var isCar = tom10 instanceof Car;
console.log(isUser);
console.log(isCar); 


console.log('------ Prototype -------');

    User.prototype.hello = function(){
        console.log(this.name + " говорит: 'Привет!");
    };
    User.prototype.maxAge = 110;
     
    var tom11 = new User("Том", 26);
    tom11.hello();
    var john = new User("Джон", 28);
    john.hello();
    console.log(tom11.maxAge);
    console.log(john.maxAge);
