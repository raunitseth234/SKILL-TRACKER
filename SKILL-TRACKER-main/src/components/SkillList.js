import React from 'react';
import { TrendingUp } from 'lucide-react';
import SkillBadge from './SkillBadge';

const SkillList = ({ skills, onEditSkill, onDeleteSkill }) => {

  if (skills.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp size={24} className="text-secondary-400" />
        </div>
        <h3 className="text-lg font-medium text-secondary-900 mb-2">
          No skills added yet
        </h3>
        <p className="text-secondary-600">
          Start tracking your skills by adding your first skill above.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-secondary-900 mb-4">
        Your Skills ({skills.length})
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.id}
            skill={skill}
            onEdit={onEditSkill}
            onDelete={onDeleteSkill}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillList; 