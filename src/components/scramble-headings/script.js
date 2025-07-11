const tl = gsap.timeline({
  id: "text-scramble",
  defaults: { ease: "none" }
});

const cursorTl = gsap.timeline({ repeat: -1 });

gsap.set("#scramble-text-original", {
  opacity: 0
});

cursorTl
  .to("#scramble-cursor", {
    opacity: 0,
    duration: 0.5,
    ease: "none",
    delay: 0.2
  })
  .to("#scramble-cursor", {
    opacity: 1,
    duration: 0.5,
    ease: "none",
    delay: 0.2
  });

tl.to("#scramble-text-1", {
  scrambleText: {
    text: "Anna Jennings",
    chars: "upperAndLowerCase"
  },
  duration: 2
})
  .to("#scramble-text-2", {
    scrambleText: {
      text: "Web Designer & Developer",
      chars: "upperAndLowerCase",
      speed: 0.4
    },
    duration: 2
  })

  .to("#scramble-text-3", {
    scrambleText: {
      text: " Theatre Director & Dramaturg",
      chars: "upperAndLowerCase"
    },
    duration: 2
  })
  .add(cursorTl);

window.onclick = () => tl.play(0); // click to replay
