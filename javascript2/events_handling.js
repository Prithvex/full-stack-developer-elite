//Brower me page pr koi bhi harkat karo event rase ho jate hain 
// kuch screen pr ho aur react karne ke liye -- event handling 

// select the paragraph first --> then kya hoga paragraph pr --> add event addEventListener
let h2 = document.querySelector("h2");
h2.addEventListener("click", function(){
    h2.style.color="red";
});

//Double click Event --dblclick
let h2 = document.querySelector("h2");
h2.addEventListener("dblclick", function(){
    h2.style.color="blue";
});
p.removeEventListner("dblclick");

let h2 = document.querySelector("h2");
 function dbclick(){
    h2.style.color="blue";
}
h2.addEventListener("dblclick", dbclick)
p.removeEventListner("dblclick", dbclick);

// Common event Listners 
let input = document.querySelector("input");
input.addEventListener("input", function(detail){
    // console.log("typed");
    //make it dynamic 
    console.log("detail");

    if(detail.data != null){
        console.log(detail.data);
    }

});

//change event
let sel= document.querySelector("select");

sel.addEventListener("change", function(val){
    console.log(val);
});

//change the device selected 
let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function (event) {
    device.textContent = `${event.target.value} Device selected`;
});

//Windowkey Project --> check kr lena 