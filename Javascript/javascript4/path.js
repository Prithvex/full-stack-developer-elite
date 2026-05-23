//Javascript for Placements 

//Design patterns in javascript 

//Performance Optimisation 

//Lazy Loading Images --> image tab load karo jab screenn pe aayega 

//Code Splitting 

//Avoid unnecessary reflows and repaints

// ex-- 1 to 1000 print --> 
//first append to space then to the real memory
const ul = document.querySelector("ul");
const space= document.createDocumentFragment();
for (let i = 0; i < 100000; i++) {
const li = document.createElement("li");
li.textContent = i;
space.appendChild(li);
}
ul.appendChild(space);

//Memory leaks --> timer and event listners 
let count =0; 
setInterval(() => {
    if (count<10){
        count++;
         console.log(count);
         
    }
}, 1000);

//Advanced Topics & Architecture Thinking


//Pure vs impure functions
 
//Functional Programming basics (map/filter/reduce as pipeline)
 
//Separation of concerns (DOM vs logic)
 
//Custom utilities (e.g., own implementation of map, deep clone)
//deep clone

//Web Api
//alert , settimer , setinterval, prompt (esli liye console se work nahi karti) --> are the features of browser not js


//How JS works in browser (Event Loop, Web APIs, Call Stac