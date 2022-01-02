document.querySelector("#one-btn").addEventListener("click", function(){
    document.querySelector(".flip-btn").style.transform = "rotatey(0deg)";
})
document.querySelector("#two-btn").addEventListener("click", function(){
    document.querySelector(".flip-btn").style.transform = "rotatey(-90deg)";
})
document.querySelector("#three-btn").addEventListener("click", function(){
    document.querySelector(".flip-btn").style.transform = "rotatey(-180deg)";
})
document.querySelector("#four-btn").addEventListener("click", function(){
    document.querySelector(".flip-btn").style.transform = "rotatey(-270deg)";
})
document.querySelector("#five-btn").addEventListener("click", function(){
    document.querySelector(".flip-btn").style.transform = "rotatex(-90deg)";
})
document.querySelector("#six-btn").addEventListener("click", function(){
    document.querySelector(".flip-btn").style.transform = "rotatex(90deg)";
})
