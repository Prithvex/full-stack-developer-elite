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