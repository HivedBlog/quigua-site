import { condenser_api_get_content } from 'hiveblogkit';

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

    const postContent = await condenser_api_get_content(author, permlink);

    return new Response(JSON.stringify(postContent), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in Astro API function get-post-content:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch post content',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
