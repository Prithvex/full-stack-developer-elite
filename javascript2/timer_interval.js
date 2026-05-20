//Timers and the Intervals 

setTimeout(function(){
    console.log("Heyy!!")
}, 5000); // delay the code in 5000 milisec 

setInterval(function(){
    console.log("Heyy!!")
}, 5000); // bar bar chalta hain 

let tm= setTimeout(function(){
    console.log("Heyy!!")
}, 5000); 

clearInterval(tm);

//make a counter from 1 to 10 

let count =10;

let inter = setInterval(function(){
    if (count>=1){
         count--;
    console.log(count);
    }
    else{
        clearInterval(inter);
    }

}, 1000);


