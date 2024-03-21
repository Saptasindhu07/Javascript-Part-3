var refresh
document.getElementById("start").addEventListener("click",function(){
    refresh_= setInterval(function(){
    let generator_1=Math.floor(Math.random()*250)
    let generator_2=Math.floor(Math.random()*250)
    let generator_3=Math.floor(Math.random()*250)
    let color_string=`rgb(${generator_1},${generator_2},${generator_3})`
    document.body.style.backgroundColor=color_string
},700)}
)
document.getElementById("stop").addEventListener("click",function(){
    clearInterval(refresh_)
    document.body.style.backgroundColor="white"
})
