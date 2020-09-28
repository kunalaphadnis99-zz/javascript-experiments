const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('It worked!')
    } else {
        reject('It Failed!')
    }
})
promise
    .then(result => {
        throw Error
        console.log(result)
    })
    .catch(() => console.log('Error caught!'))

// catch statement catches all the exception before in all the thens
