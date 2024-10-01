import type { IExperience } from "../types"
import experienceData from 'public/data/experience.json';

export async function getAllExperience(locale: string | undefined = 'en') {
  const data: Record<string, any> = experienceData;
  return data[locale] as IExperience[]
}

export async function getExperience(id: string, locale: string | undefined = 'en') {
  const resp = await getAllExperience(locale)

  const experience = resp.find(i => i.id === Number(id))
  return experience
}