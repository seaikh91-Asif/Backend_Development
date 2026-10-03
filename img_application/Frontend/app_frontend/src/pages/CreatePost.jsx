import { useState } from 'react';

export default function CreatePost() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Image:', image);
    console.log('Caption:', caption);
    alert('Backend integration baki ache!');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-[3xl] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-black">Upload Media</h2>
        <p className="text-sm text-gray-400 mt-1">Share your moments</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        {/* Minimal Image Input */}
        <div className="flex flex-col gap-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full text-sm text-gray-500
              file:mr-4 file:py-3 file:px-6
              file:rounded-2xl file:border-0
              file:text-sm file:font-semibold
              file:bg-black file:text-white
              hover:file:bg-gray-800 file:cursor-pointer file:transition-all
              bg-[#f2f2f7] rounded-2xl p-2 cursor-pointer"
            required
          />
        </div>

        {/* Minimal Caption Input */}
        <div className="flex flex-col gap-2">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows="4"
            className="w-full p-5 rounded-2xl bg-[#f2f2f7] text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 resize-none transition-all"
            placeholder="Write a caption..."
            required
          ></textarea>
        </div>

        {/* Solid Black Button */}
        <button
          type="submit"
          className="mt-2 w-full bg-black text-white font-semibold text-lg py-4 rounded-2xl shadow-lg hover:bg-gray-900 transition-all active:scale-95"
        >
          Upload
        </button>
      </form>
    </div>
  );
}