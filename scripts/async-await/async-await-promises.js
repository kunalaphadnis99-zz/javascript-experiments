var urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    'https://jsonplaceholder.typicode.com/comments?postId=1'
]

async function getJsons() {
    try {
        const [posts, post1, comments, post] = await Promise.all(urls.map(url => {
                const response = await fetch(url);
                return response.json();
            }))
            .then(result => console.log('All calls completed'))
            .catch(error => console.log('Error caught'))
            .finally(() => console.log('In finally!'))

        console.log(posts)
        console.log(post1)
        console.log(comments)
        console.log(post)
    } catch (error) {
        console.log(error)
    }
}

getJsons()
