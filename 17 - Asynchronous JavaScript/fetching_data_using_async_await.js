// Fetching data from JSON Placeholder using async and await

const fetchPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const parsedData = await response.json()
    console.log(parsedData)
}
//fetchPosts();

function fetchComments () {
    fetch("https://jsonplaceholder.typicode.com/commen")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .then(parsedData => { 
            console.log(parsedData)
        })
        .catch(error => {
            console.error("Fetch failed:", error.message)
        })
}


fetchComments();