import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { hi } from './hi';

void i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
export default i18n;
