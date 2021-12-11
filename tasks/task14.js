let toString = Object.prototype.toString;

console.log(toString.call(new Date));
console.log(toString.call(new String));
console.log(toString.call(Math)); 
console.log(toString.call(undefined));
console.log(toString.call(null));