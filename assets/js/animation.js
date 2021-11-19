const boxes = document.getElementsByClassName("box");

const tl = gsap.timeline({
  pause: true,
});

const homeAnimated = tl
  .fromTo(
    "#intro-title",
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 2 }
  )
  .fromTo(
    ".landing-image",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 2 }
  )
  .fromTo(
    "#bar-to-spotify",
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0, duration: 2 }
  );

window.addEventListener("load", () => {
  homeAnimated.play();
});

let secondTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#listen",
    start: "-30%",
    end: "30%",
    scrub: "true",
  },
});

secondTl.fromTo(
  ".section-title",
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1, duration: 2 }
);

for (i = 0; i < boxes.length; i++) {
  secondTl.fromTo(
    boxes[i],
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 3 },
    "-=1"
  );
}

let thirdTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#watch",
    start: "-50%",
    end: "0%",
    scrub: "true",
    pin: true,
  },
});

thirdTl.fromTo(
  "#videoloop",
  { scale: 2, height: 0 },
  { scale: 1, height: "100%" }
);

let fourthTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#buy",
    start: "-130%",
    end: "-100%",
    scrub: "true",
    pin: true,
  },
});

fourthTl.fromTo(
  "#watch-button-area",
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1 }
);

let fiftTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".rotating",
    start: "10%",
    end: "50%",
    scrub: "true",
  },
});

fiftTl.fromTo(
  "#buy-area",
  { autoAlpha: 0, y: -200, scale: 0 },
  { autoAlpha: 1, y: 0, duration: 2, scale: 1.5 }
);

let sexthTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#buy",
    start: "70%",
    scrub: "true",
  },
});

sexthTl
  .fromTo(
    ".section-title",
    { autoAlpha: 0, y: -200, scale: 0 },
    { autoAlpha: 1, y: 0, duration: 2, scale: 1.5 }
  )
  .fromTo(
    "#contact-section",
    { autoAlpha: 0, x: -200, scale: 0 },
    { autoAlpha: 1, x: 0, duration: 2, scale: 1 }
  );
