import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Путь к файлам переводов
    },
    fallbackLng: 'en', // Язык по умолчанию
    interpolation: {
      escapeValue: false, // Не экранировать значения, React уже экранирует
    },
    ns: ['translation'], // Пространства имен
    defaultNS: 'translation', // Пространство имен по умолчанию
  });

export default i18n;