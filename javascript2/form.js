// Form submit hone par page reload rokna
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Input values lena
    let firstname = inputs[0].value;
    let surname = inputs[1].value;
    let email = inputs[2].value;
    let imageurl = inputs[3].value;

    // Create Card
    let card = document.createElement("div");
    card.classList.add("card");

    // Create Profile Image
    let img = document.createElement("img");
    img.setAttribute("src", imageurl);

    // Create Name
    let h2 = document.createElement("h2");
    h2.textContent = firstname + " " + surname;

    // Create Email
    let p = document.createElement("p");
    p.textContent = email;

    // Append inside card
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);

    // Add card on screen
    document.body.appendChild(card);

    // Submit hone ke baad input fields clear karo
    let fields = document.querySelectorAll("input, textarea");

    fields.forEach(function (field) {
        if (field.type != "submit") {
            field.value = "";
        }
    });

});