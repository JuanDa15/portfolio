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
    class: 'bg-white/5 text-white',
    icon: NextJSIcon,
  },
  TAILWIND: {
    id: 'tailwind',
    name: 'Tailwind CSS',
    class: 'bg-white text-[#73bcf6]',
    icon: TailwindCSSIcon,
  },
  ANGULAR: {
    id: 'angular',
    name: 'Angular',
    class: 'bg-white/5 text-bright-magenta',
    icon: AngularIcon
  },
  REACT: {
    id: 'react',
    name: 'React',
    class: 'bg-white/5 text-[#61DBFB]',
    icon: ReactIcon
  },
  FIGMA: {
    id: 'figma',
    name: 'Figma',
    class: 'bg-white/5 text-[#F24E1E]',
    icon: FigmaIcon
  },
  GITHUB: {
    id: 'github',
    name: 'GitHub',
    class: 'bg-white/5 text-white',
    icon: GitHubIcon
  },
  AWS: {
    id: 'aws',
    name: 'AWS',
    class: 'bg-white/5 text-[#f90]',
    icon: AWSIcon
  },
};