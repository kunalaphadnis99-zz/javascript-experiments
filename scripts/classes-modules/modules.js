var harry = 'potter'
var voldemort = 'He who must not be named'

function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    // return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    return attack1 > attack2;
}

let char1wincount = 0,
    char2wincount = 0;
const maxPlayCount = 1000
do {
    const isChar1Winner = fight(harry, voldemort)
    if (isChar1Winner) {
        char1wincount++;
        document.querySelector('#char1wincount').innerHTML = `Harry ${char1wincount}`
    } else {
        char2wincount++;
        document.querySelector('#char2wincount').innerHTML = `Voldemort ${char2wincount}`
    }
    maxPlayCount--;
} while (maxPlayCount > 0)