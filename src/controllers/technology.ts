import { db, Technology as TechnologyModel } from "astro:db";

export class Technology {
  static async getAll() {
    const data = await db.select().from(TechnologyModel).all();
    return data
  }

  static async create({ name }: { name: string }) {
    const response = await db.insert(TechnologyModel).values({
      name: name
    })
    return response.toJSON()
  }
}