// The Fuction questions here 

//1. Write a BMI Calculator 
 
function BMI(weight, height){
    return weight/(height * height); //take height in meter
}

//to convert height to meter 
// 1 ft * 0.3048 m

console.log(Math.round(BMI(57,1.7)));
console.log(BMI(57, 1.83).toFixed(2));


// 2. Create a reusable discount calculator (HOF)
// HOF is the function which return one more function 

function discountCalculator(discount){

    return function(price){
        return price-price*(discount/100);
    };
}

let discount = discountCalculator(10); //10% off of the price
console.log(discount(200));

//Closures
function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    };
}

let c= counter();
console.log(c());

//usee IFEE to isolate variables 

(function(){
    const password= "secret password";
    console.log(password); // function ke aandr access hoga 
})();

console.log(password); // function ke bahar access nahi hoga 


