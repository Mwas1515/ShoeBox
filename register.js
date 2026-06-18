const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

// Show Password Functionality
const passwordInput = document.getElementById("registerPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("change", () => {
    const type = showPassword.checked ? "text" : "password";

    passwordInput.type = type;
    confirmPasswordInput.type = type;
});

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match";
        message.style.color = "red";
        return;
    }

    const user = {
        email,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    message.textContent = "Account created successfully!";
    message.style.color = "lightgreen";

    // Automatically go to login page
    setTimeout(() => {
        window.location.href = "user.html";
    }, 1000);
});