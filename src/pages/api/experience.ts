import { Experience } from "@/controllers/experience";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const language = request.headers.get('language') || 'en';

  try {
    const data = await Experience.getAll({ language })
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: JSON.stringify(error) }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }


}

export const POST: APIRoute = async ({ request }) => {

  const body = await request.json();

  try {
    const experience = {
      ...body,
      achievements: body.achievements.join(', ')
    }
    const resp = await Experience.create(experience)

    return new Response(JSON.stringify(resp), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: JSON.stringify(error) }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}