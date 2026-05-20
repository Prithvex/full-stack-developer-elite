//when we press any key the key is apper on the window in real time 

let h1= document.querySelector("h1");

window.addEventListener("keydown", function(event){
    if (event.key ===" "){
        h1.textContent="spc";
    }
    else{
        h1.textContent=event.key;
    }

});


