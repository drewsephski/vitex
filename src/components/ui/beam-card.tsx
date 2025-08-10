import React from 'react';

interface BeamCardProps {
  beamColor: string;
  glowColor: string;
  hoverColor: string;
  children: React.ReactNode;
}

const BeamCard: React.FC<BeamCardProps> = ({ children, beamColor, glowColor, hoverColor }) => {
  // This is a placeholder component.
  // In a real application, this would contain the actual BeamCard implementation.
  // The props are used here to satisfy TypeScript.
  return (
    <div
      style={{
        borderColor: beamColor,
        boxShadow: `0 0 15px ${glowColor}`,
        transition: 'box-shadow 0.3s ease-in-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 25px ${hoverColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 15px ${glowColor}`;
      }}
      className="relative z-10 rounded-xl border border-gray-200 border-solid bg-white/5 p-6 backdrop-blur-md dark:border-gray-800 dark:bg-black/5"
    >
      {children}
    </div>
  );
};

export default BeamCard;