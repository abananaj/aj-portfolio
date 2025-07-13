import gsap from "gsap";

const btnOpen = document.querySelector(".btnOpen");
const btnClose = document.querySelector(".btnClose");

// ---------------

const tl = gsap.timeline({ paused: true });
tl.to(".btnOpen", { x: 200, opacity: 0, ease: "power2.inOut" }, "-=0.5")
tl.to("ul", { x: 0, ease: "power2.inOut" }, "-=0.5")
tl.to(
    ".btnClose",
    { x: 300, opacity: 1, rotation: 360, ease: "power1.inOut" },
    "-=0.5"
  )
tl.staggerFrom(
    "li",
    0.2,
    { opacity: 0, x: -70, ease: "back.easeOut" },
    0.06,
    "-=0.18"
  );

// ---------------

// const openMenu = () => tl.play();
// const closeMenu = () => tl.reverse();

btnOpen.addEventListener("click", () => tl.play());
btnClose.addEventListener("click", () => tl.reverse());
