// BACKUP of commentSuggestions.js
// Created automatically for backup purposes

// Dynamic comment suggestions based on skill performance and results
export const getCommentSuggestions = (skill, previousScore = null) => {
  const { skillName, skillScore } = skill;
  const suggestions = [];

  // Performance-based comments
  if (skillScore >= 90) {
    suggestions.push(
      `🏆 Master level achieved in ${skillName}! You're among the top 5% of developers.`,
      `💎 Exceptional expertise in ${skillName}. Consider mentoring others or contributing to open source.`,
      `⭐ Elite performance in ${skillName}! You could write a book or create advanced tutorials.`,
      `🎯 Perfect score territory! Your ${skillName} skills are industry-leading.`,
      `🚀 Phenomenal work on ${skillName}! You're ready for senior/lead positions.`
    );
  } else if (skillScore >= 80) {
    suggestions.push(
      `🌟 Excellent progress in ${skillName}! You're at expert level.`,
      `💪 Strong command of ${skillName}. Ready for advanced projects and challenges.`,
      `🎖️ Great job reaching expert level in ${skillName}!`,
      `🔥 Hot skills! Your ${skillName} proficiency is impressive.`,
      `⚡ Expert-level ${skillName} skills! Consider specializing further.`
    );
  } else if (skillScore >= 70) {
    suggestions.push(
      `📈 Solid intermediate-advanced level in ${skillName}. Keep pushing forward!`,
      `🎯 Good progress! Your ${skillName} skills are above average.`,
      `💡 Strong foundation in ${skillName}. Ready for more complex challenges.`,
      `🔧 Competent ${skillName} developer. Focus on advanced concepts next.`,
      `📊 Above-average performance in ${skillName}. Great potential!`
    );
  } else if (skillScore >= 60) {
    suggestions.push(
      `✅ Intermediate level achieved in ${skillName}. Good foundation!`,
      `🎓 Solid progress in ${skillName}. Ready for intermediate projects.`,
      `📚 Good understanding of ${skillName} fundamentals.`,
      `🔨 Competent ${skillName} skills. Time to tackle more complex problems.`,
      `📈 Making steady progress in ${skillName}. Keep it up!`
    );
  } else if (skillScore >= 50) {
    suggestions.push(
      `🔄 Getting there with ${skillName}! Focus on hands-on practice.`,
      `📖 Building a solid foundation in ${skillName}. Practice makes perfect!`,
      `🎯 Making progress in ${skillName}. Consider more practical projects.`,
      `💪 Developing ${skillName} skills steadily. Keep practicing!`,
      `🔧 Basic ${skillName} skills acquired. Ready for intermediate learning.`
    );
  } else if (skillScore >= 40) {
    suggestions.push(
      `🌱 Early stages of ${skillName} learning. Every expert was once a beginner!`,
      `📝 Learning ${skillName} basics. Focus on fundamentals first.`,
      `🎯 Starting your ${skillName} journey. Take it step by step!`,
      `📚 Building ${skillName} foundation. Practice regularly!`,
      `🔰 Beginner level in ${skillName}. Keep learning and practicing!`
    );
  } else {
    suggestions.push(
      `🚀 Just starting with ${skillName}! Every journey begins with the first step.`,
      `📖 Learning ${skillName} from scratch. Don\'t rush, build a strong foundation!`,
      `🎯 New to ${skillName}? Focus on basics and practice daily.`,
      `🌱 Planting the seeds of ${skillName} knowledge. Water them with practice!`,
      `📝 Beginning your ${skillName} adventure. Take it one concept at a time!`
    );
  }

  // Progress-based comments (if previous score exists)
  if (previousScore !== null) {
    const improvement = skillScore - previousScore;
    if (improvement > 10) {
      suggestions.push(
        `🚀 Massive improvement in ${skillName}! Jumped from ${previousScore}% to ${skillScore}%!`,
        `📈 Incredible progress! Your ${skillName} skills improved by ${improvement} points!`,
        `🎉 Outstanding growth in ${skillName}! That\'s ${improvement}% improvement!`,
        `⚡ Rapid advancement in ${skillName}! Keep this momentum going!`,
        `🔥 Hot streak! ${improvement}% improvement in ${skillName} is impressive!`
      );
    } else if (improvement > 5) {
      suggestions.push(
        `📊 Good progress in ${skillName}! Improved by ${improvement} points.`,
        `✅ Steady improvement in ${skillName}. From ${previousScore}% to ${skillScore}%.`,
        `🎯 Nice growth in ${skillName}! ${improvement}% improvement shows dedication.`,
        `📈 Moving forward with ${skillName}! ${improvement} points gained.`,
        `💪 Solid progress in ${skillName}! Keep up the good work!`
      );
    } else if (improvement > 0) {
      suggestions.push(
        `📝 Small but steady progress in ${skillName}. Every point counts!`,
        `🎯 Incremental improvement in ${skillName}. Slow and steady wins the race!`,
        `📊 Minor progress in ${skillName}. Building skills gradually.`,
        `✅ Slight improvement in ${skillName}. Consistency is key!`,
        `🌱 Growing ${skillName} skills slowly but surely.`
      );
    } else if (improvement === 0) {
      suggestions.push(
        `🔄 Maintaining ${skillName} skills at ${skillScore}%. Consistency is important!`,
        `⚖️ Stable performance in ${skillName}. Sometimes maintaining is progress!`,
        `📊 Holding steady in ${skillName}. Time to push for improvement?`,
        `🎯 Consistent ${skillName} performance. Ready for the next level?`,
        `💪 Maintaining ${skillName} skills. Consider challenging yourself more!`
      );
    } else {
      suggestions.push(
        `📉 ${skillName} skills dipped slightly. Don\'t worry, review and practice!`,
        `🔄 Temporary setback in ${skillName}. Focus on weak areas.`,
        `📊 Minor decline in ${skillName}. Time to refresh your knowledge!`,
        `🎯 ${skillName} performance dropped. Identify and address gaps.`,
        `💡 ${skillName} skills need attention. Review fundamentals and practice!`
      );
    }
  }

  // Industry-specific comments
  const industryComments = {
    'JavaScript': [
      '🌐 Web development powerhouse! JavaScript is everywhere.',
      '⚡ Dynamic and versatile language. Great choice for full-stack development!',
      '🎨 Frontend magic with JavaScript! The web is your canvas.',
      '🔧 JavaScript ecosystem is massive. So many opportunities!',
      '📱 From web to mobile, JavaScript does it all!'
    ],
    'Python': [
      '🐍 Python\'s simplicity and power make it a developer favorite!',
      '🤖 Perfect for AI, data science, and automation!',
      '📊 Data analysis and machine learning powerhouse!',
      '🔬 Scientific computing and research made easy!',
      '🌍 Versatile language from web to AI to automation!'
    ],
    'React': [
      '⚛️ Modern UI development with React! Component-based architecture rocks!',
      '🎯 Declarative programming makes UI development intuitive!',
      '🔄 Virtual DOM for optimal performance!',
      '📱 React Native for cross-platform mobile development!',
      '🛠️ Huge ecosystem and community support!'
    ],
    'Node.js': [
      '🚀 JavaScript everywhere! Full-stack development with one language!',
      '⚡ High-performance server-side JavaScript!',
      '📦 NPM ecosystem is massive! So many packages available!',
      '🔄 Event-driven, non-blocking I/O for scalability!',
      '🌐 Perfect for real-time applications and APIs!'
    ],
    'TypeScript': [
      '🔒 Type safety in JavaScript! Catch errors before runtime!',
      '📝 Better IDE support and developer experience!',
      '🏗️ Large-scale application development made easier!',
      '🔄 Gradual adoption - add types as you go!',
      '⚡ Enhanced JavaScript with superpowers!'
    ],
    'Java': [
      '☕ Enterprise-grade programming language!',
      '🏢 Perfect for large-scale applications!',
      '📱 Android development powerhouse!',
      '🔄 Write once, run anywhere!',
      '💼 Strong typing and object-oriented design!'
    ],
    'C++': [
      '⚡ High-performance programming! System-level development!',
      '🎮 Game development and graphics programming!',
      '🔧 Memory management and optimization!',
      '🏗️ Complex applications with fine control!',
      '🚀 Performance-critical applications!'
    ],
    'SQL': [
      '🗄️ Database management and data manipulation!',
      '📊 Data analysis and business intelligence!',
      '💾 Essential for any data-driven application!',
      '📈 Query optimization and performance tuning!',
      '🔍 Data exploration and reporting!'
    ],
    'Git': [
      '📚 Version control is essential for any developer!',
      '🔄 Collaboration and code management made easy!',
      '🌿 Branching and merging strategies!',
      '📝 Track changes and maintain project history!',
      '👥 Team development and code review workflows!'
    ],
    'Docker': [
      '🐳 Containerization for consistent deployments!',
      '🚀 DevOps and microservices architecture!',
      '📦 Package applications with dependencies!',
      '🔄 Easy scaling and deployment!',
      '🏗️ Infrastructure as code approach!'
    ]
  };

  if (industryComments[skillName]) {
    suggestions.push(...industryComments[skillName]);
  }

  // Motivation and encouragement comments
  const motivationComments = [
    '💪 Keep pushing your limits! Every expert was once a beginner.',
    '🎯 Consistency beats perfection. Keep practicing daily!',
    '🚀 Your future self will thank you for the effort you put in today!',
    '📚 Learning is a journey, not a destination. Enjoy the process!',
    '🌟 You have the power to become exceptional at this!',
    '🔥 Passion + Practice = Progress. You\'re on the right track!',
    '🎉 Celebrate every milestone, no matter how small!',
    '💡 Every challenge is an opportunity to grow stronger!',
    '🌈 Your dedication will open amazing opportunities!',
    '⚡ You\'re building valuable skills that will serve you for life!'
  ];

  suggestions.push(...motivationComments);

  // Randomize and return 3-5 suggestions
  const shuffled = suggestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 3);
};

// Get contextual comment based on skill performance
export const getContextualComment = (skill, previousScore = null) => {
  const { skillName, skillScore } = skill;
  
  // Performance level comments
  if (skillScore >= 90) {
    return `🏆 Master level achieved! Your ${skillName} skills are exceptional. Consider mentoring others or contributing to advanced projects.`;
  } else if (skillScore >= 80) {
    return `🌟 Expert level in ${skillName}! You\'re ready for senior-level challenges and advanced specializations.`;
  } else if (skillScore >= 70) {
    return `📈 Strong intermediate-advanced skills in ${skillName}. Focus on complex projects and advanced concepts.`;
  } else if (skillScore >= 60) {
    return `✅ Solid intermediate level in ${skillName}. Ready for more challenging projects and real-world applications.`;
  } else if (skillScore >= 50) {
    return `🔄 Good progress in ${skillName}! Focus on hands-on practice and building practical projects.`;
  } else if (skillScore >= 40) {
    return `📚 Building a solid foundation in ${skillName}. Practice regularly and work on beginner-friendly projects.`;
  } else {
    return `🚀 Starting your ${skillName} journey! Focus on fundamentals and practice daily. Every expert was once a beginner!`;
  }
};

// Get improvement-focused comment
export const getImprovementComment = (skill, previousScore = null) => {
  if (previousScore === null) return null;
  
  const improvement = skill.skillScore - previousScore;
  const { skillName } = skill;
  
  if (improvement > 10) {
    return `🚀 Incredible progress! Your ${skillName} skills improved by ${improvement} points! Keep this momentum going!`;
  } else if (improvement > 5) {
    return `📈 Great improvement in ${skillName}! ${improvement} points gained shows your dedication.`;
  } else if (improvement > 0) {
    return `📊 Steady progress in ${skillName}. Every point of improvement counts!`;
  } else if (improvement === 0) {
    return `🔄 Maintaining ${skillName} skills. Consider challenging yourself with more advanced topics.`;
  } else {
    return `📉 ${skillName} skills need attention. Review fundamentals and practice regularly to get back on track.`;
  }
}; 