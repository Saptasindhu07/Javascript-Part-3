let xhr = new XMLHttpRequest()
//let URL="https://jsonplaceholder.typicode.com/posts"
let sendRequest= function(URL){
    return new Promise((resolve,reject)=>{
        xhr.open("GET",URL)
        xhr.onloadend=()=>{
        if(xhr.status>=200 & xhr.status<=300){
            resolve(xhr.response)
        }
        else{
            reject(new Error("Error Encounterd"))
        }
    }
        xhr.onerror=()=>{
            reject(new Error("Error Encountered"))        
        }
        xhr.send()
    })
}
sendRequest("https://jsonplaceholder.typicode.com/posts").then(
    (argument_received)=>{
        console.log(argument_received)
    },
    (argument_received)=>{
        alert(argument_received)
    }
)
.then(
    ()=>{
        sendRequest("https://jsonplaceholder.typicode.com/posts/1").then(
            (arg)=>{
                console.log("PROMISE 2")
                console.log(JSON.parse(arg))
            },
            ()=>{
                console.log("Error")
            }
        )
    },
    ()=>{
        console.log("Error")
    }
)