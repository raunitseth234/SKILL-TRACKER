import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
// Chart color schemes imported for future use
// import { radarChartColors } from '../data/sampleData';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ skills }) => {
  // Don't render if no skills
  if (!skills || skills.length === 0) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Skills Radar Chart
        </h3>
        <div className="text-center py-8 text-secondary-500">
          Add some skills to see your radar chart
        </div>
      </div>
    );
  }

  // Prepare chart data
  const chartData = {
    labels: skills.map(skill => skill.skillName),
    datasets: [
      {
        label: 'Skill Scores',
        data: skills.map(skill => skill.skillScore),
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 3,
        pointBackgroundColor: skills.map(skill => {
          if (skill.skillScore >= 80) return 'rgba(34, 197, 94, 1)';
          if (skill.skillScore >= 60) return 'rgba(59, 130, 246, 1)';
          if (skill.skillScore >= 40) return 'rgba(234, 179, 8, 1)';
          return 'rgba(239, 68, 68, 1)';
        }),
        pointBorderColor: '#fff',
        pointBorderWidth: 3,
        pointRadius: 8,
        pointHoverRadius: 12,
        pointHoverBackgroundColor: 'rgba(59, 130, 246, 0.8)',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 4,
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
            return `${context.label}: ${context.parsed.r}/100`;
          }
        }
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        min: 0,
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
        grid: {
          color: 'rgba(100, 116, 139, 0.2)',
        },
        angleLines: {
          color: 'rgba(100, 116, 139, 0.2)',
        },
        pointLabels: {
          color: '#334155',
          font: {
            size: 12,
            weight: '500',
          },
          padding: 20,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  return (
    <div className="card transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-secondary-900">
          Skills Radar Chart
        </h3>
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-primary-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="h-80">
        <Radar data={chartData} options={options} />
      </div>
      <div className="mt-4 text-sm text-secondary-600">
        <p className="text-center">
          This radar chart shows your skill proficiency levels across all tracked skills.
        </p>
      </div>
    </div>
  );
};

export default RadarChart; 