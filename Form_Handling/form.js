let setError=function(index,SetError){
    document.getElementsByClassName("error")[index].textContent=SetError
}
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()
})
let submit_func=function(){
    console.log("running")
    let current_=true
    if(document.getElementById("first_name").value.length<=2){
        setError(0,"Name too Short")
        console.log("error")
        current_=false
    }
    if(document.getElementById("last_name").value.length<=2){
        setError(1,"Name too Short")
        current_=false
    }
    if(document.getElementById("phone").value.length!==10){
        setError(2,"Please enter valid 10 digit number")
        current_=false
    }
    let password=document.getElementById("pass").value
    let number_count=0
    for(let i=0;i<password.length;i++){
        if(password.charCodeAt()>47 && password.charCodeAt()<58){
            number_count+=1
        }
        if(number_count<1){
            setError(3,"Password must contain atleast 1 Number")
            current_=false
        }
    }
    return current_
}
