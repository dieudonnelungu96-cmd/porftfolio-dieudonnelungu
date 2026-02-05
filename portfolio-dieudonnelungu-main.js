document.addEventListener("DOMContentLoaded", function(){

    const html = document.documentElement;

    /* =====================
       MENU TOGGLE
    ===================== */
    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-menu");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuBtn.classList.toggle("active");
    });

    /* =====================
       DARK MODE (CENTRAL)
    ===================== */
    const themeToggle = document.getElementById("themeToggle");
    const themeSwitch = document.getElementById("themeSwitch");

    function setTheme(theme){
        html.dataset.theme = theme;
        localStorage.setItem("theme", theme);

        if (themeToggle) {
            themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
        }
        if (themeSwitch) {
            themeSwitch.checked = theme === "dark";
        }
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    // Desktop button
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
        });
    }

    // Mobile switch
    if (themeSwitch) {
        themeSwitch.addEventListener("change", () => {
            setTheme(themeSwitch.checked ? "dark" : "light");
        });
    }

    /* =====================
       LANGUAGE TOGGLE
    ===================== */
    const langToggle = document.getElementById("langToggle");
    let lang = "en";

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            lang = lang === "en" ? "fr" : "en";
            langToggle.textContent = lang === "en" ? "French" : "English";
            html.lang = lang;
        });
    }

    /* =====================
       PWA
    ===================== */
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js");
    }

});