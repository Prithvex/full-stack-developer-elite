//Form and Form Validation 

let nm = document.querySelector("#name");
let form= document.querySelector("form")

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();

//     if(nm.value.lenght<=2){
//         document.querySelector("#hide").style.display = "initial";
//     }
//     else{
//         document.querySelector("#hide").style.display = "none";
//     }
// });


//Regex --> is the  pattern based code
form.addEventListener("submit", function(dets){
    dets.preventDefault();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // this is regex for the email test 
    let email = "test@gmail.com";

    if(regex.test(email)){
    console.log("Valid Email");
    }
    else{
        console.log("Invalid Email");
    }

});