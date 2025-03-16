import { db, EntityTags, eq, Images, Project as ProjectModel, Technology } from "astro:db";

export class Project {
  static async getAll({ language }: { language: string }) {
    const projects = await db.select().from(ProjectModel).where(eq(ProjectModel.language, language))

    const tags = {} as any;
    const images = {} as any;

    for (const project of projects) {
      const id = project.id;

      const dbTags = await db.select({ name: Technology.name, id: EntityTags.id })
        .from(EntityTags)
        .where(eq(EntityTags.entity_id, id))
        .fullJoin(Technology, eq(EntityTags.tag_id, Technology.id))

      const dbImages = await db.select({ url: Images.url, id: Images.id })
        .from(Images)
        .where(eq(Images.project_id, id))

      tags[id] = dbTags
      images[id] = dbImages
    }

    const processedData = projects.map(project => {
      return {
        ...project,
        tags: tags[project.id],
        images: images[project.id]
      }
    })

    return processedData
  }

  static async create({ tags = [], images = [], ...others }: any) {
    const project = await db.insert(ProjectModel).values({
      ...others
    }).returning()

    for (const tag of tags) {
      const dbTag = await db.select().from(Technology).where(eq(Technology.id, tag))

      if (dbTag.length === 0) return;

      await db.insert(EntityTags).values({
        entity_id: project[0].id,
        entity_type: 'project',
        tag_id: dbTag[0].id
      })
    }

    for (const image of images) {
      await db.insert(Images).values({
        project_id: project[0].id,
        url: image
      })
    }

    const dbTags = await db.select({ name: Technology.name, id: EntityTags.id })
      .from(EntityTags)
      .where(eq(EntityTags.entity_id, project[0].id))
      .innerJoin(Technology, eq(EntityTags.tag_id, Technology.id))

    const dbImages = await db.select({ url: Images.url, id: Images.id })
      .from(Images)
      .where(eq(Images.project_id, project[0].id))

    return {
      ...project[0],
      tags: dbTags,
      images: dbImages
    }
  }

  static async delete({ id }: { id: number }) {
    const project = await db.select().from(ProjectModel).where(eq(ProjectModel.id, id))

    if (project.length === 0) return { message: 'Project not found' }

    await db.delete(ProjectModel).where(eq(ProjectModel.id, id))
    await db.delete(EntityTags).where(eq(EntityTags.entity_id, id))
    await db.delete(Images).where(eq(Images.project_id, id))

    return { message: 'Project deleted' }
  }
}