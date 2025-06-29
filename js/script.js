document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("modeToggle");
    const body = document.body;

    // 1. Load previously saved mode from local storage
    const savedMode = localStorage.getItem("mode");

    if (savedMode === "light") {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        toggleBtn.textContent = "☀️";
    } else {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "🌙";
    }

    // 2. Toggle mode on click
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        // 3. Save mode and update icon
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("mode", "light");
            toggleBtn.textContent = "☀️";
        } else {
            localStorage.setItem("mode", "dark");
            toggleBtn.textContent = "🌙";
        }
    });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
