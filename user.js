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

    if (!savedUser) {
        message.textContent = "No account found. Please create an account first.";
        message.style.color = "red";
        return;
    }

    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {
        message.textContent = "Login Successful!";
        message.style.color = "lightgreen";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } else {
        message.textContent = "Invalid Email or Password";
        message.style.color = "red";
    }
});