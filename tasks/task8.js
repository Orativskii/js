const pluck = (array, field) => array.map(el => el[field]);

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
  ];
  
  console.log(pluck(characters, 'name')); // ['barney', 'fred']