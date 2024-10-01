import type { TAGS } from "./constants";

export interface IExperience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  tags: TagName[];
  link?: string;
  achievements: string[]
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  long_description: string;
  link?: string;
  github: string;
  preview: string;
  tags: TagName[];
  images: string[]
}


export type TagName = keyof typeof TAGS;