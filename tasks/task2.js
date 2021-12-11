const sequence = (start = 0, step = 1) => {
    let callNumber = start;
    return () => {
      let returnValue = callNumber;
      callNumber += step;
      return returnValue;
    }
}

const take = (gen, x) => {
    let i = 0; 
    let resultArr = [];
    while(i < x) {
        resultArr.push(gen());
        i++;
    }
    return resultArr;
}

let gen2 = sequence(0, 2);
console.log(take(gen2, 5));