let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#landing",
    start: "top",
    end: "100%",
    scrub: "true",
    markers: true,
    pin: true,
  },
});

tl.fromTo(
  "#landing",
  { clipPath: "circle(8%)" },
  { clipPath: "circle(75%)", duration: 2 }
);

tl.fromTo(".guitar-svg", { scale: 0.7 }, { scale: 0, opacity: 0 }, "-=1.5");

tl.fromTo(
  ".pin-spacer",
  { backgroundColor: "#001f3f" },
  { backgroundColor: "#aea397" }
);

tl.fromTo("#intro-title", { opacity: 0 }, { opacity: 1, duration: 2 });

tl.fromTo(
  ".landing-image",
  { opacity: 0, x: 100 },
  { opacity: 1, x: 0, duration: 2 }
);

tl.fromTo(
  "#bar-to-spotify",
  { opacity: 0, x: -100 },
  { opacity: 1, x: 0, duration: 2 }
);
