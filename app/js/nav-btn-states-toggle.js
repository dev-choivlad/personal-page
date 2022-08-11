// Изменение состояния пункта меню по клику
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

// Изменение состояния пункта меню по скролу
const sections = document.querySelectorAll(".main-content");
const header = document.querySelector(".main-header");
const footer = document.querySelector(".main-footer");

window.addEventListener("scroll", () => {
  sections.forEach((section, i) => {
    if (section.offsetTop - header.clientHeight - footer.clientHeight <= window.pageYOffset) {
      navButtons.forEach((button) => {
        if (button.classList.contains("active")) {
          button.classList.remove("active")
        }
      });
      navButtons[i].classList.add("active")
    }
  })

  //console.log(`scrolled distance: ${window.pageYOffset}`)
})
