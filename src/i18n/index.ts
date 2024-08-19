import english from '@/i18n/en.json'
import spanish from '@/i18n/es.json'

const LANG = {
  ENGLISH: 'en',
  SPANISH: 'es'
}

export const languages = {
  en: 'English',
  es: 'Español'
}

export type Lang = keyof typeof languages;
export const DEFAULT_LANG: Lang = 'en';

export const getI18N = ({
  currentLocale = DEFAULT_LANG
}: {
  currentLocale?: string | undefined
}) => {
  if (currentLocale === LANG.SPANISH) return { ...english, ...spanish }
  return english;
}