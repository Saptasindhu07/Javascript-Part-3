fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })