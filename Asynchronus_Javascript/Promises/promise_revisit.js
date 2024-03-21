let smh= function(decision){
    return new Promise(
        function(resolve,reject){
            if(decision=="Yes"){
                console.log("Running")
                setTimeout(()=>{
                    console.log("I RAN")
                    resolve()
                },5000)
            }
            else{
                setTimeout(()=>{
                    console.log("I did not RUN")
                    reject()
                },5000)
            }
        }
    )
}
smh("Yes")
.then(
    ()=>{
        console.log("Success")
        smh("No")
    },
    ()=>{
        smh("No")
    }
)