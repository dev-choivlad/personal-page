const interleaveOffset = 0.75;

const mainSlider = new Swiper(".swiper-container", {
  direction: "vertical",
  speed: 800,
  mousewheelControl: true,
  watchSlidesProgress: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      const menuNames = ["Main", "Resume", "Skills", "Projects", "Contacts"];
      return '<span class="' + className + '">' + (menuNames[index]) + '</span>';
    }
  },
  on: {
    progress: function () {
      //console.log("test");
      const that = this;

      for (let i = 0; i < that.slides.length; i++) {
        let slideProgress = that.slides[i].progress;
        let innerOffset = that.height * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        TweenMax.set(that.slides[i].querySelector(".slide-inner"), {
          y: innerTranslate,
        });
      }
    },
    setTransition: function (slider, speed) {
      let that = this;
      for (let i = 0; i < that.slides.length; i++) {
        that.slides[i].style.transition = speed + "ms";
        that.slides[i].querySelector(".slide-inner").style.transition = speed + "ms";
      }
    }
  },
});


/*const interleaveOffset = 0.75;

var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  speed: 800,
  mousewheelControl: true,
  watchSlidesProgress: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
    type: 'bullets',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + ('0' + (index + 1)) + '</span>';
    }
  },
  on: {
    progress: function() {
      console.log('test')
      let swiper = this;

      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress;
        let innerOffset = swiper.height * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
          y: innerTranslate,
        });
      }
    },
    setTransition: function(slider, speed) {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
});*/
