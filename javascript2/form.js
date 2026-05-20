// Form submit hone par page reload hota hain --> hame Rokna hain Submit hone se !!

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Create Card
    let card = document.createElement("div");
    card.classList.add("card");

    // Create Profile Image
    let profile = document.createElement("img");

    // Input Values
    let firstname = inputs[0].value;
    let surname = inputs[1].value;
    let email = inputs[2].value;
    let imageurl = inputs[3].value;

    // Set image
    profile.src = imageurl;

    // Create Name
    let h2 = document.createElement("h2");
    h2.textContent = firstname + " " + surname;

    // Create Email
    let p = document.createElement("p");
    p.textContent = email;

    // Append inside card
    card.appendChild(profile);
    card.appendChild(h2);
    card.appendChild(p);

    // Add card on screen
    document.body.appendChild(card);
    let img = document.createElement("img");
    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrevwXGSxY_5aDm_HgEAL4AGpBoMQ11x4rxi4OifQhh-2jqlHILOwitfU&s");


});