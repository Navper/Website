




;(function () {
    var STORAGE_KEY = 'cnp-lang';

    function getCurrentLang() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;
        
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

        
        document.documentElement.lang = lang;

        
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) el.placeholder = dict[key];
        });

        
        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-title');
            if (dict[key] !== undefined) el.title = dict[key];
        });

        
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    function setLanguage(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations();
        
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
    }

    
    document.addEventListener('DOMContentLoaded', function () {
        applyTranslations();

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLanguage(btn.dataset.lang);
            });
        });
    });

    
    window.i18n = {
        t:                t,
        getCurrentLang:   getCurrentLang,
        setLanguage:      setLanguage,
        applyTranslations: applyTranslations
    };
})();
