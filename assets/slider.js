const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let index = 0;

function updateSlide() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide(e) {
  if (e) e.stopPropagation();
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide(e) {
  if (e) e.stopPropagation();
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}

/* Auto slide */
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlide();
}, 4000);

