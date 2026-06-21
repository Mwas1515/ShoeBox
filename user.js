const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Show Password Functionality
const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("change", () => {
passwordInput.type = showPassword.checked
? "text"
: "password";
});

loginForm.addEventListener("submit", function (event) {
event.preventDefault();


const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

// Get saved user from localStorage
const savedUser = JSON.parse(localStorage.getItem("user"));

// No account exists
if (!savedUser) {
    message.textContent =
        "No account found. Please register first.";
    message.style.color = "red";

    setTimeout(() => {
        window.location.href = "register.html";
    }, 2000);

    return;
}

// Login successful
if (
    email === savedUser.email &&
    password === savedUser.password
) {
    localStorage.setItem("isLoggedIn", "true");

    message.textContent = "Login Successful!";
    message.style.color = "lightgreen";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);

} else {

    // Wrong email or password
    message.textContent =
        "Invalid email or password. If you don't have an account, please register first.";
    message.style.color = "red";
}

});
