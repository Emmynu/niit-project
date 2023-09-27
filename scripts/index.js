window.addEventListener("scroll",function(){
  const scrollIndex = this.pageYOffset
  scrollIndex >= 50 ? 
   this.document.querySelector(".navBar").classList.add("fixed-nav")
    :
  this.document.querySelector(".navBar").classList.remove("fixed-nav")
})

document.querySelector(".bar-container").addEventListener("click",function(){
    console.log("open close");
})