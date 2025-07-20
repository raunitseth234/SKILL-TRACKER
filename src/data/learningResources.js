// Enhanced learning resources with difficulty levels and skill-specific content
export const learningResources = {
  // Programming Languages
  'JavaScript': {
    beginner: [
      {
        title: 'JavaScript Fundamentals',
        type: 'Course',
        platform: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
        description: 'Complete JavaScript fundamentals with interactive exercises',
        duration: '300 hours',
        rating: 4.8,
        tags: ['fundamentals', 'interactive', 'certification']
      },
      {
        title: 'JavaScript for Beginners',
        type: 'Video Course',
        platform: 'YouTube - Programming with Mosh',
        url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        description: 'Comprehensive JavaScript tutorial for absolute beginners',
        duration: '3 hours',
        rating: 4.9,
        tags: ['video', 'beginner-friendly', 'free']
      }
    ],
    intermediate: [
      {
        title: 'Eloquent JavaScript',
        type: 'Book',
        platform: 'Online Book',
        url: 'https://eloquentjavascript.net/',
        description: 'Deep dive into JavaScript concepts and best practices',
        duration: 'Self-paced',
        rating: 4.7,
        tags: ['advanced-concepts', 'free', 'comprehensive']
      },
      {
        title: 'JavaScript: Understanding the Weird Parts',
        type: 'Video Course',
        platform: 'Udemy',
        url: 'https://www.udemy.com/course/understand-javascript/',
        description: 'Advanced JavaScript concepts and internals',
        duration: '12 hours',
        rating: 4.8,
        tags: ['advanced', 'deep-dive', 'paid']
      }
    ],
    advanced: [
      {
        title: 'JavaScript Design Patterns',
        type: 'Course',
        platform: 'Pluralsight',
        url: 'https://www.pluralsight.com/courses/javascript-design-patterns',
        description: 'Master JavaScript design patterns and architecture',
        duration: '6 hours',
        rating: 4.6,
        tags: ['design-patterns', 'architecture', 'advanced']
      }
    ]
  },

  'React': {
    beginner: [
      {
        title: 'React Tutorial',
        type: 'Official Documentation',
        platform: 'React Docs',
        url: 'https://react.dev/learn',
        description: 'Official React tutorial with interactive examples',
        duration: 'Self-paced',
        rating: 4.9,
        tags: ['official', 'interactive', 'free']
      },
      {
        title: 'React for Beginners',
        type: 'Video Course',
        platform: 'YouTube - Net Ninja',
        url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
        description: 'Complete React tutorial for beginners',
        duration: '4 hours',
        rating: 4.8,
        tags: ['video', 'beginner', 'free']
      }
    ],
    intermediate: [
      {
        title: 'React Hooks Deep Dive',
        type: 'Course',
        platform: 'Frontend Masters',
        url: 'https://frontendmasters.com/courses/react-hooks/',
        description: 'Master React Hooks and advanced patterns',
        duration: '5 hours',
        rating: 4.7,
        tags: ['hooks', 'advanced', 'paid']
      }
    ],
    advanced: [
      {
        title: 'Advanced React Patterns',
        type: 'Workshop',
        platform: 'Kent C. Dodds',
        url: 'https://kentcdodds.com/workshops/advanced-react-patterns',
        description: 'Advanced React patterns and performance optimization',
        duration: '8 hours',
        rating: 4.9,
        tags: ['patterns', 'performance', 'expert']
      }
    ]
  },

  'Python': {
    beginner: [
      {
        title: 'Python for Everybody',
        type: 'Course',
        platform: 'Coursera',
        url: 'https://www.coursera.org/specializations/python',
        description: 'Comprehensive Python course for beginners',
        duration: '8 months',
        rating: 4.8,
        tags: ['comprehensive', 'university-level', 'certification']
      },
      {
        title: 'Learn Python',
        type: 'Interactive Tutorial',
        platform: 'Codecademy',
        url: 'https://www.codecademy.com/learn/learn-python-3',
        description: 'Interactive Python learning with hands-on projects',
        duration: '25 hours',
        rating: 4.7,
        tags: ['interactive', 'hands-on', 'free']
      }
    ],
    intermediate: [
      {
        title: 'Python Data Science Handbook',
        type: 'Book',
        platform: 'Jupyter Notebooks',
        url: 'https://jakevdp.github.io/PythonDataScienceHandbook/',
        description: 'Data science with Python using pandas, numpy, and matplotlib',
        duration: 'Self-paced',
        rating: 4.8,
        tags: ['data-science', 'pandas', 'numpy', 'free']
      }
    ],
    advanced: [
      {
        title: 'Advanced Python Programming',
        type: 'Course',
        platform: 'Real Python',
        url: 'https://realpython.com/',
        description: 'Advanced Python concepts and best practices',
        duration: 'Self-paced',
        rating: 4.9,
        tags: ['advanced', 'best-practices', 'comprehensive']
      }
    ]
  },

  'Node.js': {
    beginner: [
      {
        title: 'Node.js Tutorial for Beginners',
        type: 'Video Course',
        platform: 'YouTube - Programming with Mosh',
        url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
        description: 'Complete Node.js tutorial for beginners',
        duration: '2 hours',
        rating: 4.8,
        tags: ['video', 'beginner', 'free']
      }
    ],
    intermediate: [
      {
        title: 'Node.js Design Patterns',
        type: 'Book',
        platform: 'Packt Publishing',
        url: 'https://www.packtpub.com/product/node-js-design-patterns-third-edition/9781785885587',
        description: 'Master Node.js design patterns and best practices',
        duration: 'Self-paced',
        rating: 4.6,
        tags: ['design-patterns', 'architecture', 'paid']
      }
    ],
    advanced: [
      {
        title: 'Node.js Performance Optimization',
        type: 'Workshop',
        platform: 'Node.js Foundation',
        url: 'https://nodejs.org/en/',
        description: 'Advanced Node.js performance and optimization techniques',
        duration: '6 hours',
        rating: 4.7,
        tags: ['performance', 'optimization', 'advanced']
      }
    ]
  },

  'CSS': {
    beginner: [
      {
        title: 'CSS Fundamentals',
        type: 'Course',
        platform: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
        description: 'Complete CSS learning path from MDN',
        duration: 'Self-paced',
        rating: 4.9,
        tags: ['official', 'comprehensive', 'free']
      }
    ],
    intermediate: [
      {
        title: 'CSS Grid and Flexbox',
        type: 'Interactive Course',
        platform: 'CSS-Tricks',
        url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        description: 'Master CSS Grid and Flexbox layouts',
        duration: 'Self-paced',
        rating: 4.8,
        tags: ['layout', 'grid', 'flexbox', 'free']
      }
    ],
    advanced: [
      {
        title: 'Advanced CSS Techniques',
        type: 'Course',
        platform: 'Frontend Masters',
        url: 'https://frontendmasters.com/courses/advanced-css/',
        description: 'Advanced CSS techniques and animations',
        duration: '4 hours',
        rating: 4.7,
        tags: ['advanced', 'animations', 'techniques', 'paid']
      }
    ]
  },

  'HTML': {
    beginner: [
      {
        title: 'HTML Basics',
        type: 'Course',
        platform: 'W3Schools',
        url: 'https://www.w3schools.com/html/',
        description: 'Learn HTML fundamentals with interactive examples',
        duration: 'Self-paced',
        rating: 4.7,
        tags: ['basics', 'interactive', 'free']
      }
    ],
    intermediate: [
      {
        title: 'HTML5 Semantic Elements',
        type: 'Tutorial',
        platform: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics',
        description: 'Master HTML5 semantic elements and accessibility',
        duration: 'Self-paced',
        rating: 4.8,
        tags: ['semantic', 'accessibility', 'html5', 'free']
      }
    ],
    advanced: [
      {
        title: 'Advanced HTML Techniques',
        type: 'Course',
        platform: 'LinkedIn Learning',
        url: 'https://www.linkedin.com/learning/',
        description: 'Advanced HTML techniques and best practices',
        duration: '3 hours',
        rating: 4.6,
        tags: ['advanced', 'best-practices', 'paid']
      }
    ]
  },

  'SQL': {
    beginner: [
      {
        title: 'SQL Fundamentals',
        type: 'Course',
        platform: 'Khan Academy',
        url: 'https://www.khanacademy.org/computing/computer-programming/sql',
        description: 'Learn SQL fundamentals with interactive exercises',
        duration: 'Self-paced',
        rating: 4.8,
        tags: ['fundamentals', 'interactive', 'free']
      }
    ],
    intermediate: [
      {
        title: 'Advanced SQL Queries',
        type: 'Course',
        platform: 'DataCamp',
        url: 'https://www.datacamp.com/courses/intro-to-sql-for-data-science',
        description: 'Advanced SQL queries and data analysis',
        duration: '4 hours',
        rating: 4.7,
        tags: ['advanced', 'data-analysis', 'paid']
      }
    ],
    advanced: [
      {
        title: 'SQL Performance Tuning',
        type: 'Book',
        platform: 'O\'Reilly',
        url: 'https://www.oreilly.com/',
        description: 'SQL performance optimization and tuning techniques',
        duration: 'Self-paced',
        rating: 4.6,
        tags: ['performance', 'optimization', 'advanced', 'paid']
      }
    ]
  },

  'Git': {
    beginner: [
      {
        title: 'Git and GitHub for Beginners',
        type: 'Video Course',
        platform: 'YouTube - freeCodeCamp',
        url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
        description: 'Complete Git and GitHub tutorial for beginners',
        duration: '1 hour',
        rating: 4.8,
        tags: ['video', 'beginner', 'free']
      }
    ],
    intermediate: [
      {
        title: 'Git Branching and Merging',
        type: 'Interactive Tutorial',
        platform: 'GitHub',
        url: 'https://learngitbranching.js.org/',
        description: 'Interactive Git branching and merging tutorial',
        duration: 'Self-paced',
        rating: 4.9,
        tags: ['interactive', 'branching', 'merging', 'free']
      }
    ],
    advanced: [
      {
        title: 'Advanced Git Techniques',
        type: 'Course',
        platform: 'Pluralsight',
        url: 'https://www.pluralsight.com/',
        description: 'Advanced Git techniques and workflows',
        duration: '5 hours',
        rating: 4.7,
        tags: ['advanced', 'workflows', 'paid']
      }
    ]
  },

  'TypeScript': {
    beginner: [
      {
        title: 'TypeScript Handbook',
        type: 'Official Documentation',
        platform: 'TypeScript',
        url: 'https://www.typescriptlang.org/docs/',
        description: 'Official TypeScript documentation and tutorials',
        duration: 'Self-paced',
        rating: 4.9,
        tags: ['official', 'comprehensive', 'free']
      }
    ],
    intermediate: [
      {
        title: 'TypeScript Deep Dive',
        type: 'Book',
        platform: 'GitHub',
        url: 'https://basarat.gitbook.io/typescript/',
        description: 'Deep dive into TypeScript concepts and patterns',
        duration: 'Self-paced',
        rating: 4.8,
        tags: ['deep-dive', 'patterns', 'free']
      }
    ],
    advanced: [
      {
        title: 'Advanced TypeScript Patterns',
        type: 'Course',
        platform: 'Frontend Masters',
        url: 'https://frontendmasters.com/',
        description: 'Advanced TypeScript patterns and techniques',
        duration: '6 hours',
        rating: 4.7,
        tags: ['advanced', 'patterns', 'paid']
      }
    ]
  }
};

// Get difficulty level based on skill score
export const getDifficultyLevel = (score) => {
  if (score >= 80) return 'advanced';
  if (score >= 50) return 'intermediate';
  return 'beginner';
};

// Get personalized learning suggestions based on skill score
export const getLearningSuggestions = (skillName, skillScore) => {
  const skillResources = learningResources[skillName];
  if (!skillResources) {
    return getGenericSuggestions(skillScore);
  }

  const difficulty = getDifficultyLevel(skillScore);
  const suggestions = skillResources[difficulty] || skillResources.beginner || [];

  // Add next level suggestions for motivation
  let nextLevelSuggestions = [];
  if (difficulty === 'beginner' && skillResources.intermediate) {
    nextLevelSuggestions = skillResources.intermediate.slice(0, 2);
  } else if (difficulty === 'intermediate' && skillResources.advanced) {
    nextLevelSuggestions = skillResources.advanced.slice(0, 2);
  }

  return {
    current: suggestions,
    nextLevel: nextLevelSuggestions,
    difficulty,
    skillName
  };
};

// Get generic suggestions when skill is not in database
export const getGenericSuggestions = (skillScore) => {
  const difficulty = getDifficultyLevel(skillScore);
  
  const genericResources = {
    beginner: [
      {
        title: 'Online Learning Platforms',
        type: 'Platforms',
        platform: 'Various',
        url: 'https://www.coursera.org/',
        description: 'Explore courses on Coursera, edX, or Udemy',
        duration: 'Varies',
        rating: 4.5,
        tags: ['platforms', 'various-topics', 'mixed']
      },
      {
        title: 'YouTube Learning',
        type: 'Video Content',
        platform: 'YouTube',
        url: 'https://www.youtube.com/',
        description: 'Search for tutorials and courses on YouTube',
        duration: 'Varies',
        rating: 4.3,
        tags: ['video', 'free', 'various-content']
      }
    ],
    intermediate: [
      {
        title: 'Advanced Online Courses',
        type: 'Courses',
        platform: 'Various',
        url: 'https://www.pluralsight.com/',
        description: 'Explore advanced courses on specialized platforms',
        duration: 'Varies',
        rating: 4.6,
        tags: ['advanced', 'specialized', 'paid']
      }
    ],
    advanced: [
      {
        title: 'Expert-Level Resources',
        type: 'Advanced Content',
        platform: 'Various',
        url: 'https://frontendmasters.com/',
        description: 'Explore expert-level courses and workshops',
        duration: 'Varies',
        rating: 4.7,
        tags: ['expert', 'workshops', 'advanced']
      }
    ]
  };

  return {
    current: genericResources[difficulty] || genericResources.beginner,
    nextLevel: [],
    difficulty,
    skillName: 'General'
  };
};

// Get motivation message based on skill score
export const getMotivationMessage = (skillScore, skillName) => {
  if (skillScore >= 80) {
    return {
      message: `Excellent work on ${skillName}! You're at an expert level. Consider mentoring others or exploring advanced specializations.`,
      type: 'success',
      icon: '🏆'
    };
  } else if (skillScore >= 60) {
    return {
      message: `Great progress with ${skillName}! You're at an intermediate level. Keep practicing to reach expert status.`,
      type: 'info',
      icon: '🚀'
    };
  } else if (skillScore >= 40) {
    return {
      message: `Good start with ${skillName}! You're building a solid foundation. Focus on hands-on practice to improve faster.`,
      type: 'warning',
      icon: '📚'
    };
  } else {
    return {
      message: `Starting your journey with ${skillName}! Begin with fundamentals and build your skills step by step.`,
      type: 'primary',
      icon: '🌟'
    };
  }
};

// Enhanced function to get specific improvement strategies
export const getImprovementStrategy = (skillScore, skillName) => {
  if (skillScore >= 80) {
    return {
      title: 'Mastery Level',
      strategy: 'Focus on advanced topics, contribute to open source, and mentor others.',
      timeEstimate: '2-4 weeks',
      difficulty: 'Advanced',
      focusAreas: ['Advanced concepts', 'System design', 'Performance optimization', 'Mentoring']
    };
  }
  if (skillScore >= 60) {
    return {
      title: 'Advanced Level',
      strategy: 'Work on complex projects, learn advanced patterns, and optimize your code.',
      timeEstimate: '3-6 weeks',
      difficulty: 'Intermediate-Advanced',
      focusAreas: ['Advanced patterns', 'Best practices', 'Code optimization', 'Real-world projects']
    };
  }
  if (skillScore >= 40) {
    return {
      title: 'Intermediate Level',
      strategy: 'Build practical projects, practice regularly, and learn from mistakes.',
      timeEstimate: '4-8 weeks',
      difficulty: 'Intermediate',
      focusAreas: ['Practical projects', 'Regular practice', 'Code review', 'Problem solving']
    };
  }
  return {
    title: 'Beginner Level',
    strategy: 'Start with fundamentals, practice daily, and build simple projects.',
    timeEstimate: '6-12 weeks',
    difficulty: 'Beginner',
    focusAreas: ['Fundamentals', 'Daily practice', 'Simple projects', 'Basic concepts']
  };
};

// Function to get specific action items for improvement
export const getActionItems = (skillScore, skillName) => {
  const actions = [];

  // Skill-specific action items
  if (skillName === 'JavaScript') {
    if (skillScore < 60) {
      actions.push(
        {
          type: 'daily',
          title: 'Practice ES6+ Features',
          description: 'Work with let/const, arrow functions, and template literals.',
          icon: '🆕',
          priority: 'high'
        },
        {
          type: 'project',
          title: 'DOM Manipulation',
          description: 'Build a to-do app or calculator using vanilla JS.',
          icon: '📝',
          priority: 'high'
        },
        {
          type: 'debug',
          title: 'Debugging Skills',
          description: 'Use browser dev tools to debug JavaScript code.',
          icon: '🐞',
          priority: 'medium'
        },
        {
          type: 'community',
          title: 'Join JS Community',
          description: 'Participate in JavaScript forums or Discord servers.',
          icon: '💬',
          priority: 'medium'
        }
      );
    }
    if (skillScore < 40) {
      actions.push(
        {
          type: 'fundamentals',
          title: 'Master Variables & Loops',
          description: 'Focus on variables, loops, and functions basics.',
          icon: '🔤',
          priority: 'critical'
        }
      );
    }
  } else if (skillName === 'Python') {
    if (skillScore < 60) {
      actions.push(
        {
          type: 'daily',
          title: 'Practice with LeetCode',
          description: 'Solve 1-2 Python problems daily on LeetCode.',
          icon: '🧩',
          priority: 'high'
        },
        {
          type: 'project',
          title: 'Data Analysis Mini-Project',
          description: 'Analyze a CSV file using pandas.',
          icon: '📊',
          priority: 'high'
        },
        {
          type: 'automation',
          title: 'Write a Script',
          description: 'Automate a daily task with a Python script.',
          icon: '🤖',
          priority: 'medium'
        },
        {
          type: 'community',
          title: 'Join Python Community',
          description: 'Ask questions on Stack Overflow or join a Python Slack.',
          icon: '💬',
          priority: 'medium'
        }
      );
    }
    if (skillScore < 40) {
      actions.push(
        {
          type: 'fundamentals',
          title: 'Master Syntax & Indentation',
          description: 'Focus on Python syntax and indentation rules.',
          icon: '🔤',
          priority: 'critical'
        }
      );
    }
  } else if (skillName === 'React') {
    if (skillScore < 60) {
      actions.push(
        {
          type: 'daily',
          title: 'Component Practice',
          description: 'Build and refactor functional components.',
          icon: '⚛️',
          priority: 'high'
        },
        {
          type: 'project',
          title: 'Build a React App',
          description: 'Create a simple CRUD app using React hooks.',
          icon: '🛠️',
          priority: 'high'
        },
        {
          type: 'state',
          title: 'State Management',
          description: 'Practice useState and useEffect in small projects.',
          icon: '🔄',
          priority: 'medium'
        },
        {
          type: 'community',
          title: 'Join React Community',
          description: 'Participate in Reactiflux Discord or React forums.',
          icon: '💬',
          priority: 'medium'
        }
      );
    }
    if (skillScore < 40) {
      actions.push(
        {
          type: 'fundamentals',
          title: 'JSX & Props Basics',
          description: 'Focus on JSX syntax and passing props.',
          icon: '🔤',
          priority: 'critical'
        }
      );
    }
  } else {
    // Default/generic action items
    if (skillScore < 60) {
      actions.push(
        {
          type: 'daily',
          title: 'Daily Practice',
          description: `Spend 30-60 minutes daily practicing ${skillName}`,
          icon: '📅',
          priority: 'high'
        },
        {
          type: 'project',
          title: 'Build Projects',
          description: `Create 2-3 small projects using ${skillName}`,
          icon: '🛠️',
          priority: 'high'
        },
        {
          type: 'course',
          title: 'Take a Course',
          description: `Complete a comprehensive ${skillName} course`,
          icon: '📚',
          priority: 'medium'
        },
        {
          type: 'community',
          title: 'Join Community',
          description: `Join ${skillName} communities and forums`,
          icon: '👥',
          priority: 'medium'
        },
        {
          type: 'challenge',
          title: 'Coding Challenges',
          description: `Solve ${skillName} related coding challenges`,
          icon: '🎯',
          priority: 'medium'
        }
      );
    }
    if (skillScore < 40) {
      actions.push(
        {
          type: 'fundamentals',
          title: 'Master Fundamentals',
          description: `Focus on core concepts and basic syntax`,
          icon: '🔤',
          priority: 'critical'
        },
        {
          type: 'tutorial',
          title: 'Follow Tutorials',
          description: `Complete step-by-step tutorials`,
          icon: '📖',
          priority: 'high'
        }
      );
    }
  }
  return actions;
}; 