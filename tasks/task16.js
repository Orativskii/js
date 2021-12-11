const deepCopy = (object) => {
    let clone = new object.constructor;

    for (let property in object) {
    	if (typeof object[property] == 'object' && object[property] != null) {
        clone[property] = deepCopy(object[property]);
      } else {
      	clone[property] = object[property];
      }
    }
    return clone;
}

let a = { x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null, w: new Date(2014, 1, 1, 12, 0, 0) };
let b = deepCopy(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1

// a.z и b.z указывают на разные массивы: 
b.z.push(4);
console.log(a.z); // [1, 2, 3]

// a.w и b.w независимы друг от друга
b.w.setFullYear(2015);
console.log(a.w.getFullYear()); // 2014