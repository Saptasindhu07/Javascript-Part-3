let bucket_list=["salt","sugar","rice","oil"]
let _promise= new Promise((resolve,reject)=>{
    if(bucket_list.includes("salt")){
        resolve()
    }
    else{
        reject()
    }
})
_promise.then(
    ()=>{
        setTimeout(()=>{
        console.log("Please Wait Checking......")
        setTimeout(()=>{
            console.log("Fried Rice Ready")
        },1000)
    },2000)},
    ()=>{
        setTimeout(()=>{
        console.log("Please Wait Checking......")
        setTimeout(()=>{
            console.log("NOT AVAILABLE")
        },1000)
    },2000)}
)