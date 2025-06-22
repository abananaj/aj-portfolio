import gsap from "gsap";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, polygon");

var nameMorph = gsap.timeline({
  repeat: 100,
  delay: 3,
  repeatDelay: 3,
  yoyo: true,
  defaults: { duration: 1.5, ease: "power2.inOut" }
});

nameMorph
  .to(".aj1", {
    duration: 2,
    morphSVG: {
      shape: ".aj2",
      type: "linear",
      origin: "50% 50%"
    },
    ease: "power1.inOut"
  })
  .to(".aj1", {
    duration: 2,
    morphSVG: {
      shape: ".aj3",
      type: "rotational",
      origin: "20% 60%"
    },
    ease: "power1.inOut"
  })
  .to(".aj1", { morphSVG: ".aj3" }, 3)
  .to(".aj1", { morphSVG: ".aj4" }, 3);

export default nameMorph;