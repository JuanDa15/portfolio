import { db, EntityTags, Technology } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  // await db.delete(EntityTags).all()
  // TODO
  await db.insert(Technology).values([
    { name: 'React' },
    { name: 'Vue' },
    { name: 'Angular' },
    { name: 'Svelte' },
    { name: 'Next.js' },
    { name: 'Nuxt' },
    { name: 'Astro' },
    { name: 'Tailwind CSS' },
    { name: 'Bootstrap' },
    { name: 'Figma' },
    { name: 'Github' },
    { name: 'AWS' },
    { name: 'Azure' },
    { name: 'Google Cloud' },
  ])
}
