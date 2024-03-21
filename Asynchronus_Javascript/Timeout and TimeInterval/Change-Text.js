let a=document.getElementsByTagName("h1")
let b= function(position,text,time){
    setTimeout(()=>{
    a[position].textContent=text
    },time)
}
b(0,"Heading 1",1000)
b(1,"Heading 2",2000)
b(2,"Heading 3",3000)
b(3,"Heading 4",4000)
b(4,"Heading 5",5000)
b(5,"Heading 6",6000)