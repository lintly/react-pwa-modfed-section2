import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import zu from "./locales/zu.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zu: { translation: zu },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
