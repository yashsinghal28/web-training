
var swiper = new Swiper(".skills", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
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

const toggleButton = document.getElementsByClassName('toogle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})