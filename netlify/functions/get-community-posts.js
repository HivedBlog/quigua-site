import { getRecentCommunityPosts } from 'hiveblogkit';

export default async (event, context) => {
  console.log("Netlify function get-community-posts invoked!");
  console.log("Event object:", event);

  try {
    const url = new URL(event.url);
    const communityId = url.searchParams.get('communityId');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const start_author = url.searchParams.get('start_author') || null;
    const start_permlink = url.searchParams.get('start_permlink') || null;

    if (!communityId) {
      return new Response(JSON.stringify({ error: 'communityId is required' }), {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const posts = await getRecentCommunityPosts(communityId, limit, start_author, start_permlink);

    return new Response(JSON.stringify(posts), {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in get-community-posts function:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch community posts',
      details: error.message
    }), {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
