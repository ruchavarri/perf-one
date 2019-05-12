document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.c-slider');
  const prevButton = document.querySelector('.c-slider__prev');
  const nextButton = document.querySelector('.c-slider__next');
  let xTimer = 0;

  const render = (x = 0) => {
    if (slider.scrollLeft + x < 10) {
      prevButton.setAttribute('hidden', true);
    } else {
      prevButton.removeAttribute('hidden', true);
    }

    if (parseInt(slider.scrollLeft + x) >= slider.scrollWidth - slider.offsetWidth) {
      nextButton.setAttribute('hidden', true);
    } else {
      nextButton.removeAttribute('hidden', true);
    }
    
    slider.scrollLeft += x;
  }

  render();

  prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    render(-220);
  });
  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    render(220);
  });

});