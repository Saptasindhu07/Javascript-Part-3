let new_promise= new Promise(
    function(resolve,reject){
        resolve()
    }
)
new_promise.then(
    ()=>{
        setTimeout(
            ()=>{
                console.log("First Promise Chain Completed")
            },5000
        )
        return new Promise(
            function(resolve,reject){
                resolve()
            }
        )
    }
)
.then(
    ()=>{
        setTimeout(
        ()=>{
            console.log("Second Chain Complete")
        },10000
    )}
)