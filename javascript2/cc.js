//Live character Count 

let inp= document.querySelector("input");
let span= document.querySelector("span");

// value  and lenght of the input 
    //length increases and decreases 
inp.addEventListener("input", function(dets){
    let left= 20 - inp.value.length;
    if (left<0){
        span.textContent= left;
        span.style.color= "red";
    }
    else{
       span.textContent= left;
       span.style.color= "black";
    }
     
});