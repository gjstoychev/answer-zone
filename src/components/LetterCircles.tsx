import React from "react";

interface LetterCirclesProps {
  title: string;
  letters: string;
}

const LetterCircles: React.FC<LetterCirclesProps> = ({ title, letters }) => (
  <span className="status-circle">
    <p>{title}</p>
    {letters.split(",").map((letter, index) => (
      <span key={index} className="circle">
        {letter}
      </span>
    ))}
  </span>
);

export default LetterCircles;
