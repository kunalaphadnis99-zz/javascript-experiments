async function fetchUsers() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log)
}

fetchUsers()