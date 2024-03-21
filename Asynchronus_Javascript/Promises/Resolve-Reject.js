let promise_=new Promise(
    function(resolve,reject){
        console.log("Start")
        resolve()
        reject()
    }
)
promise_.then(
    ()=>{
        setTimeout(()=>{
            console.log("Program Runnning")
        },2000)
    },
    ()=>{
        setTimeout(()=>{
            console.log("Ended")
        },4000)
    }
)