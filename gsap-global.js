// window.addEventListener("load", function () {
//   // select all elements with the "data-loadin" attribute set to "true"
//   const elements = document.querySelectorAll('[data-loadin="true"]');

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           gsap.to(entry.target, { opacity: 1, y: 0, duration: 1 });
//           gsap.to(entry.target, { scale: 1, duration: 0.5 });
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       threshold: 0.15,
//     }
//   );

window.addEventListener("load", () => {
  const elements = document.querySelectorAll('[data-loadin="true"]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, y: 0, scale: 1, duration: 0.7 });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  gsap.set(elements, { opacity: 0, y: 50, scale: 0.95 });
  elements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  let lastScrollTop = 0;
  const nav = document.querySelector(".navouterwrap");
  const updateNavPosition = (direction) => {
    const y = direction === "down" ? "-100%" : "0%";
    gsap.to(nav, { duration: 0.3, y, ease: "power1.out" });
  };

  window.addEventListener("scroll", () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewportWidth <= 991) return;

    let scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, 0);
    const direction = scrollTop > lastScrollTop ? "down" : "up";
    if (!gsap.isTweening(nav)) updateNavPosition(direction);
    lastScrollTop = scrollTop;
  });
});

//   gsap.set(elements, { opacity: 0, y: 50, scale: 0.95 });

//   elements.forEach((element) => {
//     observer.observe(element);
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   let lastScrollTop = 0;
//   let nav = document.querySelector(".navouterwrap");

//   window.addEventListener("scroll", function () {
//     // Get the width of the viewport
//     let viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

//     // If the viewport is wider than 991px (i.e., a desktop view)
//     if (viewportWidth > 991) {
//       let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//       // Clamp the scroll position.
//       if (scrollTop < 0) {
//         scrollTop = 0;
//       }

//       // Check if the navigation animation is active.
//       const isAnimating = gsap.isTweening(nav);

//       if (scrollTop > lastScrollTop && !isAnimating) {
//         // Downscroll, slide up
//         gsap.to(nav, { duration: 0.3, y: "-100%", ease: "power1.out" });
//       } else if (scrollTop < lastScrollTop && !isAnimating) {
//         // Upscroll, slide down
//         gsap.to(nav, { duration: 0.3, y: "0%", ease: "power1.out" });
//       }

//       lastScrollTop = scrollTop;
//     }
//   });
// });
