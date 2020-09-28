// Create our own prototypes:
var human = {
    mortal: true
}
var socrates = Object.create(human);
human.isPrototypeOf(socrates); // true

// --------------------------
Function.prototype.bind = function (whoIsCallingMe) {
    const self = this;
    return function () {
        return self.apply(whoIsCallingMe, arguments);
    };
}

// -----------------------
//Array.map() => to print '🗺'
Array.prototype.map = function () { // what happens with arrow function here?
    arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🗺'));
    }
    return arr;
}
console.log([1, 2, 3].map())

//Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
}

new Date('1900-10-10').lastYear()
// don't worry if you didn't get this... we will expand on this later.

// -----------------------
//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear()
//'1899'
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1
}
// No arrow funciton allowed

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
Array.prototype.map = function () {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i] + '🗺')
    }
    return arr
}
console.log([1, 2, 3].map())
//1🗺, 2🗺, 3🗺
// You can add your own functionality to the existing prototypes of objects and functions

// -----------------------------
Function.prototype.bind = function (whoIsCallingMe) {
    let self = this;
    return function () {
        return self.apply(whoIsCallingMe, arguments)
    }
}
