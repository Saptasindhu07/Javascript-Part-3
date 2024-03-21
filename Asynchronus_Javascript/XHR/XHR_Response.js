let xhr = new XMLHttpRequest()
let URL="https://jsonplaceholder.typicode.com/posts"
xhr.open("GET",URL)
xhr.onreadystatechange=()=>{
if(xhr.readyState===4){
console.log(xhr.response)
}
}
xhr.send()
