//mouse move karne pe changes aaye 

abc= document.querySelector("#abc");

abc.addEventListener("mouseover", function(){
    abc.style.backgroundColor= "Yellow";
});

abc.addEventListener("mouseout", function(){   
    abc.style.backgroundColor="red";
})


//mousemove 

abc= document.querySelector("#abc");

window.addEventListener("mousemove", function(dets){
    // console.log(dets.clientX, dets.clientY);  //X axis and Y axis values 
    //upper niche , right left 
    //to move this positon in html absolute hona chahiye 
    abc.style.top= dets.clientY+ "px";
    abc.style.left= dets.clientX+ "px";

//make the tip of the mouse at the center of the rectagle

});

//move with the keys -- keysup and down 
const abc = document.querySelector("#abc");

let x = 0;
let y = 0;

document.addEventListener("keydown", function(event){

    if(event.key === "ArrowRight"){
        x += 10;
    }

    if(event.key === "ArrowLeft"){
        x -= 10;
    }

    if(event.key === "ArrowDown"){
        y += 10;
    }

    if(event.key === "ArrowUp"){
        y -= 10;
    }

    abc.style.left = x + "px";
    abc.style.top = y + "px";
});