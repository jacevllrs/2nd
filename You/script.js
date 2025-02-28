// script.js

function addNumber(num) {
    const passwordInput = document.getElementById("password");
    passwordInput.value += num;
}

function clearInput() {
    document.getElementById("password").value = "";
}

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const message = document.getElementById("message");

    const correctPassword = "0101";

    if (passwordInput === correctPassword) {
        window.location.href = "dashboard.html"; // Redirect to Dashboard
    } else {
        message.textContent = "Incorrect password. Try again.";
        message.style.color = "#FF4B4B";
        clearInput();
    }
}
