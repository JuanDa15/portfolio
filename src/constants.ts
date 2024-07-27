import AngularIcon from "./icons/AngularIcon.astro";
import AWSIcon from "./icons/AWSIcon.astro";
import FigmaIcon from "./icons/FigmaIcon.astro";
import GitHubIcon from "./icons/GitHubIcon.astro";
import NextJSIcon from "./icons/NextJSIcon.astro";
import ReactIcon from "./icons/ReactIcon.astro";
import TailwindCSSIcon from "./icons/TailwindCSSIcon.astro";

export const TAGS = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-white/5 text-white',
    icon: NextJSIcon,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-white text-[#73bcf6]',
    icon: TailwindCSSIcon,
  },
  ANGULAR: {
    name: 'Angular',
    class: 'bg-white/5 text-bright-magenta',
    icon: AngularIcon
  },
  REACT: {
    name: 'React',
    class: 'bg-white/5 text-[#61DBFB]',
    icon: ReactIcon
  },
  FIGMA: {
    name: 'Figma',
    class: 'bg-white/5 text-[#F24E1E]',
    icon: FigmaIcon
  },
  GITHUB: {
    name: 'GitHub',
    class: 'bg-white/5 text-white',
    icon: GitHubIcon
  },
  AWS: {
    name: 'AWS',
    class: 'bg-white/5 text-[#f90]',
    icon: AWSIcon
  },
};