let xhr= new XMLHttpRequest()
let URL="https://jsonplaceholder.typicode.com/posts"
xhr.open("GET",URL)

xhr.onabort=()=>{
    console.log("ERORR "+xhr.status)
}
xhr.send()
xhr.abort()