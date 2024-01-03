// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_en from "./src/translation/en/global.json"
import global_ja from "./src/translation/ja/global.json"
const savedLanguage = localStorage.getItem('language') || 'en';
const resources = {
    en: {
        translation: global_en
    },
    ja: {
        translation: global_ja
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
