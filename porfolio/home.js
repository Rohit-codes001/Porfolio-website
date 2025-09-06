let menubtn = document.querySelector(".menu")
let navbar = document.querySelector(".phone-navbar")
menubtn.addEventListener("click",function(){

navbar.classList.toggle("show")
})

window.onload = function(){
  let divshow =  document.querySelector(".center-div")
  divshow.classList.add("show")
}