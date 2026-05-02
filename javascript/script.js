// Var, let, const -- creation of variables 
// Keyword ka kuch matlab hota hain
 var a= 23;
 let a= 22;
 const pi = 3.14;  
// when variable created by var then vo windows me add hota hain
//use let because --> it solve reinitialisation error 

//scope (global / block / functional)
//var is the functional scoped -- we can call the variable everywhere inside the function
function abx(){
    if (true){
        var a= 12;
    }
}

//let is the Blocked scoped 
{
    let a =12;
}

//Reassignment , redeclaration

var a= 12;
a= 32;

// Redeclaration --> let me nahi hota
let b=12;
b=433;

//Temporal Dead zone
console.log(a);
let a =12;

//Hoisting Impact per type--> variable in js divided into two parts 
// - declaration and initialisation

let a = undefined;

console.log(a);

a=12; 

//scope
var x= 1; //global
{
    var a=2; //global
}
console.log(x);

//we can update the value of property in const value but cannot reassign the const value 



// DATA TYPES AND TYPES SYSTEMS

//data types 

//primitive --> copy of real value
let a = 15;
let b= a;
a= a+2; // b me change nahi hoga 

// referance --> not copy , only got the referance

let a= [1, 2, 3];
let b= a;
b.pop(); //affect in b result the  affect in a

// '' -- single quotes
// "" -- double quotes
// `` -- backticks

// null value dini padti hain 
// undefined is the default value 


//symbol --> unique immutable value
let u1= Symbol("u1");
let u2= Symbol("u2")

u1==u2; // false

// maximum value of int 
Number.MAX_VALUE
1.7976931348623157e+308

//maximum safe value
Number.MAX_SAFE_INTEGER
9007199254740991

//agar block dikhe to referance hain  --> copy nahi hoga sirf  referance 

//Dynamic typing --> data ko change karte ho 
let a=13;
a= true;
a="holiya"
a=[];
a= null;

//typeof --> give the type of anything 

//Type coercion (== vs ==)
// one type automatically converted 

"5"+1 ; // 51  //converted in string -- concatination
"5"-1 ; // 4  //converted to integer

//Truthly vs falsy values 
// to find false and true --> !!(anything )

//typeof NaN == 'number' //true --> because NaN is the true because fake number operation

//OPERATORS

//Arithmetic, Comparison , logical , assignment, unary, ternary 

/*
1+2=3
"ha"+"rsh" = harsh

12%2 --> 12/2 and return the remainder

= --> assignment operator
== --> comparison (it check for the value not the type)
=== --> comparison with the data type 
!= --> not equal to // not strick 
!== --> not equal to // strick 
>= , <= , > , < --> comparson 

=, +=, -=, *=, /=, %=
a+=3 --> a= a+3;

//logical operator 
  && -- both true // AND
  || -- only one true // OR
  ! -- NOT // inverter 

//unary operator
 + - -- ++ !

 ++a preincrement , a++ postincrement

//ternary operator 
// ?:
12>13 ? console.log("true") : console.log("false");

insatanceof --> means kya wo juda hua hain 
let a=13;
a instaceof number
// instance of always use with the premitive value


*/

// if else else if
// switch case
switch (value){
    case 1 :
        break;
    case 2:
        break;
    default:

}
    
// early return pattern  
function getval(val){
    if (val <25) return "D";
    else if (val<50) return "C";
    else if (val <75) return "B";
    else return "A";
}

getval(76);


//LOOPS -- repeated things haha

// repeatition 
// repeation and increment 

//for loop
for(start ; end; change){
}

for(let i=0; i<100; i++){
    console.log(i);
}

//while loop 
let i=0;ṇ
while(i!=10){
    i++;
}
console.log("Ye to 10 hain");

//do-while loop

let i=0;
do{
    console.log(i);
    i++;
}
while(i<2);

//BREAK AND CONTINUE
// break --> stop the current loop iteration 