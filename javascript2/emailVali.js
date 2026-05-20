// Email Password Validator

let email = document.querySelector("#email");

let password = document.querySelector("#pass");

let form = document.querySelector("#loginform");

let message = document.querySelector("#message");

form.addEventListener("submit", function(dets){

    dets.preventDefault();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

    let emailAns = emailRegex.test(email.value);

    let passwordAns = passwordRegex.test(password.value);

    if(!emailAns){

        message.textContent = "Invalid Email";

        message.style.color = "red";

    }

    else if(!passwordAns){

        message.textContent =
        "Password must contain uppercase and number";

        message.style.color = "red";

    }

    else{

        message.textContent = "Login Successful";

        message.style.color = "green";

    }

});