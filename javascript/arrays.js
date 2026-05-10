//Lets Start ARRAYS 

let arr= [1, 2, 3, 3, 6];
console.log(arr[0]);

let arr= new Array();

//modify arrays

arr[0]= 24;

//Arrays Methods --> dot ke baad kuch bhi laga method hain
//push- add the element in last 
//pop - remove the last element 
//unshift -- add the element in first 
//splice -- remove the middle part of the value 
//slice -- it gives the new copy not modify the array 

//sort the array 
let arr= [4, 6, 3, 8, 9];
arr.sort (function(a, b){
    return a-b; //accending order return 
    // return b-a ; // return in decending order
});

//sort , map , filter , reduce , foreach 

//foreach --> array ke har ek ke liye 

arr.forEach(function(val){
    console.log(val+5);
})

//MAP --> map tabhi use karo jb hame ek naya array banana hain pichle array ke base pe 
let arr= [42, 6, 31, 83, 9];
let ans= arr.map(function(val){
    // return 12;
    if (val>10) return val;
})

//Filter --> it is same as the map but it returns the true and the false

arr.filter(function(val){
   if(val<10) return true; 
});

//Reduce --> ek array se ek value banana , Reduce to 1 element 
let ans = arr.reduce(function(accumulator ,val){
    return accumulator+ val;
}, 0);
//acccumulator value yaad rakhta hain, and accumlator me store karta hain 

//find

let arr =[
    { id: 1, key: 1},
    { id: 2, key: 2},
    { id: 3, key: 1},
];

let va = arr.find(function(val){
    return val.key ==1;
});

//some --> it return true and false 
//any satisfy the condition
let any = arr.some(function(val){
    return val>85;
});

//Disturing and Spread operator 
let arr = [1, 3, 5, 7, 8];
let [a, b]= arr;

//copy the one array to anothe 
let arrcopy=[...arr];