let xhr= new XMLHttpRequest()
let URL="https://jsonplaceholder.typicode.com/posts"
let response=0
xhr.open("GET",URL)
xhr.addEventListener("loadstart",()=>{
    console.log("STARTED Loading")
})
xhr.onloadend=()=>{
    if(xhr.status>=200 & xhr.status<=300){
        console.log("successful Load")
    }
    else{
        console.log("unsuccessful Load")
    }

}
xhr.addEventListener("readystatechange",()=>{
    if(xhr.readyState==4){
        console.log(JSON.parse(xhr.response))
    }
})
xhr.onerror=()=>{
    console.log("Internet Problem")
}
xhr.send()