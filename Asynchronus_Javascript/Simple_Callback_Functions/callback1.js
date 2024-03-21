let add=function(num1,num2){
    console.log(num1+num2)
}
let a=function(num1,num2,add){
    console.log("Numbers are",num1,num2)
    add(num1,num2)
}
a(22,23,add)
