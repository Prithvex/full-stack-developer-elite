gsap.registerPlugin(ScrollTrigger);

// Page 1 - Slide from left
gsap.from(".box1", {
  x: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page1", //animation ka starting point 
    start: "top center",
    end: "bottom center",
    // scroller:"body",
    scrub: true, //scrolling ke basis pr animation karne ke liye(1 to 5 for smooth 5 means max smooth)
    markers: true, // page pe markers lag jayenge
  }
});

// Page 2 - Rotate + Scale
gsap.from(".box2", {
  scale: 0,
  rotation: 360,
  scrollTrigger: {
    trigger: ".page2",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});

// Page 3 - Move up + Spin
gsap.from(".box3", {
  y: 250,
  rotation: -360,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page3",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});