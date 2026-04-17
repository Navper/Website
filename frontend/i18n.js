// i18n.js — language switching engine
// Requires translations.js to be loaded first.
// Sets up window.i18n immediately (synchronously) so inline scripts can call
// window.i18n.t() at any time, including from DOMContentLoaded handlers.

;(function () {
    var STORAGE_KEY = 'cnp-lang';

    function getCurrentLang() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;
        // Auto-detect browser language
        var browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        return browser.startsWith('es') ? 'es' : 'en';
    }

    function t(key) {
        var lang = getCurrentLang();
        var dict = translations[lang] || translations['en'];
        return dict[key] !== undefined ? dict[key] : (translations['en'][key] || key);
    }

    function applyTranslations() {
        var lang = getCurrentLang();
        var dict = translations[lang] || translations['en'];

        // Update <html lang> attribute
        document.documentElement.lang = lang;

        // Text content: [data-i18n]
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        // Placeholder attributes: [data-i18n-placeholder]
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) el.placeholder = dict[key];
        });

        // Title attributes: [data-i18n-title]
        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-title');
            if (dict[key] !== undefined) el.title = dict[key];
        });

        // Mark active lang button
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    function setLanguage(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations();
        // Notify other scripts (e.g. about.html typing animation)
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
    }

    // DOM ready: apply translations + wire up language buttons
    document.addEventListener('DOMContentLoaded', function () {
        applyTranslations();

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLanguage(btn.dataset.lang);
            });
        });
    });

    // Public API — available immediately for inline scripts
    window.i18n = {
        t:                t,
        getCurrentLang:   getCurrentLang,
        setLanguage:      setLanguage,
        applyTranslations: applyTranslations
    };
})();
