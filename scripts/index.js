// JQUERY
$(document).ready(function(){
  $(".hamburger-container").click(function(){
    $(".small-screen-pages-container").toggle(1000)
  })
   $(".search").click(function(){
    $(".text").show(1000)
    $(".info-section-2").css({"border": "1px solid #252525"})
  })
 })

 const media = [ 
  {
    type :"image",
    url:"https://www.greenspringsschool.com/wp-content/uploads/2018/03/library2-320x320.jpg"
  },
  {
    type :"image",
    url:"https://www.greenspringsschool.com/wp-content/uploads/2018/03/creche2-320x320.jpg"
  },
  {
    type :"video",
    url:"https://www.greenspringsschool.com/wp-content/uploads/2018/03/1-1-320x320.png"
  },

{
  type :"video",
  url:"https://www.greenspringsschool.com/wp-content/uploads/2018/03/4-320x320.png"
},

]

 document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click", function(){
    const newMeduia = btn.dataset.type === undefined ? media : media.filter(item=>item.type ===btn.dataset.type )
    displayMedia(newMeduia)
  })
 })


 function displayMedia (mediaArray) {
  let media = ""
  mediaArray.map(item =>{
   media +=  `<div> 
      <img src=${item.url} />
    </div>`
  })
  document.querySelector(".media").innerHTML = media
 }

 displayMedia(media)


 const reviews = [
  {
    text:"Fantastic school content! Super happy with teachers!",
    author: "Kendra Njoku",
    url: "https://www.course-api.com/images/people/person-4.jpeg"
  },
  {
    text:"‘The school remains number one in providing quality education. I am very proud as a parent because I can see my child making steady progress in all areas’",
    author:"Mrs. Oketona",
    url:"https://www.course-api.com/images/people/person-2.jpeg"
  }, 

  {
    text:"The idea of the house point is fantastic.",
    author:"Oluwagbemiga Adaramaja",
    url:" https://www.course-api.com/images/people/person-3.jpeg"
  },

  {
    text:"Fantastic school content! Super happy with teachers!",
    author:"Kendra Njoku",
    url:"https://www.course-api.com/images/people/person-1.jpeg"
  },
  
  {
    text:"‘The teachers are attentive to the students and have their best interest at heart’ ",
    author:"Bolanle Adeoti"
  },
 ]

 function displayReviews () {
  let media = ""
  reviews.map(item =>{
   media +=  `<div class="review"> 
   <img src=${item.url} width="150" height="150" style="object-fit: cover; border-radius:50%; border:2px solid green"; box-shadow: 3px 8px 14px rgba(218, 218, 218, 0.5);/>

      <h3>${item.text}</h3>
      <p>${item.author}</p>
      <img src="/images/quote (2).png" width="40"/>
    </div>`
  })
  document.querySelector(".reviews").innerHTML = media
 }

 displayReviews()

let reviewIndex = 1
let reviewsArray = document.querySelectorAll(".review")

document.querySelector(".reviews").style.transform = `translateX(-100%)`


function nextReview() {
  reviewsArray[reviewIndex].classList.remove("active")
  reviewIndex = (reviewIndex + 1) % reviewsArray.length
  reviewIndex =  reviewIndex === 0 ? 1 : reviewIndex
  reviewsArray[reviewIndex].classList.add("active")
  document.querySelector(".reviews").style.transform = `translateX(-${reviewIndex * 100}%)`
}

reviewsArray[reviewIndex].classList.add("active")

setInterval(nextReview, 5000)


const imgs = ["	https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]


//  window.addEventListener("scroll", function(){
//   const scrollHeight = this.pageYOffset
//   scrollHeight >=112 ? document.querySelector(".nav-section").classList.add("fixed-nav") : document.querySelector(".nav-section").classList.remove("fixed-nav")
//  })





