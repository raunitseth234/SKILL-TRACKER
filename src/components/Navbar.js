import React from 'react';
import { Sun, Moon, LogIn, LogOut } from 'lucide-react';

const Navbar = ({ userName, user, theme, onThemeToggle, onLoginClick, onLogout }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <h1 className="text-xl font-bold text-secondary-900">
              Skill Score Tracker
            </h1>
          </div>

          {/* User Info and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* User Info */}
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-secondary-600">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="btn-primary flex items-center space-x-2"
              >
                <LogIn size={16} />
                <span>Sign In</span>
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-secondary-600" />
              ) : (
                <Moon size={20} className="text-secondary-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 