const sequence = (start = 0, step = 1) => {
    let callNumber = start;
    return () => {
      let returnValue = callNumber;
      callNumber += step;
      return returnValue;
    }
}

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2());