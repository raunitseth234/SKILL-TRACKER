import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ skills }) => {
  // Don't render if no skills
  if (!skills || skills.length === 0) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Skills Comparison
        </h3>
        <div className="text-center py-8 text-secondary-500">
          Add some skills to see your bar chart comparison
        </div>
      </div>
    );
  }

  // Sort skills by score for better visualization
  const sortedSkills = [...skills].sort((a, b) => b.skillScore - a.skillScore);

  // Generate gradient colors based on score ranges
  const getBarGradient = (score) => {
    if (score >= 80) {
      return {
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgba(16, 185, 129, 1)',
        gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8))'
      };
    }
    if (score >= 60) {
      return {
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.8))'
      };
    }
    if (score >= 40) {
      return {
        backgroundColor: 'rgba(245, 158, 11, 0.8)',
        borderColor: 'rgba(245, 158, 11, 1)',
        gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.8))'
      };
    }
    return {
      backgroundColor: 'rgba(239, 68, 68, 0.8)',
      borderColor: 'rgba(239, 68, 68, 1)',
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.8), rgba(220, 38, 38, 0.8))'
    };
  };

  // Prepare chart data
  const chartData = {
    labels: sortedSkills.map(skill => skill.skillName),
    datasets: [
      {
        label: 'Skill Score',
        data: sortedSkills.map(skill => skill.skillScore),
        backgroundColor: sortedSkills.map(skill => getBarGradient(skill.skillScore).backgroundColor),
        borderColor: sortedSkills.map(skill => getBarGradient(skill.skillScore).borderColor),
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
        hoverBackgroundColor: sortedSkills.map(skill => getBarGradient(skill.skillScore).gradient),
        hoverBorderColor: sortedSkills.map(skill => getBarGradient(skill.skillScore).borderColor),
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `Score: ${context.parsed.y}/100`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#64748b',
          font: {
            size: 12,
          },
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(100, 116, 139, 0.2)',
        },
        ticks: {
          stepSize: 20,
          color: '#64748b',
          font: {
            size: 12,
          },
          callback: function(value) {
            return value + '%';
          }
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="card transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-secondary-900">
          Skills Comparison
        </h3>
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="h-80">
        <Bar data={chartData} options={options} />
      </div>
      <div className="mt-4 text-sm text-secondary-600">
        <p className="text-center">
          Compare your skill levels with this bar chart. Skills are sorted by proficiency level.
        </p>
      </div>
    </div>
  );
};

export default BarChart; 