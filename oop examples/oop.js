let user = {};
user.name = "Tom";
user.age = 26;

console.log(user.name);
console.log(user.age);


let user1 = {
    name: "Tom",
    age: 26
};

console.log(user1)


let name = "Tom";
let age = 34;
let user2 = {name, age};
 
let teacher = {user, course: "JavaScript"};
console.log(teacher.user); 
console.log(teacher.course);


user.display = function(){
     
    console.log(user.name);
    console.log(user.age);
};
 
user.display();


let user3 = {
  
    name: "Tom",
    age: 26,
    display(){
      
        console.log(this.name, this.age);
    },
    move(place){
        console.log(this.name, "goes to", place);
    }
};
user3.display();
user3.move("the shop");


let user4 = {
    ["name"]: "Tom",
    ["age"]: 26,
    ["display"]: () => {
        console.log(user4.name);
        console.log(user4.age);
    }
};
user4["display"]();


let user5 = {
    "name": "Tom",
    "age": 26,
    "display": function(){
        console.log(user5.name);
        console.log(user5.age);
    }
};
user5.display();


const prop1  = "name";
const prop2  = "age";
let tom = { 
    [prop1]: "Tom",
    [prop2]: 37
};
console.log(tom);
console.log(tom.name);  
console.log(tom["age"]);  


const createObject = (propName, propValue) => {
    return {
            [propName]: propName,
            print(){ 
                console.log(`${propName}: ${propValue}`);
            }
    };
}
let person = createObject("name", "Tom");
person.print();
 
let book = createObject("title", "JavaScript Reference");
book.print(); 


let user6 = {};
user6.name = "Tom";
user6.age = 26;
user6.display = function(){
     
    console.log(user6.name);
    console.log(user6.age);
};
 
console.log(user6.name);
delete user6.name;
console.log(user6.name);


const person1 = {name: "Tom", age: 37};
Object.freeze(person1);
person1.name= "Bob";
console.log(person1.name);  


const getSalary = (status) => {
    if(status==="senior") return 1500;
    else return 500;
}
const name1 = "Tom";
const age1 = 37;
const person2 = { name: name1, age: age1, salary: getSalary()};
 
console.log(person2);


const personData = [ ["name", "Tom"], ["age", 37]];
const person3 = Object.fromEntries(personData);
console.log(person3);
console.log(person3.name); 

console.log('------ Nested objects and arrays in objects -------');

var country = {
 
    name: "Германия",
    language: "немецкий",
    capital:{
        name: "Берлин",
        population: 3375000,
        year: 1237
    }
};
console.log("Столица: " + country.capital.name);
console.log("Население: " + country["capital"]["population"]);
console.log("Год основания: " + country.capital["year"]);
