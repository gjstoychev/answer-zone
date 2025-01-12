import React from "react";

interface CircleIndicatorProps {
  percentage: number;
  label: string;
}

const CircleIndicator: React.FC<CircleIndicatorProps> = ({
  percentage,
  label,
}) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const color = `hsl(${percentage}, 100%, 50%)`;

  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <circle
        cx="70"
        cy="70"
        r={radius}
        fill="none"
        stroke="#444"
        strokeWidth="10"
      />
      <circle
        cx="70"
        cy="70"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(90 70 70)"
      />
      <text
        x="70"
        y="65"
        fill="silver"
        fontSize="14"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {label.split(" ")[0]}
        <tspan x="70" dy="1.2em">{`${percentage}%`}</tspan>
      </text>
    </svg>
  );
};

export default CircleIndicator;
