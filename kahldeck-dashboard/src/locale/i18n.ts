// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import es from './es';

i18n
  .use(initReactI18next) // Integración con React
  .init({
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar
    },
    debug: true,
    resources: {
      en: {
        'translation': en
      },
      es: {
        'translation': es
      },
    },
  });

export default i18n;
