let change_text= function(element,color,time,onError){
    if(document.getElementsByClassName(element)[0]){
    setTimeout(()=>{
        document.getElementsByClassName(element)[0].style.color=color
    },time)
    }
    else{
        onError()
    }
}
let onError= function(){
    console.log("ERROR")
}
change_text("heading2","red",1000,onError)
change_text("heading4","red",1000,onError)
change_text("heading6","red",1000,onError)
change_text("heading2","red",1000,onError)
change_text("heading","red",1000,onError)

