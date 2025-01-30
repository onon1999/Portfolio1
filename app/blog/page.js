// import { personalData } from "@/utils/data/personal-data";
// import BlogCard from "../components/homepage/blog/blog-card";
// import { SiMedium } from "react-icons/si";
// import Parser from 'rss-parser';

// async function getMediumArticles() {
//   const parser = new Parser();
//   try {
//     const feed = await parser.parseURL(
//       `https://medium.com/feed/@${personalData.mediumUsername}`
//     );
//     return feed.items.slice(0, 6);
//   } catch (error) {
//     console.error('Error fetching Medium articles:', error);
//     return [];
//   }
// }

// async function page() {
//   const articles = await getMediumArticles();

//   return (
//     <div className="py-8 px-4 lg:px-0">
//       <div className="flex justify-center my-8 lg:my-12">
//         <div className="flex items-center gap-4">
//           <span className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-600"></span>
//           <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
//             <SiMedium className="text-3xl" />
//             <span>Medium Writings</span>
//           </div>
//           <span className="w-12 h-[2px] bg-gradient-to-r from-purple-600 to-cyan-400"></span>
//         </div>
//       </div>

//       {articles.length === 0 ? (
//         <div className="text-center text-gray-400 py-12">
//           <p className="text-xl mb-4">Articles coming soon...</p>
//           <div className="animate-pulse">
//             <div className="h-48 bg-[#1a1443] rounded-lg mb-4"></div>
//             <div className="h-4 bg-[#1a1443] rounded w-3/4 mx-auto mb-2"></div>
//             <div className="h-4 bg-[#1a1443] rounded w-1/2 mx-auto"></div>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {articles.map((article, i) => {
//             const encodedContent = article["content:encoded"] || article.content;
//             const imageMatch = encodedContent?.match(/<img[^>]+src="([^">]+)"/);
//             const imageUrl = imageMatch ? imageMatch[1] : '/blog-placeholder.jpg';
            
//             return (
//               <BlogCard 
//                 key={i}
//                 blog={{
//                   title: article.title,
//                   url: article.link,
//                   cover_image: imageUrl,
//                   description: article.contentSnippet?.substring(0, 100) + '...',
//                   published_at: article.pubDate
//                 }}
//               />
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default page;


// ............................------------------ added new on top of IoCodeWorkingSharp...................

// app/blog/page.js

import { getMediumArticles } from "@/utils/get-medium-articles";
import BlogCard from "@/app/components/homepage/blog/blog-card";
import { SiMedium } from "react-icons/si";

async function BlogPage() {
  // Fetch the articles (limit 6, for example)
  const articles = await getMediumArticles(6);

  return (
    <div className="py-8 px-4 lg:px-0">
      {/* TITLE */}
      <div className="flex justify-center my-8 lg:my-12">
        <div className="flex items-center gap-4">
          <span className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-600"></span>
          <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
            <SiMedium className="text-3xl" />
            <span>Medium Writings</span>
          </div>
          <span className="w-12 h-[2px] bg-gradient-to-r from-purple-600 to-cyan-400"></span>
        </div>
      </div>

      {/* BLOG GRID OR LOADING MESSAGE */}
      {articles.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          <p className="text-xl mb-4">Articles coming soon...</p>
          <div className="animate-pulse">
            <div className="h-48 bg-[#1a1443] rounded-lg mb-4"></div>
            <div className="h-4 bg-[#1a1443] rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-[#1a1443] rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogPage;
