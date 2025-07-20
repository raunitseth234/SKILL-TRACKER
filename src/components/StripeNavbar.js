import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, User, LogOut, Bell } from 'lucide-react';

const StripeNavbar = ({ userName, user, theme, onThemeToggle, onLoginClick, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-lg backdrop-blur-md' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-gradient">SkillScore</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#dashboard" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                Dashboard
              </a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                Skills
              </a>
              <a href="#analytics" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                Analytics
              </a>
              <a href="#resources" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                Resources
              </a>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-gray-700" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>

              {/* Notifications */}
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 relative">
                <Bell size={20} className="text-gray-700" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">
                      {userName || user.name}
                    </span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <LogOut size={16} className="text-gray-700" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="btn-primary text-sm"
                >
                  Sign In
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="text-gray-700" />
                ) : (
                  <Menu size={20} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass border-t border-gray-200/50">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#dashboard" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </a>
              <a 
                href="#skills" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#analytics" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Analytics
              </a>
              <a 
                href="#resources" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </a>
              
              {user && (
                <div className="pt-4 border-t border-gray-200/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                      <User size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{userName || user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-2 text-gray-700 hover:text-gray-900 py-2 transition-colors duration-200"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default StripeNavbar; 