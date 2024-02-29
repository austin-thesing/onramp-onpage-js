// Animation for the first element with a 1-second delay
gsap.from("#element1", {
  x: -50, // initial position on the x-axis (offscreen left)
  opacity: 0, // initial opacity
  duration: 1, // duration of the animation
  ease: "power2.out", // easing function
  delay: 0.35, // delay of 1 second
});

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
});
new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".multiply", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [unit]
  end: 73, // End number [unit]
  duration: 1, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
  once: true, // Counting at once or recount when the element in view [boolean]
  repeat: false, // Repeat count for certain time [boolean:false|seconds]
  decimals: 0, // How many decimal places to show. [unit]
  legacy: true, // If this is true it will use the scroll event listener on browsers
  filesizing: false, // This will enable/disable File Size format [boolean]
  currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
  separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".growth", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [unit]
  end: 75, // End number [unit]
  duration: 1, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
  once: true, // Counting at once or recount when the element in view [boolean]
  repeat: false, // Repeat count for certain time [boolean:false|seconds]
  decimals: 0, // How many decimal places to show. [unit]
  legacy: true, // If this is true it will use the scroll event listener on browsers
  filesizing: false, // This will enable/disable File Size format [boolean]
  currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
  separator: true, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});
