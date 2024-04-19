function initCarousel() {
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let btnRight = document.querySelector('.carousel__arrow_right');

  let slider = document.querySelector('.carousel__inner');
  let slides = document.querySelectorAll('.carousel__slide');

  let totalSlides = slides.length;
  let currentSlide = 0;
  let slideWidth = slides[0].offsetWidth;

  function updateButtons() {
    if (currentSlide === 0) {
      btnLeft.style.display = 'none';
    } else {
      btnLeft.style.display = '';
    }

    if (currentSlide === totalSlides - 1) {
      btnRight.style.display = 'none';
    } else {
      btnRight.style.display = '';
    }
  };

  function slideTo(index) {
    currentSlide = index;
    let offset = -currentSlide * slideWidth;
    slider.style.transform = 'translateX(' + offset + 'px)';
    updateButtons();
  };

  btnLeft.addEventListener('click', function () {
    if (currentSlide > 0) {
      slideTo(currentSlide - 1);
    }
  });

  btnRight.addEventListener('click', function () {
    if (currentSlide < totalSlides - 1) {
      slideTo(currentSlide + 1);
    }
  });

  updateButtons();
};
