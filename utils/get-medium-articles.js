// utils/get-medium-articles.js
import Parser from 'rss-parser';
import { personalData } from './data/personal-data';

export async function getMediumArticles(limit = 6) {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL(
      `https://medium.com/feed/@${personalData.mediumUsername}`
    );
    return feed.items.slice(0, limit).map((article) => {
      // parse out cover image
      const encodedContent = article["content:encoded"] || article.content;
      const imageMatch = encodedContent?.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imageMatch ? imageMatch[1] : '/blog-placeholder.jpg';

      return {
        title: article.title,
        url: article.link,
        cover_image: imageUrl,
        description: article.contentSnippet?.substring(0, 100) + '...',
        published_at: article.pubDate,
      };
    });
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}
