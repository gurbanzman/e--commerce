import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Çevirileri yüklemek için backend kullan
  .use(LanguageDetector) // Tarayıcı dil algılama
  .use(initReactI18next) // React ile entegrasyon
  .init({
    fallbackLng: 'tr', // Eğer dil algılanmazsa İngilizce kullan
    debug: false, // Geliştirme sırasında hata ayıklama için true
    interpolation: {
      escapeValue: false, // React zaten XSS'e karşı güvenli
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Çeviri dosyalarının konumu
    },
  });

export default i18n;
