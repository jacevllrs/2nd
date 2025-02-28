// dashboard.js
document.addEventListener("DOMContentLoaded", () => {
    const readMeBtn = document.getElementById("readMeBtn");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    // Show the pop-up when "Read Me" button is clicked
    readMeBtn.addEventListener("click", () => {
        popup.classList.add("active");
    });

    // Close the pop-up when the close button is clicked
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    // Close the pop-up when clicking outside the content area
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.remove("active");
        }
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        window.location.href = 'polaroid.html';
    });
});
