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

export type TagName = keyof typeof TAGS;