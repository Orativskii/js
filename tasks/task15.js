const shallowCopy = (obj) => {
    let clone;
         obj instanceof Date ? clone = new Date() : clone = {};
    for (property in obj) {
      clone[property] = obj[property];
    }
    return clone;
  }

let c = new Date(2014, 1, 1);
let d = shallowCopy(c);
d.setFullYear(2015);
console.log(c.getFullYear());