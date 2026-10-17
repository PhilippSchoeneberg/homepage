// Light/dark theme handling.
// Loaded in <head> (not deferred) so a saved choice is applied before the first paint.
// Without a saved choice the CSS follows the system setting (prefers-color-scheme).
(function () {
    var root = document.documentElement;
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    function readSaved() {
        try {
            var value = localStorage.getItem("theme");
            return value === "light" || value === "dark" ? value : null;
        } catch (error) {
            return null;
        }
    }

    function save(theme) {
        try {
            localStorage.setItem("theme", theme);
        } catch (error) {
            // Storage unavailable (private mode, blocked site data): the toggle still works for this page.
        }
    }

    function currentTheme() {
        return root.dataset.theme || (systemDark.matches ? "dark" : "light");
    }

    var saved = readSaved();
    if (saved) {
        root.dataset.theme = saved;
    }

    document.addEventListener("DOMContentLoaded", function () {
        var button = document.querySelector(".theme-toggle");
        if (!button) {
            return;
        }

        function syncButton() {
            var dark = currentTheme() === "dark";
            button.setAttribute("aria-pressed", String(dark));
            button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
            button.title = dark ? "Switch to light theme" : "Switch to dark theme";
        }

        button.hidden = false;
        syncButton();

        button.addEventListener("click", function () {
            var next = currentTheme() === "dark" ? "light" : "dark";
            root.dataset.theme = next;
            save(next);
            syncButton();
        });

        systemDark.addEventListener("change", syncButton);
    });
})();
