// // @flow strict
// import { timeConverter } from '@/utils/time-converter';
// import Image from 'next/image';
// import Link from 'next/link';
// import { BsHeartFill } from 'react-icons/bs';
// import { FaCommentAlt } from 'react-icons/fa';

// function BlogCard({ blog }) {
//   return (
//     <div className="relative group bg-[#0d1224]/50 backdrop-blur-sm border border-cyan-900 rounded-xl hover:border-cyan-400 transition-all duration-300 h-full">
//       <Link href={blog.url} target="_blank" className="block h-full">
//         <div className="p-6 h-full flex flex-col">
//           <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
//             <Image
//               src={blog.cover_image}
//               alt={blog.title}
//               fill
//               className="object-cover group-hover:scale-105 transition-transform"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-cyan-300 mb-2">
//             {blog.title}
//           </h3>
//           <p className="text-gray-400 text-sm mb-4 flex-1">
//             {blog.description}
//           </p>
//           <div className="flex items-center justify-between text-sm text-cyan-400">
//             <span>{new Date(blog.published_at).toLocaleDateString()}</span>
//             <span>Read →</span>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }
// export default BlogCard;





// --------------------------------------Wokring on new--------------------

// app/components/homepage/blog/blog-card.jsx

import Image from 'next/image';
import Link from 'next/link';

function BlogCard({ blog }) {
  const {
    title = 'No Title',
    url = '#',
    cover_image = '/blog-placeholder.jpg',
    description = '',
    published_at,
  } = blog || {};

  // Gracefully handle date
  const dateString = published_at
    ? new Date(published_at).toLocaleDateString()
    : 'No date';

  return (
    <div className="relative group bg-[#0d1224]/50 backdrop-blur-sm border border-cyan-900 rounded-xl hover:border-cyan-400 transition-all duration-300 h-full">
      <Link href={url} target="_blank" className="block h-full">
        <div className="p-6 h-full flex flex-col">
          {/* IMAGE */}
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
            <Image
              src={cover_image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm mb-4 flex-1">
            {description || 'No description...'}
          </p>

          {/* FOOTER (DATE + READ MORE) */}
          <div className="flex items-center justify-between text-sm text-cyan-400">
            <span>{dateString}</span>
            <span>Read &rarr;</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
