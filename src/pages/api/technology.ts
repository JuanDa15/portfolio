import { Technology } from "@/controllers/technology";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    const tags = await Technology.getAll()
    return new Response(JSON.stringify(tags), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
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
  const { name } = await request.json();

  try {
    const resp = await Technology.create({ name })
    return new Response(JSON.stringify({ message: 'Successfully Created' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
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