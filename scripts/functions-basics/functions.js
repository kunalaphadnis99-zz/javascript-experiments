var obj = {
    func() {
        console.log('This is a function');
        return;
    }
}

obj.func();
const obj2 = new Function('num', 'console.log(num * 2)');
obj2(2);

// Funciton are first class citizens
// 1. Can be assigned to properties and objects
var func = function () {};

// 2. Pass as aguements to another functions
function func1(func2) {
    func2();
}
// 3. Return functions as values
function func3() {
    return function func4() {
        return 'In function 4';
    }
}

// Default parameters
function func5(param = 6) {
    console.log(param);
}
func5();
