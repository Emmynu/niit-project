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




function toggleTabs(i){
  const tabs = document.querySelectorAll(".tabs-content")
  const tabButton = document.querySelectorAll(".tab-btn")
  const images = document.querySelectorAll(".about-image")
  tabs.forEach(tab=>{
    tab.style.display = "none"
  })
  tabs[i].style.display = "block"

  tabButton.forEach(btn=>{
    btn.style.color = "rgb(45, 44, 44)"
  })
  tabButton[i].style.color = "brown"

  images.forEach(image=>{
    image.style.display="none"
  })
  images[i].style.display ="block"
}
toggleTabs(0)




const slideImage = document.querySelectorAll(".slide-image")

function sliderFn(i){
  slideImage.forEach(image=>{
    image.style.left = "-200%";
   document.documentElement.style.overflowX = "hidden"
  })

  slideImage[i].style.left = `0%`
  slideImage[i].style.transition = "all 2s linear"
}


let counter = 0
function IncreaseSlider() {
  counter++
  if (counter > slideImage.length - 1) {
    counter = 0
  }
  sliderFn(counter)

}


const videoContainer =  document.querySelector(".video-container")
const closeBtn =  document.querySelector(".close-video")
function playVideo() {
  slideImage.forEach(i=>{
    const imageIndex = parseInt(i.dataset.index)
    if (imageIndex===counter) {
      videoContainer.classList.add("show-answers")
     closeBtn.classList.add("show-answers")
      videoContainer.innerHTML = `<video controls width="100%" height="100%">
      <source src=${i.dataset.src}></source></video>`
      // videoContainer.requestFullscreen()
    }
  })
}

closeBtn.addEventListener("click",()=>{
  videoContainer.classList.remove("show-answers")
  closeBtn.classList.remove("show-answers")
})


const questions = document.querySelectorAll(".about-faqs ")
questions.forEach(question=>{
  question.querySelector(".faqs").addEventListener("click",function(){
    document.querySelectorAll(".answer").forEach(ans=>{
      if (ans !== question.querySelector(".answer")) {
        ans.classList.remove("show-answers")
      }
      else{
        question.querySelector(".answer").classList.toggle("show-answers")
      }
    })
  })
})

window.addEventListener("DOMContentLoaded",()=>{
  document.querySelector(".date").innerHTML  = new Date().getFullYear()
})

