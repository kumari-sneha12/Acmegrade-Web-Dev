const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset error messages and classes
    email.parentElement.className = 'input-field';
    password.parentElement.className = 'input-field';
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    if (email.value.trim() === "") {
        emailError.style.display="block";
        email.parentElement.className = 'input-field error';
        emailError.textContent = "Email is required";
        valid = false;
    } else {
        email.parentElement.className = "input-field success";
    }

    if (password.value.trim() === "") {
        passwordError.style.display="block";
        password.parentElement.className = 'input-field error';
        passwordError.textContent = "Password is required";
        valid = false;
    } else if (password.value.trim().length < 3) {
        passwordError.style.display="block";
        password.parentElement.className = 'input-field error';
        passwordError.textContent = "Password must be at least 3 characters.";
        valid = false;
    } else if (password.value.trim().length > 15) {
        passwordError.style.display="block";
        password.parentElement.className = 'input-field error';
        passwordError.textContent = "Password must be less than 15 characters.";
        valid = false;
    } else {
        password.parentElement.className = "input-field success";
    }

   
    if (valid) {
       
        console.log("Form is valid and ready to be submitted.");
    }
});
