//Lets use the GSAP 
gsap.to("#box1",{// agr div ke andr ka element target karna ho to "#div h1"
    x:1000,
    duration:2, //in sec
    delay: 1,
    rotate: 360,
    backgroundColor: "blue", // this is camelcase
    borderRadius: "50%",
    scale: 0.5,

}) 
gsap.from("#box2",{// agr div ke andr ka element target karna ho to "#div h1"
    x:1000,
    duration:2, //in sec
    delay: 1,
    rotate: 360,
    backgroundColor: "blue", // this is camelcase
    borderRadius: "50%",
    scale: 0.5,

}) 


