import type { APIRoute } from 'astro';
import { Resend, type CreateEmailOptions } from 'resend';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);

    const name = params.get('name');
    const email = params.get('email');
    const subject = params.get('subject');

    const resend = new Resend('re_fW6reWke_wtCFUEACS3ghDREXMVRSXWwU');
    const emailOptions = {
      from: `${name} <${email}>`,
      subject: 'Interest in Your Portfolio',
      to: ['jdoo1115@gmail.com'],
      text: subject
    } as CreateEmailOptions;

    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};