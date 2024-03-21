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
        console.log("FRIED RICE READY")
    },
    ()=>{
      console.log("CANNOT DO")  
    }
)