// DOM --> Document Object Model 
// everything in the webpage is the part of the DOM
// DOM  Manipulation 

// 2nd -- Events and event listeners 
// Action ke badle me kuch ho , that is event 

//Windowkey Project 
//fileUpload Project 

//form Submit 
//mouseover and mousemin 

/// Event objects ---> target, type, prevent default 4

let eve= document.querySelector("#eve");

eve.addEventListener("click", function(dets){
    console.log(dets); //this  is the event
});

//prevent default 
let form= document.querySelector("#form");

eve.addEventListener("submit ", function(dets){
    dets.preventDefault(); // reload nahi hoga
});

//event bob --> event bubbling and capturinng 