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
    } catch (error) {
        console.error("Erreur de chargement de la langue :", error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    changeLanguage('ru');

    const languages = ['fr', 'en', 'ru', 'ru-romanified'];

    languages.forEach(lang => {
        const button = document.getElementById(`${lang}-button`);
        if (button) {
            button.addEventListener('click', () => changeLanguage(lang));
        }
    });
});
