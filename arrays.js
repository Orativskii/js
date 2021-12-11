const myArray = [1, 2, 3, 4, 5];
const bananaArray = Array.from('banana');
const bigBananaArray = Array.from(bananaArray, el => el.toUpperCase());

const strangeArray = Array.from({length: 3}, (el, index) => index);

const myJsSkills = Array.from(
    {
        length: 5, 
        0: 'JS', 
        1: 'NodeJS', 
        2: 'React', 
        3: 'Angular', 
        4: 'Express',
        5: 'TypeScript'
    }, el => el);

const myJsSkillsLength = myJsSkills.length;

myJsSkills[100] = 'Prisma';
myJsSkills[101] = 'Sequelize';
myJsSkills[102] = 'TypeORM';

const alsoMyJsSkillsLength = myJsSkills.length;

console.log(myArray);

console.log(bananaArray);
console.log(bigBananaArray);

console.log(strangeArray);

console.log(myJsSkills);
console.log(myJsSkillsLength);
console.log(alsoMyJsSkillsLength)

console.log('---------------------------------Spread---------------------------------');

const printAllBananas = (...arguments) => {
    arguments.forEach(arg => {
        console.log(arg);
    })
}


const newAllBanansArray = [...bananaArray, ...bigBananaArray];
printAllBananas(...newAllBanansArray);

console.log(...bananaArray)

console.log('---------------------------------Array operations---------------------------------');

console.log(myJsSkills.slice(2));


myJsSkills.push('new skill');
console.log(myJsSkills);


myJsSkills.pop();
console.log(myJsSkills);


console.log(myJsSkills.shift());


myJsSkills.unshift('new skill');
console.log(myJsSkills);


myJsSkills.splice(1);
console.log(myJsSkills);


myJsSkills.concat(bananaArray);
console.log(myJsSkills);


console.log(myJsSkills.join());


console.log(myJsSkills.sort());


console.log(myJsSkills.reverse());


console.log(myJsSkills.indexOf('Prisma'));


console.log(myJsSkills.includes('Prisma'));


const numbers = [ 1, -12, 8, -4, 25, 42 ];
const passed = numbers.every(n => n > 0);
console.log(passed); 


const passed1 = numbers.some(n => n > 0);
console.log(passed1);


const filteredNumbers = numbers.filter(n => n > 0);
console.log(filteredNumbers);


numbers.forEach(n => 
  console.log("Квадрат числа", n, "равен", n * n )
);


let found = numbers.find(n => n > 10 );
console.log(found);


const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
const flattenPeople = people.flat().flat();
console.log(flattenPeople);


console.log('---------------------------------Array inheritance---------------------------------');


class Team extends Array{
     
  constructor(name, ...members){
      super(...members);
      this.name = name;
  }
}

const barcelona = new Team("Barcelona", "Tom", "Sam", "Bob");
console.log(barcelona);

for(const person of barcelona) {
  console.log(person);
}
barcelona.push("Tim");
console.log(barcelona); 
barcelona.splice(1, 1); 
console.log(barcelona);


class Team1 extends Array{
     
  constructor(name, ...members){
      super(...members);
      this.name = name;
  }
  push(person){
      if(person !== "admin") super.push(person);
  }
}

const snowbars = new Team1("SnowBars", "Tom", "Sam", "Bob");

snowbars.push("admin");
console.log(snowbars);
snowbars.push("Tim");   
console.log(snowbars); 