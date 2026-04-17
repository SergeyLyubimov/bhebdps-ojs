let slides = [...document.getElementsByClassName('slider__item')],
  dots = [...document.getElementsByClassName('slider__dot')];

function scrollSlide(n) {
  let prevSlide = document.querySelector('.slider__item_active');
  let i = slides.indexOf(prevSlide);

  prevSlide.classList.remove('slider__item_active');
  i = i + n;

  if (i == -1) {
    i = slides.length - 1;
  } else if (i == slides.length) {
    i = 0;
  }

  slides[i].classList.add('slider__item_active');

  activateDot(i);
};

function setSlide(i) {
  let prevSlide = document.querySelector('.slider__item_active');
  prevSlide.classList.remove('slider__item_active');

  slides[i].classList.add('slider__item_active');

  activateDot(i);
}

function activateDot(i) {
  let prevDot = document.querySelector('.slider__dot_active');
  prevDot.classList.remove('slider__dot_active');

  dots[i].classList.add('slider__dot_active');
}

document.querySelector('.slider__arrow_prev').addEventListener('click', function () {
  scrollSlide(-1);
});
document.querySelector('.slider__arrow_next').addEventListener('click', function () {
  scrollSlide(1);
});

dots.forEach(dot => {
  let n = dots.indexOf(dot);

  if (slides.indexOf(document.querySelector('.slider__item_active')) == n) {
    dot.classList.add('slider__dot_active');
  }

  dot.addEventListener('click', function () {
    setSlide(n);
  })
});
