import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from 'chart.js';
import { Bar, Radar, Doughnut, Line } from 'react-chartjs-2';
import { TrendingUp, Target, Award, BarChart3, PieChart, Activity } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement
);

// Industry benchmark data for programming languages
const industryBenchmarks = {
  'JavaScript': { average: 75, demand: 95, salary: 85 },
  'Python': { average: 80, demand: 90, salary: 88 },
  'Java': { average: 78, demand: 85, salary: 82 },
  'React': { average: 72, demand: 92, salary: 87 },
  'Node.js': { average: 70, demand: 88, salary: 84 },
  'TypeScript': { average: 68, demand: 85, salary: 86 },
  'C++': { average: 65, demand: 75, salary: 90 },
  'C#': { average: 72, demand: 80, salary: 83 },
  'PHP': { average: 60, demand: 70, salary: 75 },
  'Ruby': { average: 62, demand: 65, salary: 78 },
  'Go': { average: 58, demand: 75, salary: 89 },
  'Rust': { average: 55, demand: 70, salary: 92 },
  'Swift': { average: 65, demand: 75, salary: 85 },
  'Kotlin': { average: 60, demand: 70, salary: 82 },
  'Dart': { average: 50, demand: 60, salary: 75 },
  'Flutter': { average: 52, demand: 65, salary: 78 },
  'Vue.js': { average: 65, demand: 75, salary: 80 },
  'Angular': { average: 68, demand: 80, salary: 85 },
  'SQL': { average: 75, demand: 90, salary: 80 },
  'MongoDB': { average: 60, demand: 70, salary: 78 },
  'AWS': { average: 65, demand: 85, salary: 88 },
  'Docker': { average: 58, demand: 75, salary: 82 },
  'Kubernetes': { average: 52, demand: 70, salary: 85 },
  'Git': { average: 80, demand: 95, salary: 75 },
  'Linux': { average: 65, demand: 80, salary: 82 },
  'Machine Learning': { average: 45, demand: 85, salary: 95 },
  'Data Science': { average: 50, demand: 80, salary: 90 },
  'DevOps': { average: 55, demand: 80, salary: 85 },
  'Cybersecurity': { average: 50, demand: 75, salary: 88 },
};

const EnhancedSkillCharts = ({ skills }) => {
  const [activeChart, setActiveChart] = useState('comparison');
  const [liveBenchmarks, setLiveBenchmarks] = useState(industryBenchmarks);

  // Simulate real-time updates every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveBenchmarks(prev =>
        Object.fromEntries(
          Object.entries(prev).map(([skill, data]) => [
            skill,
            {
              ...data,
              average: Math.max(40, Math.min(100, data.average + (Math.random() - 0.5) * 2)),
              demand: Math.max(60, Math.min(100, data.demand + (Math.random() - 0.5) * 2)),
              salary: Math.max(60, Math.min(100, data.salary + (Math.random() - 0.5) * 2)),
            }
          ])
        )
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Don't render if no skills
  if (!skills || skills.length === 0) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Enhanced Skill Analysis
        </h3>
        <div className="text-center py-8 text-secondary-500">
          Add some skills to see comprehensive analysis and industry comparisons
        </div>
      </div>
    );
  }

  // Sort skills by score for better visualization
  const sortedSkills = [...skills].sort((a, b) => b.skillScore - a.skillScore);

  // Generate colors based on score ranges
  const getColor = (score) => {
    if (score >= 80) return 'rgba(16, 185, 129, 0.8)';
    if (score >= 60) return 'rgba(59, 130, 246, 0.8)';
    if (score >= 40) return 'rgba(245, 158, 11, 0.8)';
    return 'rgba(239, 68, 68, 0.8)';
  };

  // Chart configurations
  const chartConfigs = {
    comparison: {
      title: 'Your Skills vs Industry Average',
      icon: BarChart3,
      component: () => {
        // Sort by gap between user and industry average
        const comparisonData = sortedSkills.map(skill => {
          const benchmark = liveBenchmarks[skill.skillName] || { average: 60, demand: 70, salary: 75 };
          return {
            skill: skill.skillName,
            yourScore: skill.skillScore,
            industryAvg: benchmark.average,
            demand: benchmark.demand,
            salary: benchmark.salary,
            gap: skill.skillScore - benchmark.average
          };
        }).sort((a, b) => b.gap - a.gap);

        // Highlight top/bottom skills
        const topSkill = comparisonData[0]?.skill;
        const bottomSkill = comparisonData[comparisonData.length - 1]?.skill;

        const data = {
          labels: comparisonData.map(item => item.skill),
          datasets: [
            {
              label: 'Your Score',
              data: comparisonData.map(item => item.yourScore),
              backgroundColor: comparisonData.map(item =>
                item.skill === topSkill ? 'rgba(16, 185, 129, 1)' :
                item.skill === bottomSkill ? 'rgba(239, 68, 68, 1)' :
                getColor(item.yourScore)
              ),
              borderColor: comparisonData.map(item =>
                item.skill === topSkill ? 'rgba(16, 185, 129, 1)' :
                item.skill === bottomSkill ? 'rgba(239, 68, 68, 1)' :
                getColor(item.yourScore).replace('0.8', '1')
              ),
              borderWidth: 2,
              borderRadius: 8,
            },
            {
              label: 'Industry Average',
              data: comparisonData.map(item => item.industryAvg),
              backgroundColor: 'rgba(156, 163, 175, 0.6)',
              borderColor: 'rgba(156, 163, 175, 1)',
              borderWidth: 2,
              borderRadius: 8,
            }
          ]
        };

        const options = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            tooltip: {
              callbacks: {
                afterBody: function(context) {
                  const index = context[0].dataIndex;
                  const item = comparisonData[index];
                  return [
                    `Demand Level: ${item.demand}/100`,
                    `Salary Potential: ${item.salary}/100`,
                    `Gap: ${item.gap > 0 ? '+' : ''}${item.gap} points`
                  ];
                },
                label: function(context) {
                  const item = comparisonData[context.dataIndex];
                  return `${context.dataset.label}: ${context.parsed.y}% (Gap: ${item.gap > 0 ? '+' : ''}${item.gap})`;
                }
              }
            },
            datalabels: {
              display: true,
              anchor: 'end',
              align: 'start',
              formatter: function(value, context) {
                if (context.datasetIndex === 0) {
                  const gap = comparisonData[context.dataIndex].gap;
                  return `${gap > 0 ? '+' : ''}${gap}`;
                }
                return '';
              },
              color: '#374151',
              font: { weight: 'bold' }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { callback: value => value + '%' }
            }
          }
        };

        // Use chartjs-plugin-datalabels for delta labels
        // (User must have this plugin installed and registered)
        return <Bar data={data} options={options} />;
      }
    },

    radar: {
      title: 'Skill Radar Analysis',
      icon: Target,
      component: () => {
        const topSkills = sortedSkills.slice(0, 8);
        const data = {
          labels: topSkills.map(skill => skill.skillName),
          datasets: [
            {
              label: 'Your Skills',
              data: topSkills.map(skill => skill.skillScore),
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 2,
              pointBackgroundColor: topSkills.map(skill => getColor(skill.skillScore)),
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
            },
            {
              label: 'Industry Average',
              data: topSkills.map(skill => {
                const benchmark = liveBenchmarks[skill.skillName] || { average: 60 };
                return benchmark.average;
              }),
              backgroundColor: 'rgba(156, 163, 175, 0.2)',
              borderColor: 'rgba(156, 163, 175, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(156, 163, 175, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(156, 163, 175, 1)',
            }
          ]
        };

        const options = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `${context.dataset.label}: ${context.parsed.r}%`;
                }
              }
            }
          },
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              ticks: { callback: value => value + '%' }
            }
          }
        };

        return <Radar data={data} options={options} />;
      }
    },

    distribution: {
      title: 'Skill Level Distribution',
      icon: PieChart,
      component: () => {
        const levels = {
          'Expert (80-100%)': skills.filter(s => s.skillScore >= 80).length,
          'Advanced (60-79%)': skills.filter(s => s.skillScore >= 60 && s.skillScore < 80).length,
          'Intermediate (40-59%)': skills.filter(s => s.skillScore >= 40 && s.skillScore < 60).length,
          'Beginner (0-39%)': skills.filter(s => s.skillScore < 40).length,
        };

        const data = {
          labels: Object.keys(levels),
          datasets: [{
            data: Object.values(levels),
            backgroundColor: [
              'rgba(16, 185, 129, 0.8)',
              'rgba(59, 130, 246, 0.8)',
              'rgba(245, 158, 11, 0.8)',
              'rgba(239, 68, 68, 0.8)',
            ],
            borderColor: [
              'rgba(16, 185, 129, 1)',
              'rgba(59, 130, 246, 1)',
              'rgba(245, 158, 11, 1)',
              'rgba(239, 68, 68, 1)',
            ],
            borderWidth: 2,
          }]
        };

        const options = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const total = skills.length;
                  const percentage = ((context.parsed / total) * 100).toFixed(1);
                  return `${context.label}: ${context.parsed} skills (${percentage}%)`;
                }
              }
            }
          }
        };

        return <Doughnut data={data} options={options} />;
      }
    },

    progress: {
      title: 'Skill Progress Timeline',
      icon: Activity,
      component: () => {
        // Simulate progress over time (in real app, this would come from historical data)
        const progressData = sortedSkills.slice(0, 6).map((skill, index) => {
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
          const currentScore = skill.skillScore;
          const startScore = Math.max(0, currentScore - (Math.random() * 30 + 10));
          
          return {
            skill: skill.skillName,
            data: months.map((month, i) => {
              const progress = startScore + ((currentScore - startScore) * (i / 5));
              return Math.round(progress);
            })
          };
        });

        const data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: progressData.map((item, index) => ({
            label: item.skill,
            data: item.data,
            borderColor: `hsl(${index * 60}, 70%, 50%)`,
            backgroundColor: `hsla(${index * 60}, 70%, 50%, 0.1)`,
            borderWidth: 2,
            fill: false,
            tension: 0.4,
          }))
        };

        const options = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: { callback: value => value + '%' }
            }
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
          }
        };

        return <Line data={data} options={options} />;
      }
    }
  };

  const activeConfig = chartConfigs[activeChart];

  return (
    <div className="card transform transition-all duration-300 hover:shadow-lg">
      {/* Chart Navigation */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-secondary-900">
          Enhanced Skill Analysis
        </h3>
        <div className="flex space-x-2">
          {Object.entries(chartConfigs).map(([key, config]) => {
            const IconComponent = config.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveChart(key)}
                className={`p-2 rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                  activeChart === key
                    ? 'bg-primary-100 text-primary-600 shadow-md'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                }`}
              >
                <IconComponent size={16} />
                <span className="text-xs font-medium">{config.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Chart */}
      <div className="h-96 mb-4">
        {activeConfig.component()}
      </div>

      {/* Insights Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <Award size={16} className="text-green-600" />
            <span className="font-medium text-green-800">Top Skill</span>
          </div>
          <p className="text-sm text-green-700">
            {sortedSkills[0]?.skillName} ({sortedSkills[0]?.skillScore}%)
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp size={16} className="text-blue-600" />
            <span className="font-medium text-blue-800">Average Score</span>
          </div>
          <p className="text-sm text-blue-700">
            {Math.round(skills.reduce((sum, skill) => sum + skill.skillScore, 0) / skills.length)}%
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center space-x-2 mb-2">
            <Target size={16} className="text-purple-600" />
            <span className="font-medium text-purple-800">Skills to Improve</span>
          </div>
          <p className="text-sm text-purple-700">
            {skills.filter(s => s.skillScore < 60).length} skills below 60%
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSkillCharts; 