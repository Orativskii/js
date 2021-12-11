const city = [
    {
        name: 'Токио — Иокогама',
        peoples: 39105 
    },
    {
        name: 'Джакарта',
        peoples:  35362
    },
    {
        name: 'Дели',
        peoples: 31870
    }
]

const calculate = (n) => {
    let result = city.sort((a, b) => a.peoples < b.peoples ? 1 : -1);
    for(let i = 0; i < n; i++)
        console.log(result[i]);
}

calculate(2);