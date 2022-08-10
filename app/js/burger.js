const burgerBtn = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const navMenuButtons = document.querySelectorAll(".nav-menu__link");
const body = document.body;

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active")
  body.classList.toggle("lock")

  navMenu.classList.toggle("active")

  navMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      burgerBtn.classList.remove("active")
      body.classList.remove("lock")

      navMenu.classList.remove("active")
    })
  })

})
