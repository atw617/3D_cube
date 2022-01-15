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

// function 색바꾸기(id, color){
//     document.querySelector(id).style.backgroundColor = color
// }
// 이거 포문으로 바꿔줘야 됨(반환되는 class가 많아서 배열 형식으로 반환되기 때문)