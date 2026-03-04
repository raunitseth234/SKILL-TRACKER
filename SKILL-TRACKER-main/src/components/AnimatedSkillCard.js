import React, { useState, useEffect } from 'react';
import { TrendingUp, Award, Star, Zap, Target } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import SkillComments from './SkillComments';

const AnimatedSkillCard = ({ skill, onEdit, onDelete, onAddComment, onEditComment, onDeleteComment, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState([]);

  const getScoreColor = (score) => {
    if (score >= 80) return { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200', glow: 'shadow-green-500/50' };
    if (score >= 60) return { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', glow: 'shadow-blue-500/50' };
    if (score >= 40) return { bg: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-200', glow: 'shadow-yellow-500/50' };
    return { bg: 'bg-red-500', text: 'text-red-600', border: 'border-red-200', glow: 'shadow-red-500/50' };
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return { label: 'Expert', icon: Award, color: 'text-green-600 bg-green-100' };
    if (score >= 60) return { label: 'Advanced', icon: Star, color: 'text-blue-600 bg-blue-100' };
    if (score >= 40) return { label: 'Intermediate', icon: TrendingUp, color: 'text-yellow-600 bg-yellow-100' };
    return { label: 'Beginner', icon: Target, color: 'text-red-600 bg-red-100' };
  };

  const colors = getScoreColor(skill.skillScore);
  const levelInfo = getScoreLabel(skill.skillScore);
  const IconComponent = levelInfo.icon;

  // Calculate stroke dasharray for radial progress
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (skill.skillScore / 100) * circumference;

  // Generate particles on hover
  useEffect(() => {
    if (isHovered && !isAnimating) {
      setIsAnimating(true);
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: i * 100,
      }));
      setParticles(newParticles);

      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isHovered, isAnimating]);

  return (
    <div
      className={`
        relative group bg-white rounded-xl shadow-sm border border-secondary-200 p-6 
        hover:shadow-xl transition-all duration-500 ease-out transform
        ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'}
        ${colors.border} hover:${colors.border}
        animate-fade-in
      `}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Particle effects */}
      {isHovered && particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary-400 rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `particle-float 1s ease-out ${particle.delay}ms forwards`,
          }}
        />
      ))}

      {/* Glow effect */}
      <div 
        className={`
          absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : ''}
          ${colors.glow}
        `}
        style={{ filter: 'blur(20px)' }}
      />

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
            <AnimatedCounter value={skill.skillScore} duration={1500} />%
          </span>
        </div>
      </div>

      {/* Skill Header */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
            {skill.skillName}
          </h3>
          <div className="flex items-center space-x-1">
            <IconComponent size={16} className={`${colors.text} transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} />
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelInfo.color} transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
              {levelInfo.label}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-secondary-600 mb-2">
          <span>Progress</span>
          <span className="font-medium">
            <AnimatedCounter value={skill.skillScore} duration={1000} />/100
          </span>
        </div>
        
        <div className="w-full bg-secondary-200 rounded-full h-2 overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ease-out ${colors.bg} relative`}
            style={{ width: `${skill.skillScore}%` }}
          >
            {/* Shimmer effect */}
            <div 
              className={`absolute inset-0 bg-white/30 transform -skew-x-12 transition-transform duration-1000 ${
                isHovered ? 'translate-x-full' : '-translate-x-full'
              }`}
            />
          </div>
        </div>
        
        <div className="flex justify-between text-xs text-secondary-500 mt-1">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`flex space-x-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <button
          onClick={() => onEdit(skill)}
          className="flex-1 bg-primary-50 hover:bg-primary-100 text-primary-600 font-medium py-2 px-3 rounded-lg transition-all duration-200 text-sm transform hover:scale-105 active:scale-95"
        >
          <Zap size={14} className="inline mr-1" />
          Edit
        </button>
        <button
          onClick={() => onDelete(skill.id)}
          className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 px-3 rounded-lg transition-all duration-200 text-sm transform hover:scale-105 active:scale-95"
        >
          Delete
        </button>
      </div>

      {/* Learning Suggestion Badge */}
      {skill.skillScore < 50 && (
        <div className={`mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
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
        <div className={`mt-3 p-2 bg-green-50 border border-green-200 rounded-lg transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          <div className="flex items-center space-x-2">
            <Award size={14} className="text-green-600 animate-bounce" />
            <span className="text-xs text-green-800 font-medium">
              Excellent proficiency level!
            </span>
          </div>
        </div>
      )}

      {/* Comments Section */}
      <SkillComments
        skillId={skill.id}
        skill={skill}
        comments={skill.comments || []}
        onAddComment={onAddComment}
        onEditComment={onEditComment}
        onDeleteComment={onDeleteComment}
      />
    </div>
  );
};

export default AnimatedSkillCard; 