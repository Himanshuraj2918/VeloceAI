import React from 'react';

const ImageOutput = ({ content }) => {
  if (!content?.images) return null;
 
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 
        max-h-[70vh] overflow-y-auto
        p-4 bg-gray-800 rounded-lg
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-700
        [&::-webkit-scrollbar-thumb]:bg-purple-600
        [&::-webkit-scrollbar-thumb]:rounded-full">
        {content.images.map((image) => (
          <div key={image.id} className="relative group">
            <img
              src={image.src}
              alt={image.prompt}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg 
                transition-all duration-300 
                hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            />            
            {/* Hover Overlay with Prompt */}
            <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100
              transition-opacity duration-300 rounded-lg
              flex flex-col justify-end p-3">
              <p className="text-xs text-gray-200 line-clamp-3">
                {image.prompt}
              </p>
              
              {/* View Full Size Button */}
              <button
                onClick={() => window.open(image.src, '_blank')}
                className="mt-2 px-3 py-1 bg-purple-600 text-white text-sm rounded-md
                  hover:bg-purple-700 transition-colors duration-300
                  w-full text-center">
                View Full Size
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageOutput;
