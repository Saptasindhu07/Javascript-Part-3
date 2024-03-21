let change_text= function(element,colour,text_content,time){
    return new Promise(function(resolve,reject){
        if(document.getElementById(element)){
            setTimeout(()=>{
            document.getElementById(element).style.color=colour
            document.getElementById(element).textContent=text_content
            resolve()
        },time)
        }
        else{
            reject()
        }
    }
    )
}
let first_Run=change_text("Text1","red","Heading 1 is Resolved",1000)
first_Run.then(
    ()=>{
    return change_text("Text2","purple","Heading 2 Resolved",1000)
    },
    ()=>{console.log("Failed at Heading 1")
        return change_text("Text2","purple","Heading 2 Resolved",1000)
        
    }
)
.then(
    ()=>{
    return change_text("Text3","blue","Heading 3 Resolved",1000)
    },
    ()=>{console.log("Failed at Heading 2")
        return change_text("Text3","purple","Heading 2 Resolved",1000)
        
    }
)
.then(
    ()=>{
    return change_text("Text4","orange","Heading 4 Resolved",1000)
    },
    ()=>{console.log("Failed at Heading 3")
        return change_text("Text4","purple","Heading 2 Resolved",1000)
        
    }
)
.then(
    ()=>{
    return change_text("Text5","red","Heading 5 Resolved",1000)
    },
    ()=>{console.log("Failed at Heading 4")
        return change_text("Text5","purple","Heading 2 Resolved",1000)
        
    }
)
.then(
    ()=>{
    return change_text("Text6","green","Heading 6 Resolved",1000)
    },
    ()=>{
        console.log("Failed at Heading 5")
        return change_text("Text2","purple","Heading 2 Resolved",1000)
        
    }
)

