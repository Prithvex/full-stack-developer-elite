//Local Storage Session Storage and cookies 

// localStorage -> aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga
// sessionstorage -> ye aapka data temporarily store karta hai matlab ki tab band hua aur data gaya
// cookies -> ye bhi data store karta hai and aapka data browser ke cookies naam ki property mein save hota hai and ye cookie concept kam data ya light data ke liye hota hain

//LOCAL STORAGE 
// store , data fetch , remove , update 
localStorage.setItem("name", "Pikachu");

let val= localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.setItem("name", "Charizad")// set if already set then override

localStorage.clear();

//SESSION STORAGE--> temp data storage 
sessionStorage.setItem("name", "Pikachu");

let val= sessionStorage.getItem("name");

sessionStorage.removeItem("name");

sessionStorage.setItem("name", "Charizad")// set if already set then override

sessionStorage.clear();


//COOKIES 
//browser me chota data store karne ke liye ---max 4kb
//local and session -- 5MB
// cookies mein jo bhi data store karoge wo data page reload par automatically server par jaayega

//To read the cookies --> download chrome extention 'edit this cookie'
document.cookie= "iamcookie";

//local storage only storage strings --> object, arrays nahi store nahi kar sakta hain 
localStorage.setItem("friends", ["Aarav", "Rohan", "Kabir", "Vihaan", "Arjun"])

//make obj to string 
JSON.stringify(["Aarav", "Rohan", "Kabir", "Vihaan", "Arjun"])

//make them string 
localStorage.setItem("friends", ["Aarav", "Rohan", "Kabir", "Vihaan", "Arjun"])

//make back the string to normal form 
let fr= JSON.parse(localStorage.setItem("friends", ["Aarav", "Rohan", "Kabir", "Vihaan", "Arjun"])
);
console.log(fr);