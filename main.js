
var swiper = new Swiper(".skills", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    0:{
        slidesPerView: 1,
    },
    480:{
        slidesPerView: 3,
    },
}
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const toggleButton = document.getElementsByClassName('toogle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


var typed = new Typed(".auto-type",{
  strings:["Programmer","Software Developer"],
  typeSpeed :120,
  backSpeed :120,
  loop:true
})

var tl = gsap.timeline();

tl.
  from(".navigation",{
    y:20,
    opacity:0,
    duration:1
  })
  .from(".banner",{
    y:20,
    opacity:0,
  })
  .from("#anime",{
    x:60,
    opacity:0,
  })
  .from(".serviceText",{
    x:50,
    opacity:0
  })
  .from(".service",{
    x:-50,
    opacity:0
  })