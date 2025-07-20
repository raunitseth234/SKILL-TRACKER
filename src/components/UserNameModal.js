import React, { useState } from 'react';
import { User, X } from 'lucide-react';

const UserNameModal = ({ isOpen, onClose, onSave, currentName = '' }) => {
  const [userName, setUserName] = useState(currentName);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedName = userName.trim();
    
    if (!trimmedName) {
      setError('Please enter your name');
      return;
    }
    
    if (trimmedName.length < 2) {
      setError('Name must be at least 2 characters long');
      return;
    }
    
    if (trimmedName.length > 50) {
      setError('Name must be less than 50 characters');
      return;
    }
    
    onSave(trimmedName);
    onClose();
  };

  const handleInputChange = (e) => {
    setUserName(e.target.value);
    if (error) {
      setError('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <User size={20} className="text-primary-600" />
              </div>
              <h2 className="text-xl font-semibold text-secondary-900">
                Welcome to Skill Score Tracker
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            >
              <X size={20} className="text-secondary-500" />
            </button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-secondary-600 mb-4">
              Let's personalize your skill tracking experience. What should we call you?
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-secondary-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={handleInputChange}
                  className={`input-field ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="Enter your name"
                  maxLength={50}
                  autoFocus
                />
                {error && (
                  <p className="mt-1 text-sm text-red-600">{error}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-secondary flex-1"
                >
                  Skip for now
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  Save Name
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="text-xs text-secondary-500 text-center">
            You can change this later in the settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNameModal; 