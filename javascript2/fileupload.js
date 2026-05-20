// Change the Upload Button to Custom Button

let btn = document.querySelector("#inputBox");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function () {
    fileinp.click();
});

fileinp.addEventListener("change", function (e) {

    const file = e.target.files[0];

    if (file) {
        btn.textContent = file.name;
    }

});