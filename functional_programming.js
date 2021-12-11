console.log('------ Functions -------');
const hello = () => {
    console.log('Hello Metanit.com');
}

hello();
hello();
hello();

const printHello = hello;

printHello();

const goodMorning = () => {
    console.log('Доброе утро');
}
const goodEvening = () => {
    console.log('Добрый вечер');
}

let message = goodMorning;
message();
message = goodEvening;
message();

console.log('------ Function parameters -------');
const newMessage = (message) => console.log(message);
newMessage('Hello js');
newMessage();

const sum = (a, b) => {
    const result = a + b;
    console.log(result);
}
 
sum(2, 6);
sum(4, 5);
sum(109, 11);  

const sum1 = (x, y) => {
    y ? null : y = 5;
    x ? null : x = 8;
    const z = x + y;
    console.log(z);
}
sum1();
sum1(6);
sum1(6, 4) 

const sum2 = (x = 8, y = 5) => {
    const z = x + y;
    console.log(z);
}
sum2();
sum2(6);
sum2(6, 4)

const sum3 = (x = 8, y = 10 + x) => {
    const z = x + y;
    console.log(z);
}
sum3();
sum3(6);  
sum3(6, 4)

const display = (season, ...temps) => {
    console.log(season);
    for(index in temps){
        console.log(temps[index]);
    }
}
display('Весна', -2, -3, 4, 2, 5);
display('Лето', 20, 23, 31);


const sum4 = (x, y) => {
    return x + y;
}
 
const subtract = (x, y) => {
    return x - y;
}
 
const operation = (x, y, func) => {
    const result = func(x, y);
    console.log(result);
}
 
console.log('Sum');
operation(10, 6, sum4);
 
console.log('Subtract');
operation(10, 6, subtract);

console.log('------ Function result -------');

const sum5 = (a, b) => {
    const result = a + b;
    return result;
}
let num1 = sum5(2, 4);
console.log(num1);
 
const num2 = sum5(6, 34);
console.log(num2); 


const menu = (n) => {
    if(n==1) return function(x, y){ return x + y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return function(){ return 0;}
}
 
let action = menu(1);   
let result = action(2, 5);  
console.log(result);

action = menu(1);
result = action(2, 5);

const menu1 = (n) => {
    if(n==1) return function(x, y){ return x + y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return function(){ return 0;};
}
 
action = menu1(1);
console.log(action(2, 5));          // 7
 
action = menu1(2);
console.log(action(2, 5));          // -3
 
action = menu1(3);
console.log(action(2, 5));          // 10
 
action = menu1(190);
console.log(action(2, 5));

console.log('------ Variable visibility scope -------');

var a = 5;
let b = 8;
const c = 9;
const displaySum = () => {
    var d = a + b + c;
    console.log(d);
}
displaySum();

const print1 = () => {
    var a = 5;
    let b = 8;
    const c = 9;
    console.log("Function print: a =", a);
    console.log("Function print: b =", b);
    console.log("Function print: c =", c);
}
print1();
console.log("Global: a =", a);

console.log('------ Closures and IIFE Functions -------');

const outer = () => {
    let x = 5;
    function inner(){
        x++;
        console.log(x);
    };
    return inner;
}
let fn = outer();
fn();
fn();
fn();

const multiply = (n) => {
    var x = n;
    return function(m){ return x * m;};
}
var fn1 = multiply(5);
var result1 = fn1(6);
console.log(result1);
 
var fn2= multiply(4);
var result2 = fn2(6);
console.log(result2);


(function(){
    console.log('Привет мир');
}());
 
(function (n){
     
    var result = 1;
    for(var i=1; i<=n; i++)
        result *=i;
    console.log('Факториал числа ' + n + ' равен ' + result);
}(4));


console.log('------ Pattern Module -------');

let foo = (function(){
    let obj = {greeting: "hello"};
     
    return {
        display: function(){
            console.log(obj.greeting);
        }
    }
})();
foo.display();

let calculator = (function(){
    let data = { number: 0};
     
    return {
        sum: function(n){
            data.number += n;
        },
        subtract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();
calculator.subtract(4);
calculator.display();

console.log('------ Recursive functions -------');

const getFactorial = (n) => {
    if (n === 1){
        return 1;
    }
    else{
         
        return n * getFactorial(n - 1);
    }
}
result = getFactorial(4); 
console.log(result);

const getFibonachi = (n) =>
{
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    else{
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
result = getFibonachi(8);
console.log(result);

console.log('------ Overriding functions -------');

let display1 = () => {
    console.log('Доброе утро');
    display1 = () => {
        console.log('Добрый день');
    }
}
 
display1();
display1();


display2 = () =>{
    console.log('Доброе утро');
    display2 = () => {
        console.log('Добрый день');
    }
}

var displayMessage = display2;
display2();
display2();
displayMessage();
displayMessage();

console.log('------ Hoisting -------');

console.log(foo1);
var foo1 = "Tom";


var m = n * l;
var n = 7;
var l = 3;
console.log(m);

console.log('------ Passing parameters by value and by reference -------');

let change = (x) => {
    x = 2 * x;
    console.log('x in change:', x);
}
 
var n = 10;
console.log('n before change:', n);
change(n);                    
console.log('n after change:', n);


change = (user) => {
    user.name = 'Tom';
}
 
let bob ={ 
    name: 'Bob'
};
console.log('before change:', bob.name);
change(bob);
console.log('after change:', bob.name);


change = (user) => {
    user= {
        name:"Tom"
    };
}
 
var bob1 ={ 
    name: "Bob"
};
console.log("before change:", bob1.name);
change(bob1);
console.log("after change:", bob1.name);


change = (array) =>{
    array[0] = 8;
}
changeFull = (array) => {
    array = [9, 8, 7];
}
 
var numbers = [1, 2, 3];
 
console.log("before change:", numbers);     // [1, 2, 3]
change(numbers);
console.log("after change:", numbers);      // [8, 2, 3]
changeFull(numbers);
console.log("after changeFull:", numbers); 