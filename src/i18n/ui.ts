import type { Lang } from "@/i18n";

export const showDefaultLang = false;

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'footer.rights': 'All rights reserved',
    'btn.more': 'See more',
    'btn.page': 'Go to page',
    'btn.code': 'View code',
    'btn.send': 'Send',
    'validation.required': 'Required field',
    'validation.email': 'Invalid email address',
    'validation.minlength': 'Minimum length not met',
    'validation.maxlength': 'Maximum length exceeded'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'footer.rights': 'Todos los derechos reservados',
    'btn.more': 'Ver más',
    'btn.page': 'Ir a la página',
    'btn.code': 'Ver código',
    'btn.send': 'Enviar',
    'validation.required': 'Campo obligatorio',
    'validation.email': 'Correo electrónico inválido',
    'validation.minlength': 'Longitud mínima no alcanzada',
    'validation.maxlength': 'Longitud máxima excedida'
  }
} as const

export const routes: Record<Lang, Record<string, string>> = {
  en: {
    home: '',
    about: 'about',
    projects: 'projects',
    experience: 'experience'
  },
  es: {
    home: '',
    about: 'sobre-mi',
    projects: 'proyectos',
    experience: 'experiencia'
  }
}