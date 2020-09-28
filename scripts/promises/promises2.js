const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 6000, 'Completed promise 1')
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Completed promise 2')
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Completed promise 3')
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Completed promise 4')
})

Promise.all([promise1, promise2, promise3, promise4])
    .then(results => {
        console.log(results);
    })
    .catch(error => console.log(error))
    .finally(data => console.log('In finally!'))

const promises = [promise1, promise2, promise3, promise4]
for (let i = 0; i < promises.length; i++) {
    promises[i].then(result => console.log(result))
}