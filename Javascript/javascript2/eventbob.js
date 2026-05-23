///Event Bubblling --> Jispe event aayega agar uss pr listner nahi hua to 
// hamara event uske parent pr listner dhundega aur aisa krke uper ki taraf move karega 

//main div --> nav div --> links , button 


document.querySelector("#nav").addEventListener("click", function(){
    alert("clicked");
}); // agar uss element ke pass listner nahi hain to event bubble hoga and uske parent ko check karega 


let ul= document.querySelector("ul");
ul.addEventListener("click", function(dets){
    // dets.target.style.textDecoration= "line-through"
    dets.target.classList.toggle("lt"); //add ke badle toggle use karo
});


/// Event Capturing --> Uper se niche pattern 
//sub ka event listner chalegaa
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("Button Clicked")
}); //agr next ke pass event listenr nahi hain to ok 
// but agar hain to first pehle wala chalega then second wala 

c.addEventListener("click", function(){
    console.log("C Clicked")
});

b.addEventListener("click", function(){
    console.log("B Clicked")
});

a.addEventListener("click", function(){
    console.log("A Clicked")
}, true); // capturephase hain  


// NOTE--
// jab bhi aap click krte ho ya koi bhi event raise krte ho to
// aapka jo event flow do phases mein chalta hai:
// phase 1: event top level element se neeche ki taraf aayega
// phase 2: event raised element se parent ki taraf jaayega
// aur pahle phase 1 hoti hai

//this phase1 cycle activated if we turn on --> CAPTURE PHASE
//pehle capture phase --> then bubbling 