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

  tabs.forEach(tab=>{
    tab.style.display = "none"
  })
  tabs[i].style.display = "block"

  tabButton.forEach(btn=>{
    btn.style.color = "rgb(45, 44, 44)"
  })
  tabButton[i].style.color = "brown"


}
toggleTabs(0)


let counter = 0
const sliderImage = document.querySelectorAll(".slide-image")
function sliderFn(i){
  sliderImage.forEach(image=>{
    image.style.left = "-200%";
   document.documentElement.style.overflowX = "hidden"
  })

  sliderImage[i].style.left = `0%`
  sliderImage[i].style.transition = "all 2s linear"
}

function IncreaseSlider() {
  let newCount = counter >= sliderImage.length ? counter = 0 : counter++
  sliderFn(newCount)
  console.log(newCount);

}

function DecreaseSlider() {
  let newCount = counter <=0 ? counter = sliderImage.length - 1 : counter--
  sliderFn(newCount)
  console.log(newCount);
}

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