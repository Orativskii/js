const SIZE_SMALL = {money: 50, callory: 20}
const SIZE_LARGE = {money: 100, callory: 40}
const STUFFING_CHEESE = {money: 10, callory: 20}
const STUFFING_SALAD = {money: 20, callory: 5}
const STUFFING_POTATO = {money: 15, callory: 10}
const TOPPING_MAYO = {money: 20, callory: 5}
const TOPPING_SPICE = {money: 15, callory: 0}


class Hamburger {
    static SIZE_SMALL = {money: 50, callory: 20}
    static SIZE_LARGE = {money: 100, callory: 40}
    static STUFFING_CHEESE = {money: 10, callory: 20}
    static STUFFING_SALAD = {money: 20, callory: 5}
    static STUFFING_POTATO = {money: 15, callory: 10}
    static TOPPING_MAYO = {money: 20, callory: 5}
    static TOPPING_SPICE = {money: 15, callory: 0}
    size = {};
    stuffing = {};
    topping = [];

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    calculateCalories() {
        return this.size.callory + this.stuffing.callory + this.getToppingCallory();
    }

    calculatePrice() {
        return this.size.money + this.stuffing.money + this.getToppingPrice();
    }

    getToppingCallory() {
        let result = 0;
        this.topping.forEach(el => {
            result += el.callory;
        })
        return result;
    }

    getToppingPrice() {
        let result = 0;
        this.topping.forEach(el => {
            result += el.money;
        })
        return result;
    }

    removeTopping(topping) {
        this.topping = this.topping.filter(el => topping == el)
    }

    getSize() {
        return this.size
    }

    setSize(size) {
        this.size = size;
    }

    getStuffing() {
        return this.stuffing
    }

    setStuffing(stuffing) {
        this.stuffing = stuffing;
    }

    getToppings() {
        return this.topping
    }

    addTopping(topping) {
        this.topping.push(topping)
    }
}

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1