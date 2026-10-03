import { useState } from 'react';

export default function Feed() {
  const [posts, setPosts] = useState([
    { 
      _id: '1', 
      image: 'https://images.unsplash.com/photo-1506744626753-eda8151a747b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      caption: 'Testing the minimal feed layout.' 
    },
    { 
      _id: '2', 
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      caption: 'Clean, simple, and beautiful.' 
    }
  ]);

  return (
    <div className="flex flex-col gap-8 max-w-md mx-auto">
      {posts.map((post) => (
        <div 
          key={post._id} 
          className="bg-white rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
        >
          {/* Post Image */}
          <div className="w-full h-80 bg-gray-100">
            <img
              src={post.image}
              alt="User Upload"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Post Caption */}
          <div className="p-6 bg-white">
            <p className="text-black text-base font-medium leading-relaxed">
              {post.caption}
            </p>
          </div>
        </div>
      ))}

      {posts.length === 0 && (
        <p className="text-center text-gray-400 mt-10 font-medium">No posts available yet.</p>
      )}
    </div>
  );
}