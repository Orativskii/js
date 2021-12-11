const filter = (array, func) => array.filter(el => func(el));

var input = [1, 2, 3, 4, 5, 6];
const isEven = (x) => x % 2 == 0; // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]
console.log(input); // [1, 2, 3, 4, 5, 6]