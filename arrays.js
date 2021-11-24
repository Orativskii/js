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
