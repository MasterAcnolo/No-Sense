async function changeLanguage(lang) {
    try {
        const response = await fetch(`script/lang/${lang}.json`);
        const translations = await response.json();

        for (const key in translations) {
            const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
            elements.forEach(el => {
                el.textContent = translations[key];
            });
        }

        updateActiveLanguageOpacity(lang);
        localStorage.setItem('lang', lang);
    } catch (error) {
        console.error("Erreur de chargement de la langue :", error);
    }
}

function updateActiveLanguageOpacity(lang) {
    const frButtons = document.querySelectorAll('#lang-fr, .lang-fr');
    const enButtons = document.querySelectorAll('#lang-en, .lang-en');

    if (lang === 'fr') {
        frButtons.forEach(btn => btn.style.opacity = '0.4');
        enButtons.forEach(btn => btn.style.opacity = '1');
    } else {
        frButtons.forEach(btn => btn.style.opacity = '1');
        enButtons.forEach(btn => btn.style.opacity = '0.4');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'fr';
    changeLanguage(savedLang);

    document.querySelectorAll('.lang-fr').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage('fr'));
    });
    document.querySelectorAll('.lang-en').forEach(btn => {
        btn.addEventListener('click', () => changeLanguage('en'));
    });

    const frBtnHeader = document.getElementById('lang-fr');
    const enBtnHeader = document.getElementById('lang-en');
    if (frBtnHeader) frBtnHeader.addEventListener('click', () => changeLanguage('fr'));
    if (enBtnHeader) enBtnHeader.addEventListener('click', () => changeLanguage('en'));
});
