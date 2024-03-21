let decorator_=function(run_decision,element_name,index){
    return new Promise(
        function(resolve,reject){
            if(run_decision=="yes"){
                console.log(`${index+1} step running......`)
                setTimeout(()=>{
                document.getElementsByTagName(element_name)[index].classList.add("styled")
                console.log(`${index+1} step complete.`)
                resolve()
            },5000)
            }
            else{
                reject()
            }
        }
    )
}
let initiator=decorator_("yes","h1",0)
initiator.then(
    ()=>{
        return decorator_("yes ","h1",1)
    },
    ()=>{
        console.log("FAIL AT 1st Element")
        return decorator_("yes","h1",1)
    }
)
.then(
    ()=>{
        return decorator_("yes","h1",2)
    },
    ()=>{
        console.log("Fail at 2nd Element")
        return decorator_("yes","h1",2)
    }
)

