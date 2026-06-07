// FUNDAMENTALS OF JAVASCRIPT 

//ARRAYS

var a= [1, 2, 3, 5, 6 ,{}, [], 28]; // (There is no similar thing in js )array me konsi bhi type ki value rakh sakte ho 
//foreach map filter find indexOf

var arr= [1, 2, 3, 5, 6 ,28];
arr.forEach(function(val){
    //to ietera for each value
    console.log(val+ "Hello "); 

})

//Map --> es ke compare me blank array (new array) return karega 
        //   store the array result in new array
var arr= [1, 2, 3, 5, 6 ,28];
arr.map(function (val){
    return val+10;
})


//filter --> Conditional thing (kuch ko hatao kuch ko rakho)

var arr= [1, 2, 3, 5, 6 ,28];
arr.filter(function (val){
if (val>3) {return true}
    else {return false}
})


//find
//find hamesha pehla banda dhund kar dega 
var arr= [1, 2, 3, 5, 6 ,28];
arr.find(function (val){
if (val==2) return val;
})


//indexOf
var arr= [1, 2, 3, 5, 6 ,28];
arr.indexOf(3) //element ki index return karta hain nahi  to -1 return karega 


//OBJECTS --> anythinng is in {} is an object
var a= {
    name:"harsh",
    age: 24
}
//to access
a['name'] 
a.name 

Object.freeze(a); // value freeze ho jayegi aur update nahi hogi 


//Fuction is precall ho jata hain js me 

//ASYNC JS --> async nature ke code ko side me bhej do aur sync ke code ko chalne do 
                // aur main code complete hone ke baad async code ki condition check karo, agar complete hua ho to main me le aao 

async function fun(val) {
    var blob = await fetch(`https://randomuser.me/api/`) //fetch is the asynchronous by nature 
    //it return in string so convert it to JSON
    var ans= await blob.json();
    console.log(ans.results);
}
//to get the data must run the function 
fun();
