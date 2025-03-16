import { column, defineDb, defineTable } from 'astro:db';

const Experience = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    title: column.text(),
    company: column.text(),
    date: column.text(),
    description: column.text(),
    achievements: column.text(),
    language: column.text(),
  }
})

const Technology = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    name: column.text(),
  }
})


const EntityTags = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    entity_id: column.number(),
    entity_type: column.text(), // project, experience
    tag_id: column.number({
      references: () => Technology.columns.id
    }),
  }
})

const Images = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    project_id: column.number({
      references: () => Project.columns.id
    }),
    url: column.text(),
  }
})

const Project = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    }),
    title: column.text(),
    description: column.text(),
    long_description: column.text(),
    link: column.text(),
    github: column.text(),
    preview: column.text(),
    language: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Experience, Project, EntityTags, Images, Technology },
});
