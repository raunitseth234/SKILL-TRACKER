import React from 'react';
import { TrendingUp, Award, Star } from 'lucide-react';

const SkillBadge = ({ skill, onEdit, onDelete, isEditing = false }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' };
    if (score >= 60) return { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' };
    if (score >= 40) return { bg: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-200' };
    return { bg: 'bg-red-500', text: 'text-red-600', border: 'border-red-200' };
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return { label: 'Expert', icon: Award, color: 'text-green-600 bg-green-100' };
    if (score >= 60) return { label: 'Advanced', icon: Star, color: 'text-blue-600 bg-blue-100' };
    if (score >= 40) return { label: 'Intermediate', icon: TrendingUp, color: 'text-yellow-600 bg-yellow-100' };
    return { label: 'Beginner', icon: TrendingUp, color: 'text-red-600 bg-red-100' };
  };

  const colors = getScoreColor(skill.skillScore);
  const levelInfo = getScoreLabel(skill.skillScore);
  const IconComponent = levelInfo.icon;

  // Calculate stroke dasharray for radial progress
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (skill.skillScore / 100) * circumference;

  return (
    <div className="group relative bg-white rounded-xl shadow-sm border border-secondary-200 p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      {/* Radial Progress Circle */}
      <div className="absolute top-4 right-4">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-secondary-200"
          />
          {/* Progress circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`${colors.text} transition-all duration-1000 ease-out`}
            style={{
              strokeDasharray: strokeDasharray,
              strokeDashoffset: strokeDashoffset
            }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-secondary-700">
            {skill.skillScore}%
          </span>
        </div>
      </div>

      {/* Skill Header */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
            {skill.skillName}
          </h3>
          <div className="flex items-center space-x-1">
            <IconComponent size={16} className={colors.text} />
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelInfo.color}`}>
              {levelInfo.label}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-secondary-600 mb-2">
          <span>Progress</span>
          <span className="font-medium">{skill.skillScore}/100</span>
        </div>
        <div className="w-full bg-secondary-200 rounded-full h-2 overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ease-out ${colors.bg}`}
            style={{ width: `${skill.skillScore}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-secondary-500 mt-1">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={() => onEdit(skill)}
          className="flex-1 bg-primary-50 hover:bg-primary-100 text-primary-600 font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(skill.id)}
          className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
        >
          Delete
        </button>
      </div>

      {/* Learning Suggestion Badge */}
      {skill.skillScore < 50 && (
        <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-yellow-800 font-medium">
              Learning resources available below
            </span>
          </div>
        </div>
      )}

      {/* Success Badge for High Scores */}
      {skill.skillScore >= 80 && (
        <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Award size={14} className="text-green-600" />
            <span className="text-xs text-green-800 font-medium">
              Excellent proficiency level!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillBadge; 