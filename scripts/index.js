document.querySelectorAll(".hamburger-container").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector(".small-screen-pages-container").classList.toggle("show-nav")
  })
})
document.querySelector(".date").innerHTML = new Date().getFullYear()
