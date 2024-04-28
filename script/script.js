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

/*-- ---------- CHAP 1-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chapitre1`,
    },
  })

  .fromTo(`#lune`, { y: `-200vh`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo(`#lit-cadre`, { y: `-200vh`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo(
    `#lit-couverture`,
    { y: `-200vh`, duration: 1 },
    { y: 0, duration: 2 }
  )
  .fromTo(
    `#polaris-dort-debut`,
    { y: `-200vh`, duration: 1 },
    { y: 0, duration: 2 }
  )

  .fromTo(
    "#chapitre1 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*-- ---------- CHAP 2-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chapitre2`,
    },
  })
  .fromTo(
    `.lit-chapitre-deux`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    `.polaris-lit-assis`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    `#chapitre2 .etoile`,
    { scale: 0, duration: 1 },
    { scale: 1, duration: 2 }
  )
  .fromTo(
    "#chapitre2 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*-- ---------- CHAP 3-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chapitre3`,
    },
  })
  .fromTo(
    `.lit-chapitre-trois`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    `.debout-polaris`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    "#chapitre3 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*-- ---------- CHAP 4-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chapitre4`,
    },
  })
  .fromTo(`#etoile-guide`, { y: `-200%`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo(
    `.roche-chap-quatre`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 10 }
  )
  .fromTo(
    "#chapitre4 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*-- ---------- CHAP 5-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chapitre5`,
    },
  })
  .fromTo(
    `.etoile-tombe`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 10 }
  )
  .fromTo(
    `.roche-chap-cinq`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 10 }
  )
  .fromTo(
    `.polaris-atterir`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 10 }
  )
  .fromTo(
    "#chapitre5 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*-- ---------- CHAP 6-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chapitre6`,
    },
  })
  .fromTo(
    "#chapitre6 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".polaris-peur",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    `#chapitre6 .mot-encouragant p:nth-child(1)`,
    { opacity: 0, duration: 4 },
    { opacity: 1, duration: 4 }
  )
  .fromTo(
    `#chapitre6 .mot-encouragant p:nth-child(2)`,
    { opacity: 0, duration: 4 },
    { opacity: 1, duration: 4 }
  )
  .fromTo(
    `#chapitre6 .mot-encouragant p:nth-child(3)`,
    { opacity: 0, duration: 4 },
    { opacity: 1, duration: 4 }
  );

/*-- ---------- CHAP 7-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chapitre7`,
    },
  })
  .fromTo(
    "#chapitre7 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".polaris-joie",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    `#chapitre7 .etoile-ours`,
    { scale: 0.5, duration: 1 },
    { scale: 0, duration: 2 }
  )
  .fromTo(
    `#chapitre7 .petit-oursun`,
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );
/*-- ---------- CHAP 8-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: `#chapitre8`,
    },
  })
  .fromTo(`#lit-cadre-fin`, { y: `200vh`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo(
    `#lit-couverture-fin`,
    { y: `200vh`, duration: 1 },
    { y: 0, duration: 2 }
  )
  .fromTo(
    `#polaris-dort-fin`,
    { y: `200vh`, duration: 1 },
    { y: 0, duration: 2 }
  )
  .fromTo(
    "#chapitre8 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );
