import { Project } from "@/controllers/project";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const language = request.headers.get('language') || 'en';

  try {
    const projects = await Project.getAll({ language })

    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
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
    const resp = await Project.create(body)

    return new Response(JSON.stringify(resp), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error)
  }

  return new Response('{ message: "Hola" }', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}