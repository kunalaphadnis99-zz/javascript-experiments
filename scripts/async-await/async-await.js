var urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    'https://jsonplaceholder.typicode.com/comments?postId=1'
]

async function startRandomCalls() {
    for (let i = 0; i < 10; i++) {
        const firstRandom = await new Promise((resolve, reject) => {
            return resolve(fetch(urls[1]).then(res => res.json()))
        })
            .then(res => console.log(res))
            .catch(err => console.log)
    }
}
startRandomCalls()