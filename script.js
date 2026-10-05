const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});// ===============================
// Dark / Light Theme
// ===============================

const themeToggle = document.getElementById("theme-toggle");

let currentTheme = localStorage.getItem("theme") || "dark";

document.documentElement.setAttribute("data-theme", currentTheme);

if (currentTheme === "light") {
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", function () {

    if (document.documentElement.getAttribute("data-theme") === "dark") {

        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";

    } else {

        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";

    }

});