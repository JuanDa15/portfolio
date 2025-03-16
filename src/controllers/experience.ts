import { db, eq, Experience as ExperienceModel, EntityTags, Technology, like } from "astro:db";

export class Experience {
  static async getAll({ language }: {
    language: string
  }) {
    const data = await db.select().from(ExperienceModel).where(eq(ExperienceModel.language, language))
    const mappedTags = {} as any;

    for (const experience of data) {
      const id = experience.id;
      console.log(await db.select().from(EntityTags))

      const dbTags = await db.select({ name: Technology.name, id: EntityTags.id })
        .from(EntityTags)
        .where(eq(EntityTags.entity_id, id))
        .fullJoin(Technology, eq(EntityTags.tag_id, Technology.id))

      mappedTags[id] = dbTags
    }

    const newData = data.map(experience => {
      return {
        ...experience,
        tags: mappedTags[experience.id]
      }
    })
    return newData
  }

  static async create({ tags = [], ...others }: any) {

    const experience = await db.insert(ExperienceModel).values({
      ...others
    }).returning();

    for (const tag of tags) {
      const dbTag = await db.select().from(Technology).where(eq(Technology.id, tag))

      if (dbTag.length === 0) return;

      await db.insert(EntityTags).values({
        entity_id: experience[0].id,
        entity_type: 'experience',
        tag_id: dbTag[0].id
      })
    }

    const dbTags = await db.select({ name: Technology.name, id: EntityTags.id })
      .from(EntityTags)
      .where(eq(EntityTags.entity_id, experience[0].id))
      .innerJoin(Technology, eq(EntityTags.tag_id, Technology.id))

    return {
      ...experience[0],
      tags: dbTags
    }
  }

  static async delete({ id }: { id: number }) {
    const experience = await db.select().from(ExperienceModel).where(eq(ExperienceModel.id, id))
    if (experience.length === 0) return { error: 'Experience not found' };

    await db.delete(EntityTags).where(eq(EntityTags.entity_id, id))
    await db.delete(ExperienceModel).where(eq(ExperienceModel.id, id))
    return { message: 'Experience deleted' }
  }
}