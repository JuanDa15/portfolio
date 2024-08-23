import AngularIcon from "./icons/AngularIcon.astro";
import AWSIcon from "./icons/AWSIcon.astro";
import FigmaIcon from "./icons/FigmaIcon.astro";
import GitHubIcon from "./icons/GitHubIcon.astro";
import NextJSIcon from "./icons/NextJSIcon.astro";
import ReactIcon from "./icons/ReactIcon.astro";
import TailwindCSSIcon from "./icons/TailwindCSSIcon.astro";

export const TAGS = {
  NEXT: {
    id: 'next_js',
    name: 'Next.js',
    class: 'text-black dark:text-lavender',
    icon: NextJSIcon,
  },
  TAILWIND: {
    id: 'tailwind',
    name: 'Tailwind CSS',
    class: 'text-[#73bcf6]',
    icon: TailwindCSSIcon,
  },
  ANGULAR: {
    id: 'angular',
    name: 'Angular',
    class: 'text-deep-purple dark:text-electric-purple',
    icon: AngularIcon
  },
  REACT: {
    id: 'react',
    name: 'React',
    class: 'text-[#61DBFB]',
    icon: ReactIcon
  },
  FIGMA: {
    id: 'figma',
    name: 'Figma',
    class: 'text-[#F24E1E]',
    icon: FigmaIcon
  },
  GITHUB: {
    id: 'github',
    name: 'GitHub',
    class: 'text-slate-800 dark:text-white',
    icon: GitHubIcon
  },
  AWS: {
    id: 'aws',
    name: 'AWS',
    class: 'text-[#f90]',
    icon: AWSIcon
  },
};