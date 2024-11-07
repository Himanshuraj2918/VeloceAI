import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const ModeToggle = ({ currentMode }) => {
  const navigate = useNavigate();

  const toggleMode = () => {
    navigate(currentMode === 'text' ? '/image-generator' : '/');
  };

  return (
    <div className="fixed md:top-4 md:right-4 bottom-4 right-4 z-50">
      <button
        onClick={toggleMode}
        className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg
          bg-purple-600
          text-white
          transition-all duration-300
          border border-white/10
          backdrop-blur-sm"
      >
        {currentMode === 'text' ? (
          <>
            <PhotoIcon className="w-5 h-5" />
            <span className="text-sm font-medium hidden md:inline">Switch to Image</span>
            <span className="text-sm font-medium md:hidden">Image</span>
          </>
        ) : (
          <>
            <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
            <span className="text-sm font-medium hidden md:inline">Switch to Text</span>
            <span className="text-sm font-medium md:hidden">Text</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ModeToggle; 