import React, { useState } from 'react';
import { PaperAirplaneIcon, PhotoIcon } from '@heroicons/react/24/solid';
import { generateResponse } from '../service/gemini';
import OutputModel from '../components/OutputModel';
import ImageOutput from '../components/ImageOutput';
import ImageGenerator from '../service/ImageGenerator';
import ModeToggle from '../components/ModeToggle';

const Home = ({ mode }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    try {
      setIsLoading(true);
      
      if (mode === 'text') {
        const result = await generateResponse(prompt);
        setResponse(result);
        setGeneratedImage(null); // Clear any previous image
      } else {
        const imageUrl = await ImageGenerator(prompt);
        setGeneratedImage(imageUrl);
        setResponse(''); // Clear any previous text response
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while generating the response.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 text-center py-8">
        {/* Add padding-right on larger screens to prevent overlap with toggle button */}
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-400 to-pink-600 
          md:pr-32 mb-8">
          VeloceAI
        </h1>
        
        {/* Input and Button Container */}
        <div className="max-w-3xl mx-auto mt-12 px-4">
          {/* Textarea Container */}
          <div className="flex flex-col gap-4">
            {/* Input Field - Textarea */}
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={mode === 'text' 
                ? "Enter your prompt here..." 
                : "Describe the image you want to generate..."}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 
                text-gray-100 placeholder-gray-400
                border-2 border-gray-700
                focus:border-purple-500 focus:ring-2 focus:ring-purple-500
                focus:outline-none transition-all duration-300
                resize-none"
            />

                       {/* Generate Button with dynamic icon */}
                       <div className="flex justify-end">
              <button
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim()}
                className="px-6 py-3 rounded-md font-semibold
                  bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500
                  text-white
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300">
                {mode === 'text' ? (
                  <PaperAirplaneIcon className="h-8 w-10 
                    transform rotate-0 
                    hover:rotate-[360deg] hover:scale-125
                    transition-all duration-500 ease-in-out" />
                ) : (
                  <PhotoIcon className="h-8 w-10 
                    transform rotate-0 
                    hover:rotate-[360deg] hover:scale-125
                    transition-all duration-500 ease-in-out" />
                )}
              </button>
            </div>
          </div>

          {/* Response Section */}
          {(isLoading || response || generatedImage) && (
            <div className="mt-8 text-left">
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
              ) : mode === 'text' ? (
                <div className="bg-gray-800 rounded-lg p-4 text-gray-100
                  max-h-[100vh] overflow-y-auto
                  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] 
                  [scrollbar-width:none]">
                  <pre className="whitespace-pre-wrap">
                    <OutputModel content={response} />
                  </pre>
                </div>
              ) : (
                <div className="bg-gray-800 rounded-lg p-4 text-gray-100max-h-[100vh]">
                  {generatedImage && <ImageOutput content={generatedImage} />}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <ModeToggle currentMode={mode} />
    </div>
  );
};

export default Home;
