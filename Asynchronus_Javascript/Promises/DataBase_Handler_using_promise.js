let user_data={
    "user1":{
        id:1,
        name:"Sapta Sindhu",
        job:"Plumber"
    },
    "user2":{
        id:2,
        name:"Sagnik",
        job:"Doctor"
    },
    "user3":{
        id:3,
        name:"Ujan",
        job:"Doctor"
    },
    "user4":{
        id:4,
        name:"Bostik",
        job:"Student"
    },
    "user5":{
        id:5,
        name:"Panda",
        job:"Technician"
    }
}
let editor_=function(key_){
    return new Promise((resolve,reject)=>{
            if(key_ in user_data){
                resolve()
            }
            else{
                reject()
            }
        }
    )
}
let key_=prompt("Enter Key to Access")
editor_(key_).then(
    ()=>{
        let updation=prompt("Which Key to Update?")
        let updation2=prompt("Enter Updated Value")
        user_data[key_][updation]=updation2
        console.log(user_data) 
    },
    ()=>{
        console.log("Not Found")
    }
)
    
