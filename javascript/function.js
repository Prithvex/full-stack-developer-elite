function fun(){
    console.log("Hello guys!!! ");
};
fun();

//function in veriables called as function expression

let a= function (){
     console.log("Hello guys!!! ");
};
a();

//fat arrow function 
let fnc=() => {
    console.log("hihihih")
};
func();

// function with parameter 
function dance(a="Spidey"){ //parameters -- default parameter
    console.log(a ,"Nach raha hain");

};
dance("Hulk"); //aguments
dance();

// when we have lots of parameter we need same no of argument 
// to protect from this we use REST keyword


function fun ( ...val){
     console.log(val);
};
fun(1, 2, 3, 4, 5, 6, 7);

//Return and early returns
//  jaha se aaye ho vahi dal dungi 

function f(v){
    return 12+ v;
}

let val=f(25);
console.log(val);

//First class functions --> functions ko values ki tarah treet kar sakte ho 

function abc(val){
    val();
}

abc(function(){
    console.log("hey");
})

//higher order function 
// return kare ek function ya fir accept kare ek function apne parameter me 

function abc(val){
    return function(){
        console.log("heheiii")
    }
}

abc()(); // one for outesider one for insider

//Pure vs Impure Functions
// function jo ki bahar ki value ko na badle -- pure function

// function jo ki bahar ki value ko badal de -- Impure function
// like the change in value due to increment and decrement operator


// Closures --> ek function jo return kare ek aur function aur 
// return hone wala function hamesha use karega parent function ko koi variable 

function fun(){
    let f= 16;
    return fun();
    {
        console.log(f);
    }
}

//using the foreach loop   
function getscore(...scores){
    let total=0;
    scores.forEach(function(val){
        total+=val;

    })
        return total;
    }
console.log(getscore(10, 12, 14, 18));

//Assign a function to a varible 
let a =function(){

}
a();

//pass the function into another function 

function abcd(val){
    val();
}
abcd(function(){
    console.log("hey");
})

// Hoisting ifferentiation --> variable ko likhne se pehle chala pa rahe ho
// pehle fuction call karo baad me banao 

//but agar variable leke kiya to nahi chalega 
abc();

function abc(){
    console.log("this print abc");
}

//connvert the normal function into IIFE
  //--> wrap the function with bracket and call it 

(function init(){
     console.log("Initialisation");

}) ();


   