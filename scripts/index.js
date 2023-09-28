window.addEventListener("scroll",function(){
  const scrollIndex = this.pageYOffset
  scrollIndex >= 50 ? 
   this.document.querySelector(".navBar").classList.add("fixed-nav")
    :
  this.document.querySelector(".navBar").classList.remove("fixed-nav")
})

document.querySelectorAll(".bar-container").forEach((icon)=>{
  icon.addEventListener("click",function(){
      document.querySelector(".sm-pages-container").classList.toggle("show-nav")
  })
})