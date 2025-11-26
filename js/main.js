// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.getElementById("theme-toggle");
    const THEME_KEY = "octavia-theme";

    if (!toggle || !body) return;

    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("theme-dark");
            toggle.textContent = "☀"; // sun icon
        } else {
            body.classList.remove("theme-dark");
            toggle.textContent = "☾"; // moon icon
        }
    }

    // Load stored or system theme
    const saved = localStorage.getItem(THEME_KEY);

    if (saved === "dark" || saved === "light") {
        applyTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        applyTheme("dark");
    } else {
        applyTheme("light");
    }

    // Toggle on click
    toggle.addEventListener("click", () => {
        const nextTheme = body.classList.contains("theme-dark") ? "light" : "dark";
        localStorage.setItem(THEME_KEY, nextTheme);
        applyTheme(nextTheme);
    });
});
