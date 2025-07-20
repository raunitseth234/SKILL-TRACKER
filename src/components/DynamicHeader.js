import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, TrendingUp, Target } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const DynamicHeader = ({ userName, skills, user }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Update time and greeting
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const hour = now.getHours();
      if (hour < 12) setGreeting('Good morning');
      else if (hour < 17) setGreeting('Good afternoon');
      else setGreeting('Good evening');
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate stats
  const totalSkills = skills.length;
  const averageScore = totalSkills > 0 ? Math.round(skills.reduce((sum, skill) => sum + skill.skillScore, 0) / totalSkills) : 0;
  const expertSkills = skills.filter(skill => skill.skillScore >= 80).length;
  const needsImprovement = skills.filter(skill => skill.skillScore < 50).length;

  // Trigger animation on mount
  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-200 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mb-8">
        {/* Main greeting */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-2">
            <span className="inline-block transform transition-all duration-500 hover:scale-105">
              {greeting}
            </span>
            {userName && (
              <span className="inline-block ml-2 text-primary-600 transform transition-all duration-500 hover:scale-105">
                , {userName}
              </span>
            )}
            <span className="inline-block ml-2 animate-bounce">👋</span>
          </h1>
          
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Track and visualize your skills to see your progress over time.
            <span className="inline-block ml-2 animate-pulse">✨</span>
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Total Skills */}
          <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target size={24} className="text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-secondary-900 mb-1">
              <AnimatedCounter value={totalSkills} duration={1000} />
            </div>
            <div className="text-sm text-secondary-600">Total Skills</div>
          </div>

          {/* Average Score */}
          <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp size={24} className="text-green-600" />
            </div>
            <div className="text-2xl font-bold text-secondary-900 mb-1">
              <AnimatedCounter value={averageScore} duration={1000} />%
            </div>
            <div className="text-sm text-secondary-600">Average Score</div>
          </div>

          {/* Expert Skills */}
          <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Trophy size={24} className="text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-secondary-900 mb-1">
              <AnimatedCounter value={expertSkills} duration={1000} />
            </div>
            <div className="text-sm text-secondary-600">Expert Level</div>
          </div>

          {/* Needs Improvement */}
          <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Sparkles size={24} className="text-red-600" />
            </div>
            <div className="text-2xl font-bold text-secondary-900 mb-1">
              <AnimatedCounter value={needsImprovement} duration={1000} />
            </div>
            <div className="text-sm text-secondary-600">Need Improvement</div>
          </div>
        </div>

        {/* Progress overview */}
        {totalSkills > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
              <TrendingUp size={20} className="text-primary-600 mr-2" />
              Overall Progress
            </h3>
            
            <div className="space-y-3">
              {/* Overall progress bar */}
              <div>
                <div className="flex justify-between text-sm text-secondary-600 mb-2">
                  <span>Overall Proficiency</span>
                  <span className="font-medium">{averageScore}%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${averageScore}%` }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-white/30 transform -skew-x-12 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Skill distribution */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">
                    {expertSkills > 0 ? Math.round((expertSkills / totalSkills) * 100) : 0}%
                  </div>
                  <div className="text-xs text-secondary-600">Expert</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600">
                    {totalSkills > 0 ? Math.round(((totalSkills - expertSkills - needsImprovement) / totalSkills) * 100) : 0}%
                  </div>
                  <div className="text-xs text-secondary-600">Intermediate</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-600">
                    {needsImprovement > 0 ? Math.round((needsImprovement / totalSkills) * 100) : 0}%
                  </div>
                  <div className="text-xs text-secondary-600">Beginner</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicHeader; 