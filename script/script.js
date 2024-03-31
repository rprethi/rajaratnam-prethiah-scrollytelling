gsap.registerPlugin(ScrollTrigger);

// Scrolling Body
let chapScroll;
const body = document.querySelector("body");

window.addEventListener("scroll", function () {
  body.classList.add("is-scrolling");
  window.clearTimeout(chapScroll);

  chapScroll = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
});

// Animation Appel à l'action (Introduction)
const play = document.querySelector(".action");

gsap.from(".action", {
  repeat: -1,
  y: "-20",
  yoyo: true,
});
