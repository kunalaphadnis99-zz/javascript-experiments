function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a()

//closures and higher order function
function boo(string) {
    return function (name) {
        return function (name2) {
            console.log(`hi ${name2}`)
        }
    }
}

const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`)

boo('hi')('john')('tanya');

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
booString = boo2('sing');
booStringName = booString('John');
booStringNameName2 = booStringName('tanya')

// -----------------------------------------------
function heavyDuty(item) {
    const bigArray = new Array(7000).fill('😄')
    console.log('created!');
    return bigArray[item]
}

heavyDuty(699)
heavyDuty(699)
heavyDuty(699)
const getHeavyDuty = heavyDuty2();
getHeavyDuty(699)
getHeavyDuty(699)
getHeavyDuty(699)

// but i dont want to pollute the global namespace..
function heavyDuty2() {
    const bigArray = new Array(7000).fill('😄')
    console.log('created Again!')
    return function (item) {
        return bigArray[item]
    }
}

// ----------------------------------------------
// Exercise:
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '💥';
    }

    setInterval(passTime, 1000);
    return {
        totalPeaceTime
    }
}

const ww3 = makeNuclearButton();
ww3.totalPeaceTime()

// ------------------------------
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + i)
    }, 3000)
}

// ------------------------------
let view;

function initialize() {
    let called = 0;
    return function () {
        if (called > 0) {
            return
        } else {
            view = '🏔';
            called = true;
            console.log('view has been set!')
        }

    }
}

const start = initialize();
start();
start();
start();
console.log(view)
