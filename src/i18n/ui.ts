import type { Lang } from "@/i18n";

export const showDefaultLang = false;

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos'
  }
} as const

export const routes: Record<Lang, Record<string, string>> = {
  en: {
    home: '',
    about: 'about',
    projects: 'projects'
  },
  es: {
    home: '',
    about: 'sobre-mi',
    projects: 'proyectos'
  }
}