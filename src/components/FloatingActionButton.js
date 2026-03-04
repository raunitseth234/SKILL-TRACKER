import React, { useState } from 'react';
import { Plus, X, Sparkles } from 'lucide-react';

const FloatingActionButton = ({ onClick, isOpen = false, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Background blur effect */}
      <div 
        className={`absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 ${
          isOpen ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
        }`}
      />
      
      {/* Main FAB */}
      <button
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 
          hover:from-primary-600 hover:to-primary-700 
          text-white rounded-full shadow-lg hover:shadow-xl 
          transform transition-all duration-300 ease-out
          ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
          ${isOpen ? 'rotate-45' : ''}
          focus:outline-none focus:ring-4 focus:ring-primary-300
        `}
      >
        {/* Sparkle effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles 
            size={20} 
            className={`transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          />
        </div>
        
        {/* Main icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isOpen ? (
            <X size={24} className="transition-transform duration-300" />
          ) : (
            <Plus size={24} className="transition-transform duration-300" />
          )}
        </div>

        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
      </button>

      {/* Tooltip */}
      <div 
        className={`
          absolute bottom-16 right-0 bg-secondary-900 text-white px-3 py-2 rounded-lg text-sm
          transform transition-all duration-300
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}
      >
        {isOpen ? 'Close' : 'Add New Skill'}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-secondary-900" />
      </div>
    </div>
  );
};

export default FloatingActionButton; 