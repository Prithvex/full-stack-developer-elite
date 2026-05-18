//Dom Manipulation--> Document Object Model
//Dom is equal to body 
//html se element select karna 
// text badalna
//html ,css , text badalna
//attribute badalna 
//event listner add karna 


//Selecting element
document.getElementById
document.getElementsByClassName
document.querySelector

let abcd= document.getElementById("Id here !");
console.log(abcd);

//by using the querySelector we select --> h1, p , h3 etc. --> and always pehla wala select hoga 
document.querySelector("h1"); //first element selected
console.dir(abcd);

//query selector all --> it gives array jaisa structure
document.querySelectorAll("h1"); //first element selected
console.dir(abcd);

//dom Manipulation
let h1= document.querySelector("h1");
//first check using the dir methon and change any one of the  value pair
h1.textContent= "hello bhai ! "; //change anything 
h1.innerHTML="i change  it ";
h1.innerHTML="<i> heyy </> "; //html ke aandr wala part
console.dir(h1);

//attribute Manipulation
//agar kisi a tag ko url na do to us side ka current url hi usaka URL ban jata hain

let a= document.querySelector("a");
a.href= "https: www.google.com";

//set attribute--> this 'a' tag reffered to html and we can also pass another tag 
let a= document.querySelector("a");
a.setAttribute("href", "https://www.google.com");

//get attribute --> value mangi hain 
a.getAttribute("your attribe here");//href // a tag hai  
a.setAttribute("your attribe here");//href
a.removeAttribute("href");//href


//Dynamic DOM Manipulation-->
//create element
//then append ya prepand karo -- jaha bhi element chahiye vaha

let h1=document.createElement("h1");
console.log(h1);
document.querySelector("body").append(h1); //script ke pehle aayega 
document.querySelector("body").prepend(h1); // script ke baad me aayega 

let h1= document.createElement("h1");
h1.textContent= "Hey main bahar se aaya hu ";

document.querySelector("div").appendChild(h1); // index.html ke div me h1 ki value appen hui hain 

//Style Update karna hain
//js se css badalna 

let h2 = document.querySelector("h2");
console.dir(h2);
h2.style.color="yellow";
h2.style.backgroundColor="pink";
h2.style.fontFamily="Gilroy";
h2.style.textTransform="capitalize";

//Javascript se class hataye lagaye kaise 
let h1= document.querySelector("h1");
h1.classList.add("hululu"); //css ke class banao aur dom se use karo
//to remove class 
h1.classList.remove("hululu");
//toggle -- hai to hata dega aur nahi hain to laga dega 
h1.classList.toggle("hululu");

// to select id in querySelector use #ID-NAME
let mrid= document.querySelector("#myid");
console.log(mrid);

// select all <li> elements and prit their text  using a loop.

let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);
}); //or 

for (let i=0; i<lis.length; i++){
    console.log(lis[0].textContent);
}

//innerHTML--  changes the text and with their html tag 
// innerText-- only print the text as it is  including tags 

//how to get the src of any image 
let img= document.querySelector("img");
console.log("img.src"); //or
console.log(img.getAttribute("src"));

//setAttribute chages the attribute of any element 
document.querySelector("img").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFRHMXWW1ww6SZjGYsvphiGxIi2FzwCToj0d0KD_azJ5jmlEAv70oQ&s");

//Select a link and update its href
let a =document.querySelector("a");
a.href= "https://www.crunchyroll.com";

//Add title attribute to div Dynamically
let div= document.querySelector("div");
div.setAttribute("title", "Hello");

//disable button ko enable karo 
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

//What does createElement() do?  -- return html node in return 
let h1= document.querySelector("h1");
console.log(h1);

// Create a new image element with a placeholder source and add it at the top of a div.
let img = document.createElement("img");
img.setAttribute(
"src",
"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
);
img.classList.add("placeholder"); // placeholder is the css class 
document.querySelector("div").prepend(img);

//Add a highlight class to every even item in a list 
let li = document.querySelectorAll("ul li:nth-child(2n)")
li.forEach(function(val){
    val.classList.add("highlight");
});
console.log(li);

