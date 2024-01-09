import React from 'react';

const BarChart: React.FC = () => {
  const data = {
    X: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    Y: [10, 20, 50, 60, 80, 100],
  };

  const maxY = Math.max(...data.Y);

  const height = 300; // Set your desired height for the chart
  const barWidth = 30; // Set your desired width for each bar

  return (
    <svg width={barWidth * data.X.length} height={height}>
      {data.X.map((day, index) => (
        <rect
          key={index}
          x={index * barWidth}
          y={height - (data.Y[index] / maxY) * height}
          width={barWidth}
          height={(data.Y[index] / maxY) * height}
          fill="blue" // You can set your desired color here
        />
      ))}
    </svg>
  );
};

export default BarChart;
