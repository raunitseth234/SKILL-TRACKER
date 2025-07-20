import React, { useState, useEffect } from 'react';
import { X, Plus, Edit, Zap } from 'lucide-react';

const SkillForm = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  skill = null, 
  isEditing = false 
}) => {
  const [formData, setFormData] = useState({
    skillName: '',
    skillScore: 50
  });
  const [errors, setErrors] = useState({});

  // Initialize form data when editing
  useEffect(() => {
    if (skill && isEditing) {
      setFormData({
        skillName: skill.skillName,
        skillScore: skill.skillScore
      });
    } else {
      setFormData({
        skillName: '',
        skillScore: 50
      });
    }
    setErrors({});
  }, [skill, isEditing, isOpen]);

  const validateForm = () => {
    const newErrors = {};

    // Validate skill name
    if (!formData.skillName.trim()) {
      newErrors.skillName = 'Skill name is required';
    } else if (formData.skillName.trim().length < 2) {
      newErrors.skillName = 'Skill name must be at least 2 characters';
    } else if (formData.skillName.trim().length > 50) {
      newErrors.skillName = 'Skill name must be less than 50 characters';
    }

    // Validate skill score
    if (formData.skillScore < 0 || formData.skillScore > 100) {
      newErrors.skillScore = 'Skill score must be between 0 and 100';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const skillData = {
        id: skill?.id || Date.now().toString(),
        skillName: formData.skillName.trim(),
        skillScore: parseInt(formData.skillScore)
      };
      
      onSubmit(skillData);
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
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
                <Zap size={20} className="text-primary-600" />
              </div>
              <h2 className="text-xl font-semibold text-secondary-900">
                {isEditing ? 'Edit Skill' : 'Add New Skill'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-secondary-100 transition-all duration-200 transform hover:scale-110"
            >
              <X size={20} className="text-secondary-500" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Skill Name Input */}
            <div>
              <label htmlFor="skillName" className="block text-sm font-medium text-secondary-700 mb-2">
                Skill Name
              </label>
              <input
                type="text"
                id="skillName"
                name="skillName"
                value={formData.skillName}
                onChange={handleInputChange}
                className={`input-field ${errors.skillName ? 'border-red-500 focus:ring-red-500' : ''}`}
                placeholder="e.g., JavaScript, React, Python"
                maxLength={50}
              />
              {errors.skillName && (
                <p className="mt-1 text-sm text-red-600">{errors.skillName}</p>
              )}
            </div>

            {/* Skill Score Input */}
            <div>
              <label htmlFor="skillScore" className="block text-sm font-medium text-secondary-700 mb-2">
                Skill Score: {formData.skillScore}/100
              </label>
              <input
                type="range"
                id="skillScore"
                name="skillScore"
                min="0"
                max="100"
                value={formData.skillScore}
                onChange={handleInputChange}
                className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-secondary-500 mt-1">
                <span>Beginner (0)</span>
                <span>Expert (100)</span>
              </div>
              {errors.skillScore && (
                <p className="mt-1 text-sm text-red-600">{errors.skillScore}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary flex-1 transform transition-all duration-200 hover:scale-105"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary flex-1 flex items-center justify-center space-x-2 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                {isEditing ? (
                  <>
                    <Edit size={16} />
                    <span>Update Skill</span>
                  </>
                ) : (
                  <>
                    <Plus size={16} />
                    <span>Add Skill</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillForm; 