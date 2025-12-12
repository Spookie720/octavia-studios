// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.getElementById("theme-toggle");
    const THEME_KEY = "octavia-theme"; // stores "dark" or "light"

    if (!body || !toggle) return;

    function applyTheme(theme) {
        if (theme === "light") {
            body.classList.add("theme-light");
            toggle.textContent = "☾"; // indicates switch to dark
        } else {
            body.classList.remove("theme-light");
            toggle.textContent = "☀"; // indicates switch to light
        }
    }

    // Dark is default. Use saved preference if it exists.
    const saved = localStorage.getItem(THEME_KEY);

    if (saved === "light" || saved === "dark") {
        applyTheme(saved);
    } else {
        applyTheme("dark");
    }

    // Toggle between light and dark
    toggle.addEventListener("click", () => {
        const isLight = body.classList.contains("theme-light");
        const nextTheme = isLight ? "dark" : "light";
        localStorage.setItem(THEME_KEY, nextTheme);
        applyTheme(nextTheme);
    });
});
