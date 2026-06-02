let tl = gsap.timeline();

tl.from("#logo", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "bounce.out"
});

tl.from(".nav-links li", {
    y: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5
});

gsap.to("#logo", {
    color: "#00bcd4",
    duration: 1.5,
    repeat: -1,
    yoyo: true
});

//animate the Prithviraj industries name 
gsap.from("h1", {
    y:20, 
    opacity:0, 
    duration: 1,
    scale: 0.3,
});