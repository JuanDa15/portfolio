import { DEFAULT_LANG, type Lang } from ".";
import { routes, showDefaultLang, ui } from "./ui"

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')

  if (lang in ui) return lang as Lang;
  return DEFAULT_LANG;
}

export const useTranslations = (lang: Lang) => {
  return function t(key: keyof typeof ui[typeof DEFAULT_LANG]) {
    return ui[lang][key] || ui[DEFAULT_LANG][key]
  }
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll('/', '')
    const hasTranslation =
      DEFAULT_LANG !== l &&
      (routes[l as Lang] as Record<string, string>) !== undefined &&
      ((routes[l as Lang] as Record<string, string>)[pathName]) !== undefined;
    const translatedPath = hasTranslation
      ? '/' + (routes[l as Lang] as Record<string, string>)[pathName]
      : path
    return !showDefaultLang && l === DEFAULT_LANG
      ? `${translatedPath}`
      : `/${l}${translatedPath}`
  }
}

export const getRouteFromUrl = (url: URL): string | undefined => {
  const pathname = new URL(url).pathname;
  const parts = pathname.split('/')
  const path = parts.pop() || parts.pop()

  if (path === undefined) return undefined

  const currentLang = getLangFromUrl(url)

  if (DEFAULT_LANG === currentLang) {
    const route = Object.values(routes)[0]
    return route[path as keyof typeof route] !== undefined
      ? route[path as keyof typeof route]
      : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value)
  }

  const reversedKey = getKeyByValue(routes[currentLang], path)

  if (reversedKey === undefined) return undefined

  return reversedKey
}