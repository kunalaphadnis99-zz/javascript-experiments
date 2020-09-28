var urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    'https://jsonplaceholder.typicode.com/comments?postId=1'
]

Promise.all(urls.map(url => {
        return fetch(url).then(res => res.json())
    }))
    .then(results => {
        results.map((result, i) => {
            console.log(`RESULT ${i+1}`)
            console.log(result)
            console.log('--------------------')
        })
    })
    .catch(error => {
        console.log(error)
    })
    .finally(data => console.log('In finally!'))