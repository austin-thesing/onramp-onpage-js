// Animation for the first element with a 1-second delay
gsap.from("#element1", {
  x: -50, // initial position on the x-axis (offscreen left)
  opacity: 0, // initial opacity
  duration: 1, // duration of the animation
  ease: "power2.out", // easing function
  delay: 0.35, // delay before the animation starts
}); // Fixed missing closing parenthesis

const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  initialSlide: 0,
  slidesPerGroup: 1,
  spaceBetween: 24,
  centeredSlides: false,
  mousewheel: {
    forceToAxis: true,
  },
  speed: 300,

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
}); // Fixed missing closing parenthesis for Swiper initialization

// Consolidating PureCounter initializations into a single function call with different selectors
function initializePureCounter(selector, end, separator = false) {
  new PureCounter({
    selector: selector,
    start: 0,
    end: end,
    duration: 1,
    delay: 10,
    once: true,
    repeat: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: separator,
  });
}

// Initialize PureCounter for ".multiply" and ".growth" with respective end values and separator settings
initializePureCounter(".multiply", 73);
initializePureCounter(".growth", 75, true);
