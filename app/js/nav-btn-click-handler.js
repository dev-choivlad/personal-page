const navButtons = document.querySelectorAll(".nav-menu__link");
navButtons[0].classList.add("active");

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].classList.remove("active")
    }

    e.currentTarget.classList.add("active")
  })
})

