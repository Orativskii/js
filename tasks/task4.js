const sequence = (start = 0, step = 1) => {
    let callNumber = start;
    return () => {
      let returnValue = callNumber;
      callNumber += step;
      return returnValue;
    }
}

let fmap = function(a, gen){
    return function() {
        let array = [];
        let i = 0; 
        while (i < arguments.length) {
            array[i] = arguments[i];
            i++;
        }
        let x = a(gen.apply(null, array));
        return x;
    }
} 


var gen = sequence(1, 1);

const square = (x) => x * x; 

var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16


const add = (a, b) => { 
    return a + b; 
}

// Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2