/// Jispe event aayega agar uss pr listner nahi hua to 
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