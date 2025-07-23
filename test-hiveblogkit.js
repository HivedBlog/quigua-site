import { getRecentCommunityPosts } from 'hiveblogkit';

async function testGetRecentCommunityPosts() {
  const communityId = 'hive-169321'; // Example community ID
  const limit = 10;

  console.log(`Fetching recent posts for community: ${communityId}, limit: ${limit}...`);

  try {
    const posts = await getRecentCommunityPosts(communityId, limit, null, null);
    console.log("Raw posts data:", JSON.stringify(posts, null, 2));
  } catch (error) {
    console.error("Error fetching posts from hiveblogkit:", error);
  }
}

testGetRecentCommunityPosts();
