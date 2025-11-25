// js/main.js

(function () {
    const body = document.body;
    const toggle = document.getElementById('theme-toggle');

    if (!toggle) return;

    const THEME_KEY = 'octavia-theme';

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('theme-dark');
            toggle.textContent = '☀';
        } else {
            body.classList.remove('theme-dark');
            toggle.textContent = '☾';
        }
    }

    // On load: check saved theme or prefers-color-scheme
    const saved = localStorage.getItem(THEME_KEY);

    if (saved === 'dark' || saved === 'light') {
        applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // On click: toggle and save
    toggle.addEventListener('click', () => {
        const isDark = body.classList.contains('theme-dark');
        const next = isDark ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
    });
})();
