//square bracket ki jagay curly brackets 
let obj ={
    name="Prithvi",
    age: 21,
    khana="Upashi hu!"
};

let aa="name";
obj[aa];

//
const user={
    name: "Harsh",
    address:{
        city: "Bhopal",
        pin: 467837,
        location:{
            lat: 23.2,
            lng: 77.4,
        },
    },
};
//if u got the error -- uske pehle wale me error hota hain 
//to access
user.address.location.lng

let {lat, lng}  =user.address.location;


for(let key in user){
    console.log(key);
    //to access the value
    console.log(key, user[key]);
}

object.keys(obj);

//Assign the object 

let obj2 = object.assign({ price: Infinity}, obj);

//deep clone --> by using the spread operator (... obj)
// Nested thing uses nested objects --> when u clone by using (... ) operator then when we make change in first obj then second also go modified

//use the deep clone 
//convert to string 
let string= JSON.stringify(user);
//convert back to obj
JSON.parse(string);

//ho sakta hain karta hain ya na karta hain
obj?.address?.city

// [role]: "harsh";
//object is key true aur number bhi reh sakti hain

//Destructure the key "First-name" as a variable called firstname 

const user={
    "first-name": "Naruto",
};

let{ "first-name": firstName}=user;

//use object.entries()

const course={
    title:"Javascript",
    duration: "4 weeks ",
};

object.entries(course).forEach(function(val) {

    console.log(val[0]+ ":"+val[1]);
    
});

//use variable to dynamically assign property
const key ="role";
let obj={
    name: "Mey",
    [key]: "admin",
};
