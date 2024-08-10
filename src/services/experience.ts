import type { IExperience } from "../types"

export async function getAllExperience() {
  const resp = await fetch('http://localhost:4321/data/experience.json')
  const data = await resp.json()
  return data as IExperience[]
}

export async function getExperience(id: string) {
  const resp = await getAllExperience()

  const experience = resp.find(i => i.id === Number(id))
  return experience
}