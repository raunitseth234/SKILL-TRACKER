import React, { useState } from 'react';
import { BookOpen, ExternalLink, Star, Clock, TrendingUp, Target, Award } from 'lucide-react';
import { getLearningSuggestions, getMotivationMessage, getImprovementStrategy, getActionItems } from '../data/learningResources';

const LearningSuggestions = ({ skills, threshold = 60 }) => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // Get skills that need improvement
  const skillsNeedingImprovement = skills.filter(skill => skill.skillScore < threshold);
  
  // Get all learning suggestions
  const allSuggestions = skillsNeedingImprovement.map(skill => ({
    ...skill,
    suggestions: getLearningSuggestions(skill.skillName, skill.skillScore),
    motivation: getMotivationMessage(skill.skillScore, skill.skillName),
    strategy: getImprovementStrategy(skill.skillScore, skill.skillName),
    actionItems: getActionItems(skill.skillScore, skill.skillName)
  }));

  // Filter by difficulty if selected
  const filteredSuggestions = selectedDifficulty === 'all' 
    ? allSuggestions 
    : allSuggestions.filter(item => item.suggestions.difficulty === selectedDifficulty);

  if (skillsNeedingImprovement.length === 0) {
    return (
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-secondary-900">
            Learning Suggestions
          </h3>
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Award size={16} className="text-green-600" />
          </div>
        </div>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp size={24} className="text-green-600" />
          </div>
          <h4 className="text-lg font-medium text-secondary-900 mb-2">
            Great job! 🎉
          </h4>
          <p className="text-secondary-600">
            All your skills are above the {threshold}% threshold. Keep up the excellent work!
          </p>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-secondary-100 text-secondary-800 border-secondary-200';
    }
  };

  const getMotivationColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200 text-green-800';
      case 'info': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'warning': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'primary': return 'bg-primary-50 border-primary-200 text-primary-800';
      default: return 'bg-secondary-50 border-secondary-200 text-secondary-800';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <BookOpen size={20} className="text-primary-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary-900">
              Learning Suggestions
            </h3>
            <p className="text-sm text-secondary-600">
              Personalized resources for skills below {threshold}%
            </p>
          </div>
        </div>
        
        {/* Difficulty Filter */}
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedDifficulty('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
              selectedDifficulty === 'all' 
                ? 'bg-primary-100 text-primary-800 border-primary-300' 
                : 'bg-secondary-100 text-secondary-600 border-secondary-200 hover:bg-secondary-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedDifficulty('beginner')}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
              selectedDifficulty === 'beginner' 
                ? 'bg-blue-100 text-blue-800 border-blue-300' 
                : 'bg-secondary-100 text-secondary-600 border-secondary-200 hover:bg-secondary-200'
            }`}
          >
            Beginner
          </button>
          <button
            onClick={() => setSelectedDifficulty('intermediate')}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
              selectedDifficulty === 'intermediate' 
                ? 'bg-yellow-100 text-yellow-800 border-yellow-300' 
                : 'bg-secondary-100 text-secondary-600 border-secondary-200 hover:bg-secondary-200'
            }`}
          >
            Intermediate
          </button>
          <button
            onClick={() => setSelectedDifficulty('advanced')}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${
              selectedDifficulty === 'advanced' 
                ? 'bg-green-100 text-green-800 border-green-300' 
                : 'bg-secondary-100 text-secondary-600 border-secondary-200 hover:bg-secondary-200'
            }`}
          >
            Advanced
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredSuggestions.map((skill) => (
          <div key={skill.id} className="border border-secondary-200 rounded-lg overflow-hidden">
            {/* Skill Header */}
            <div 
              className="p-4 bg-secondary-50 cursor-pointer hover:bg-secondary-100 transition-colors duration-200"
              onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Target size={16} className="text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">{skill.skillName}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-secondary-600">
                        Score: {skill.skillScore}%
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(skill.suggestions.difficulty)}`}>
                        {skill.suggestions.difficulty.charAt(0).toUpperCase() + skill.suggestions.difficulty.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-secondary-500">
                    {skill.suggestions.current.length} resources
                  </span>
                  <div className={`transform transition-transform duration-200 ${
                    expandedSkill === skill.id ? 'rotate-180' : ''
                  }`}>
                    <TrendingUp size={16} className="text-secondary-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Motivation Message */}
            <div className={`px-4 py-3 border-t border-secondary-200 ${getMotivationColor(skill.motivation.type)}`}>
              <div className="flex items-center space-x-2">
                <span className="text-lg">{skill.motivation.icon}</span>
                <p className="text-sm font-medium">{skill.motivation.message}</p>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedSkill === skill.id && (
              <div className="p-4 bg-white">
                {/* Improvement Strategy */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h5 className="font-medium text-secondary-900 mb-3 flex items-center">
                    <Target size={16} className="mr-2 text-blue-600" />
                    Improvement Strategy
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-800">{skill.strategy.title}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {skill.strategy.timeEstimate}
                      </span>
                    </div>
                    <p className="text-sm text-blue-700">{skill.strategy.strategy}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.strategy.focusAreas.map((area, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Items */}
                {skill.actionItems.length > 0 && (
                  <div className="mb-6">
                    <h5 className="font-medium text-secondary-900 mb-3 flex items-center">
                      <Award size={16} className="mr-2 text-green-600" />
                      Action Items for Improvement
                    </h5>
                    <div className="grid gap-3">
                      {skill.actionItems.map((action, index) => (
                        <ActionItemCard key={index} action={action} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Current Level Resources */}
                <div className="mb-6">
                  <h5 className="font-medium text-secondary-900 mb-3 flex items-center">
                    <BookOpen size={16} className="mr-2 text-primary-600" />
                    Recommended for your current level
                  </h5>
                  <div className="grid gap-3">
                    {skill.suggestions.current.map((resource, index) => (
                      <ResourceCard key={index} resource={resource} />
                    ))}
                  </div>
                </div>

                {/* Next Level Resources */}
                {skill.suggestions.nextLevel.length > 0 && (
                  <div>
                    <h5 className="font-medium text-secondary-900 mb-3 flex items-center">
                      <TrendingUp size={16} className="mr-2 text-green-600" />
                      Next level resources (for motivation)
                    </h5>
                    <div className="grid gap-3">
                      {skill.suggestions.nextLevel.map((resource, index) => (
                        <ResourceCard key={index} resource={resource} isNextLevel />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-secondary-900">
              {skillsNeedingImprovement.length}
            </div>
            <div className="text-sm text-secondary-600">Skills to improve</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600">
              {allSuggestions.reduce((sum, skill) => sum + skill.suggestions.current.length, 0)}
            </div>
            <div className="text-sm text-secondary-600">Total resources</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {Math.round(skillsNeedingImprovement.reduce((sum, skill) => sum + skill.skillScore, 0) / skillsNeedingImprovement.length)}%
            </div>
            <div className="text-sm text-secondary-600">Average score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Resource Card Component
const ResourceCard = ({ resource, isNextLevel = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'course': return 'bg-blue-100 text-blue-800';
      case 'video course': return 'bg-purple-100 text-purple-800';
      case 'book': return 'bg-green-100 text-green-800';
      case 'documentation': return 'bg-orange-100 text-orange-800';
      case 'tutorial': return 'bg-pink-100 text-pink-800';
      case 'workshop': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-secondary-100 text-secondary-800';
    }
  };

  const getPlatformColor = (platform) => {
    if (platform.toLowerCase().includes('free') || platform.toLowerCase().includes('youtube')) {
      return 'text-green-600';
    }
    if (platform.toLowerCase().includes('paid') || platform.toLowerCase().includes('udemy')) {
      return 'text-blue-600';
    }
    return 'text-secondary-600';
  };

  return (
    <div
      className={`border border-secondary-200 rounded-lg p-4 transition-all duration-200 ${
        isHovered ? 'shadow-md transform -translate-y-1' : 'shadow-sm'
      } ${isNextLevel ? 'bg-gradient-to-r from-green-50 to-blue-50 border-green-200' : 'bg-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h6 className="font-medium text-secondary-900 mb-1 line-clamp-2">
            {resource.title}
          </h6>
          <p className="text-sm text-secondary-600 mb-2 line-clamp-2">
            {resource.description}
          </p>
        </div>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 p-2 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors duration-200"
        >
          <ExternalLink size={16} className="text-primary-600" />
        </a>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
            {resource.type}
          </span>
          <span className={`text-xs font-medium ${getPlatformColor(resource.platform)}`}>
            {resource.platform}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Star size={12} className="text-yellow-500 fill-current" />
          <span className="text-xs text-secondary-600">{resource.rating}</span>
        </div>
      </div>

      {/* Remove the YouTube button if YouTube link exists */}
      {/* (No YouTube button here anymore) */}
      {/* Keep the main resource button/link as is */}

      <div className="flex items-center justify-between text-xs text-secondary-500">
        <div className="flex items-center space-x-2">
          <Clock size={12} />
          <span>{resource.duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          {resource.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-1 py-0.5 bg-secondary-100 rounded text-xs">
              {tag}
            </span>
          ))}
          {resource.tags.length > 2 && (
            <span className="text-xs">+{resource.tags.length - 2}</span>
          )}
        </div>
      </div>
    </div>
  );
};

// Action Item Card Component
const ActionItemCard = ({ action }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'critical': return '🚨';
      case 'high': return '⚡';
      case 'medium': return '📋';
      default: return '📝';
    }
  };

  return (
    <div className="border border-secondary-200 rounded-lg p-4 bg-white hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{action.icon}</span>
          <h6 className="font-medium text-secondary-900">{action.title}</h6>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(action.priority)}`}>
          {getPriorityIcon(action.priority)} {action.priority}
        </span>
      </div>
      <p className="text-sm text-secondary-600">{action.description}</p>
    </div>
  );
};

export default LearningSuggestions; 