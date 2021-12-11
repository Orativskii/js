console.log('------ Encapsulation -------');

function User (name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + _age + "<br>");
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
 
var tom = new User("Том", 26);
console.log(tom._age);
console.log(tom.getAge());
tom.setAge(32);
console.log(tom.getAge());
tom.setAge("54");


console.log('------ Function as an object. Call and apply methods -------');

function display(){
    console.log("привет мир");
}
Function.prototype.program ="Hello";
 
console.log(display.program);


function add(x, y){
    return x + y;
}
var result = add.call(this, 3, 8);
 
console.log(result);


function User1 (name, age) {
    this.name = name;
    this.age = age;
}
var tom = new User1("Том", 26);
function display1(){
    console.log("Ваше имя: " + this.name);
}
display1.call(tom);


function add1(x, y){
    return x + y;
}
var result1 = add1.call(null, 3, 8);
 
console.log(result1);


function add2(x, y){
    return x + y;
}
var result2 = add2.apply(null, [3, 8]);
 
console.log(result);


console.log('------ Inheritance -------');

function User2 (name, age) {
    this.name = name;
    this.age = age;
    this.go = function(){console.log(this.name + " идет");}
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + this.age);
    };
}
User2.prototype.maxage = 110;
 
function Employee(name, age, comp){
    User2.call(this, name, age);
    this.company = comp;
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company);
    };
}
Employee.prototype = Object.create(User2.prototype);
 
var tom = new User2("Том", 26);
var bill = new Employee("Билл", 32, "Google");
tom.go();
bill.go();
tom.displayInfo(); 
bill.displayInfo(); 
console.log(bill.maxage);

console.log('------ The this keyword -------');

function foo(){
    var bar = "bar2";
    console.log(this.bar);
}
 
var bar = "bar1";
 
foo();


function foo1(){
    var bar1 = "bar2";
    console.log(this.bar1);
}
 
var o3 = {bar1:"bar3", foo1: foo1};
var o4 = {bar1:"bar4", foo1: foo1};
 
var bar1 = "bar1";
 
foo1();
o3.foo1();
o4.foo1();


function foo2(){
    console.log(this.bar);
}
 
var o3 = {bar: "bar3"}
foo2();
var func = foo2.bind(o3);
func();


const school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
        this.courses.forEach((course)=>console.log(this.title, course))
    }
}
school.printCourses();


console.log('------ Destcructurisation -------');

const tom1 = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
const {name, age, ...contacts} = tom1;
console.log(name);     
console.log(age);  
console.log(contacts);


let users = ["Tom", "Sam", "Bob"];
let [a, b, c, d] = users;
  
console.log(a);  
console.log(b);
console.log(c); 
console.log(d);


let users1 = ["Tom", "Sam", "Bob", "Ann", "Alice", "Kate"];
let [first,,,,fifth] = users1;
 
console.log(first);
console.log(fifth);


let people = [
    {name1: "Tom", age: 34},
    {name1: "Bob", age: 23},
    {name1: "Sam", age: 32}
];
let [,{name1}] = people;
 
console.log(name1);


function display({name:userName, age:userAge}){
    console.log(userName, userAge);
}
function sum([a, b, c]){
    const result = a + b + c;
    console.log(result);
}
let user = {name:"Alice", age:33, email: "alice@gmail.com"};
 
let numbers = [3, 5, 7, 8];
 
display(user);
sum(numbers);


let nums = [9, 3, 5, 2, 1, 4, 8, 6];
for(let i = 0; i < nums.length; i++)
    for(let j = 0; j < nums.length; j++)
        if (nums[i] < nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];
         
console.log(nums);

console.log('------ ?. operator -------');

let tom3 = { name: "Tom"};
let bob3 = {
    name: "Bob", 
    company: {
        title: "Microsoft"
    }
};
 
console.log(tom3.company?.title); 
console.log(bob3.company?.title);


let tom4 = { name: "Tom"};
let bob4 = {
    name: "Bob", 
    languages: ["javascript", "typescript"]
};
 
console.log(tom4.languages?.[0]);
console.log(bob4.languages?.[0]); 


let sam5 = {name: "Sam"};
let tom5 = { 
    name: "Tom", 
    company: { title: "Google"}
};
let bob5 = {
    name: "Bob", 
    company: {
        title: "Microsoft",
        print(){
            console.log(`Компания ${this.title}`)
        }
    }
};
sam5?.company?.print?.();
tom5?.company?.print?.();
bob5?.company?.print?.();