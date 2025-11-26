// import { gsap } from "gsap";
// import { MorphSVGPlugin } from "gsap";

// gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, polygon");

var nameMorph = gsap.timeline({
  repeat: 100,
  delay: 1,
  repeatDelay: 1,
  yoyo: true,
  defaults: { duration: 1, ease: "power2.inOut" }
});

nameMorph
  .to("#aj1", {
    duration: 2,
    morphSVG: {
      shape: "#aj2",
      type: "linear",
      origin: "0% 0%"
    },
    ease: "power4.inOut"
  })
  .to("#aj1", {
    duration: 2,
    morphSVG: {
      shape: "#aj1",
      type: "linear",
      origin: "0% 0%"
    },
    ease: "power4.inOut"
  })
  .to("#aj1", {
    duration: 2,
    morphSVG: {
      shape: "#aj3",
      type: "linear",
      origin: "0% 0%"
    },
    ease: "power4.inOut"
  })
  .to("#aj1", {
    duration: 2,
    morphSVG: {
      shape: "#aj1",
      type: "linear",
      origin: "0% 0%"
    },
    ease: "power4.inOut"
  })
  .to("#aj1", {
    duration: 2,
    morphSVG: {
      shape: "#aj4",
      type: "linear",
      origin: "0% 0%"
    },
    ease: "power4.inOut"
  })
  .to("#aj1", {
    duration: 2,
    morphSVG: {
      shape: "#aj1",
      type: "linear",
      origin: "0% 0%"
    },
    ease: "power4.inOut"
  });