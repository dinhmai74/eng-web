import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them)

export const tran = (text: string): string => {
  const currentLang = i18n.language
  return i18n.t(text, {lng: currentLang})
}

const resources = {
  en: {
    translation: require('./languages/en.json')
  },
  vi: {
    translation: require('./languages/vi.json')
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // tslint:disable-next-line: object-literal-sort-keys
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
