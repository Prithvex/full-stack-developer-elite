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
gsap.from("#box2",{
    x:1000,
    duration:2,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue", 
    scale: 0.5,

}) 

//Lets use the stagger 
//y axis se movement samjo
gsap.from("h1",{
    color: "red",
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:1,  //(-1 use kiya to ulta chalega ) ek naam ke bahut sare log hoto unhe ek ek karke chalao

}) 

//repeat property to repeat the process 

gsap.from("#box3",{
    delay: 2,
    rotate: 360,
    repeat: 2,  //(-1 means infinite repeat) and here it repeat 2 times 
    yoyo : true, // vapas bhi aayega
}) 

//Animate 3 boxes b1, b2, b3(without using timeline )
// gsap.to("#b1",{
//     x:1000,
//     duration:2,
//     delay: 1,
//     rotate: 360,
    
// })
// gsap.to("#b2",{
//     x:1000,
//     duration:2,
//     delay: 3,
//     //pehla rukne ke bad chalao
//     //pehle ka delay and duration calculate karo aur fir use next ke delay banao
//     scale: 0.5,

// })
// gsap.to("#b3",{
//     x:1000,
//     duration:2,
//     delay: 5,
//     borderRadius: "50%",
    
// })

//Animate 3 boxes b1, b2, b3(with using timeline )
// when more than one thing wants to move from one place to another without conflicting the timeline 
//sab log alag alag jaye usse acca ek hi bogi me bhej do 

//ab delay dena jaruri nahi hain timeline ke andr chije sync me chalti hain
var t1 = gsap.timeline()

t1.to("#b1",{
    x:1000,
    duration:2,
    delay: 1,
    rotate: 360,
    
})
t1.to("#b2",{
    x:1000,
    duration:2,
    delay: 1,
    rotate: 360,
    
})
t1.to("#b3",{
    x:1000,
    duration:2,
    delay: 1,
    rotate: 360,
    
})