gsap.to(".img-container", {
  width: "100%",
  ease: Expo.easeInOut,
  stagger: 2,
});

gsap.to(".text h1", {
  top: 0,
  ease: Expo.easeInOut,
  stagger: 2,
});
gsap.to(".text h1", {
  delay: 2,
  top: "-100%",
  ease: Expo.easeInOut,
  stagger: 2,
});
