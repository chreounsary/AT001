import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./i18n/en.json"
import km from "./i18n/km.json"
const resources = {
  en,
  km
}
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;