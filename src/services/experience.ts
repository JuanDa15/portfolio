import type { IExperience } from "../types"

export async function getAllExperience(locale: string | undefined = 'en') {
  const resp = await fetch(`http://localhost:4321/data/experience.json`)
  const data = await resp.json()
  return data[locale] as IExperience[]
}

export async function getExperience(id: string, locale: string | undefined = 'en') {
  const resp = await getAllExperience(locale)

  const experience = resp.find(i => i.id === Number(id))
  return experience
}