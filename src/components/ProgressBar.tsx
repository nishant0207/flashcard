// src/components/ProgressBar.tsx

import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const percentage = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="w-full mt-4">
      <div className="flex justify-between text-sm text-gray-600 mb-1 dark:text-gray-200">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>
      <div
        className="w-full bg-gray-300 h-3 rounded-full"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      >
        <div
          className="bg-blue-500 h-3 rounded-l-lg rounded-r-lg transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;