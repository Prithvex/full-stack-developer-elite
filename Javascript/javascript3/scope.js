// Scope Execution Context and closures 

//scope --> created variable and functions ko kaha tak use kar sakte ho 

//functional --> only in function 
//global --> anywhere in function 
//block --> {} clurly braces me hi use ho sakta hain 

function myfuu(){
    var n= 13;
}
console.log(n);// functional scope 

//global
var a= 13; //can use anywhere 

//block scope 
{
    var b =14; // use under the block 
}


// Execution Context 

// js sabse pahle jaise hi aapka function dekhta hai sabse pahle 
// js banaata hai execution context, ye ek process hai jo ki do different phases mein chalta hai
//  memory phase and doosre ka naam hai execution phase
// make a dubba, aur dubbe me memory and execution hota hain --> menory for variable and other execution and work hota hain 


//js --> Laxical vs  Dynamic Scoping 

//Laxical--> physically availabke  
function app(){
    let a =0;
    function fun(){
        let b=6;
        console.log(a);
    }
}

// Dynamic Scoping --> kaha se call kar rahe ho uss pe value depend karti hain
 
let a = 12
function abcd() {
console.log(a);
}
function defg() {       // agar dynamic scope hoti to a=13 print hota 
let a = 13              //but  js is lexical scope
abcd();
}       
defg(); 


// closures hote hai functions jo ki kisi parent fnc
//  ke andar ho aur andar waala function return ho raha ho, and retyurning fnc youse kare, parent function ka koi variable

function abcd() {
let a = 12 ;
return function () {
console.log(a);
};
}

//how variables are preserved 
// ye sach hai fnc ke khatam hone pe aapka fnc and uske variables khtm hojaate hai, par jab bhi closure banta hai to aapka 
// fnc aur uske variables ka ek backlink bnaya jaata hai aur uska naam hota haio [[environment]]

function abcc(){
    let a=7;
    return function(){
        console.log(a);
    };
}
let fnc=  abcc();
fnc(); 

//Use case-->
//  Private Counter
function countforme(){
    let c= 0;
    return function(){
        c++;
        console.log(c);
    };
}

let fun= countforme();
fun();
fun();
fun(); //done ke pass apna apna C hain 

let fun2= countforme();
fun2();
fun2();
fun2();
fun2();
fun2();
fun2();


//Ecapsulation --> only give the requred thing access
function clickme(){
    let click= 0;
    return function(){
        if (click<7){
            click++;
            console.log(`clicked: ${click} times`)
        }
        else{
            console.log("LIMIT EXCEEDED");
        }
        
    };
}

let fu= clickme();
fu();
fu();
fu();
fu();
fu();
fu();