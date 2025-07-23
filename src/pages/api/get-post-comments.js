import { getPostComments } from 'hiveblogkit';

export async function GET({ request }) {
  try {
    const url = new URL(request.url);
    const author = url.searchParams.get('author');
    const permlink = url.searchParams.get('permlink');

    if (!author || !permlink) {
      return new Response(JSON.stringify({ error: 'author and permlink are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const comments = await getPostComments(author, permlink);

    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in Astro API function get-post-comments:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch post comments',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
