// src/components/BottomBlog.jsx
import React from 'react';
import PostCard from '../../components/PostCard';
import { bottomBlogData } from '../../data';

const BottomBlog = () => {
  return (
    <div className='flex flex-col align-items-center'>
      <div className='px-56 py-8 text-center'>
        <h6 className='text-[#a98e8e]'>Practice Advice</h6>
        <h3 className="text-2xl font-bold mb-6 text-[#252B42]">Featured Posts</h3>
        <p className='text-[#737373] text-xs md:px-70'>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div>
        <div className="flex flex-col md:flex md:flex-row -mx-4">
          {bottomBlogData.map((post, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-6">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBlog;
