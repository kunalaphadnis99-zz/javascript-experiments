const animalWeights = {
    tigers: 400,
    monkeys: 60,
    lions: 450,
    elephants: 3000
}

let clonedAnimalWeights = {
    ...animalWeights
};
console.log(clonedAnimalWeights)

//--------------------------------------------
let {
    tigers,
    ...rest
} = clonedAnimalWeights
console.log(tigers)
console.log(rest)

//--------------------------------------------
let array = [1, 2, 3, 4, 5, 6]

function sum(a, b, c, d, e, f) {
    return a + b + c + d + e + f
}
console.log(sum(...array))
