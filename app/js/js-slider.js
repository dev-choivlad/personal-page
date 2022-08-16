let slideIndex = 1;

showSlides(slideIndex, getSliderOneItems());

function currentSlide(n, currentObj) {
  showSlides(slideIndex = n, currentObj);
}

function prevSlide(currentObj) {
  showSlides(slideIndex -= 1, currentObj);
}

function nextSlide(currentObj) {
  showSlides(slideIndex += 1, currentObj);
}

function showSlides(n, obj) {
  if (n > obj.slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = obj.slides.length;
  }

  for (let i = 0; i < obj.slides.length; i++) {
    obj.slides[i].style.display = 'none';
  }

  // способ 1 выделения активного триггера
/*  for (let i = 0; i < obj.triggers.length; i++) {
    obj.triggers[i].addEventListener('click', () => {
      obj.triggers.forEach(trigger => {
        trigger.classList.remove('active');
      })
      obj.triggers[i].classList.add('active');
    })
  }*/

  // способ 2 выделения активного триггера
/*  for (let i = 0; i < obj.triggers.length; i++) {
    obj.triggers[i].className = obj.triggers[i].className.replace(' active', '');
  }*/

  obj.slides[slideIndex - 1].style.display = 'flex';
  // способ 2 выделения активного триггера
  /*obj.triggers[slideIndex - 1].className += ' active';*/
}

function getSliderOneItems() {
  const slides = document.querySelectorAll('.js-slider--1 .js-slider__item');
  //const triggers = document.querySelectorAll('.js-slider__triggers--1 .js-slider__trigger');

  return {
    slides: slides,
    //triggers: triggers,
  }
}
