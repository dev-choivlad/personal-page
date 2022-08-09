const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".swiper-pagination");
let bullets;
setTimeout(() => {
  bullets = document.querySelectorAll(".swiper-pagination-bullet");
  console.log(bullets);

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener("click", () => {
      burgerBtn.classList.toggle("burger-btn--active");
      mobileMenu.classList.toggle("mobile-menu--active")
    })
  }
}, 1000)

const body = document.body;

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-btn--active");
  body.classList.toggle("lock");
  mobileMenu.classList.toggle("mobile-menu--active");
})
