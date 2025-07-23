import { getRecentCommunityPosts } from 'hiveblogkit';

export async function GET({ request }) {
  console.log("API function get-community-posts invoked!");
  console.log("Request URL:", request.url);

  try {
    const url = new URL(request.url);
    const communityId = url.searchParams.get('communityId');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const start_author = url.searchParams.get('start_author') || null;
    const start_permlink = url.searchParams.get('start_permlink') || null;

    if (!communityId) {
      return new Response(JSON.stringify({ error: 'communityId is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const posts = await getRecentCommunityPosts(communityId, limit, start_author, start_permlink);

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in Astro API function get-community-posts:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch community posts',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
