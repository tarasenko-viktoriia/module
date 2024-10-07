let currentSlide = 0;
  const slides = document.querySelectorAll('.slider-image');
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    slides[index].classList.add('active');
    currentSlide = index;
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }