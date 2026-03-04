import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Target, Award } from 'lucide-react';

const HeroSection = ({ userName, skills, user, onAddSkill, onViewDashboard }) => {
  const [greeting, setGreeting] = useState('');

  // Update greeting
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good morning');
      else if (hour < 17) setGreeting('Good afternoon');
      else setGreeting('Good evening');
    };

    updateGreeting();
    const timer = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Calculate stats
  const totalSkills = skills.length;
  const averageScore = totalSkills > 0 ? Math.round(skills.reduce((sum, skill) => sum + skill.skillScore, 0) / totalSkills) : 0;
  const expertSkills = skills.filter(skill => skill.skillScore >= 80).length;
  const needsImprovement = skills.filter(skill => skill.skillScore < 50).length;

  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient and floating elements */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl floating" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg mb-6">
                <Sparkles size={16} className="text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  Track your skills • Visualize progress • Grow faster
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-gradient">
                  {greeting}
                  {userName && (
                    <span className="block text-4xl md:text-5xl mt-2">
                      , {userName}
                    </span>
                  )}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your skill development with intelligent tracking, 
                <span className="text-gradient font-semibold"> personalized insights</span>, and 
                <span className="text-gradient font-semibold"> actionable recommendations</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={onAddSkill}
                className="btn-primary flex items-center space-x-2 group"
              >
                <span>Start Tracking Skills</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={onViewDashboard}
                className="btn-secondary flex items-center space-x-2"
              >
                <span>View Dashboard</span>
                <TrendingUp size={20} />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Total Skills */}
            <div className="card hover-lift group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse-gentle"></div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {totalSkills}
              </div>
              <div className="text-gray-600 font-medium">Total Skills</div>
              <div className="mt-3 text-sm text-gray-500">
                Tracked and monitored
              </div>
            </div>

            {/* Average Score */}
            <div className="card hover-lift group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 gradient-bg-secondary rounded-xl flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-full animate-pulse-gentle"></div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {averageScore}%
              </div>
              <div className="text-gray-600 font-medium">Average Score</div>
              <div className="mt-3 text-sm text-gray-500">
                Overall proficiency
              </div>
            </div>

            {/* Expert Skills */}
            <div className="card hover-lift group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 gradient-bg-success rounded-xl flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse-gentle"></div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {expertSkills}
              </div>
              <div className="text-gray-600 font-medium">Expert Level</div>
              <div className="mt-3 text-sm text-gray-500">
                Mastered skills
              </div>
            </div>

            {/* Needs Improvement */}
            <div className="card hover-lift group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-600 rounded-full animate-pulse-gentle"></div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {needsImprovement}
              </div>
              <div className="text-gray-600 font-medium">Need Improvement</div>
              <div className="mt-3 text-sm text-gray-500">
                Learning opportunities
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          {totalSkills > 0 && (
            <div className="card max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Your Progress Overview
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Overall Progress</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Overall progress bar */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span className="font-medium">Overall Proficiency</span>
                    <span className="font-bold text-gray-900">{averageScore}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="progress-bar h-3 relative"
                      style={{ width: `${averageScore}%` }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-white/30 transform -skew-x-12 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Skill distribution */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {expertSkills > 0 ? Math.round((expertSkills / totalSkills) * 100) : 0}%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Expert</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {totalSkills > 0 ? Math.round(((totalSkills - expertSkills - needsImprovement) / totalSkills) * 100) : 0}%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Intermediate</div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {needsImprovement > 0 ? Math.round((needsImprovement / totalSkills) * 100) : 0}%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Beginner</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 