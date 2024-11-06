import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto text-center py-8">
        {/* Gradient Heading with Purple Theme */}
        <h1 className="text-4xl md:text-4xl font-extrabold mb-6
          bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500
          bg-clip-text text-transparent
          drop-shadow-lg">
          VELOCE AI
        </h1>

        {/* Input and Button Container */}
        <div className="max-w-3xl mx-auto mt-12 px-4">
          {/* Textarea Container */}
          <div className="flex flex-col gap-4">
            {/* Input Field - Textarea */}
            <textarea
              placeholder="Enter your prompt here..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 
                text-gray-100 placeholder-gray-400
                border-2 border-gray-700
                focus:border-purple-500 focus:ring-2 focus:ring-purple-500
                focus:outline-none transition-all duration-300
                resize-none"
            />

            {/* Button Container */}
            <div className="flex justify-end">
              {/* Generate Button with Paper Plane Icon */}
              <button
                className="px-6 py-3 rounded-md font-semibold
                  bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500
                  text-white flex items-center gap-2">
                <PaperAirplaneIcon className="h-8 w-10 
                  transform rotate-0 
                  hover:rotate-[360deg] hover:scale-125
                  transition-all duration-500 ease-in-out" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
