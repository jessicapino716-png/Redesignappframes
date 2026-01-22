import React from 'react';
import globeImage from 'figma:asset/93a03035e02aa6911a622ce7725e4dbe0b299f55.png';

export function Globe() {
  return (
    <div 
      className="absolute -top-4 -right-4 w-[190px] h-[190px] pointer-events-none"
      style={{ backgroundColor: '#E8E3D5' }}
    >
      <img 
        src={globeImage} 
        alt="Globe" 
        className="w-full h-full object-contain"
        style={{
          mixBlendMode: 'multiply',
          opacity: 1,
          imageRendering: 'crisp-edges'
        }}
      />
      {/* Green highlight dot */}
      <div 
        className="absolute w-1 h-1 bg-[rgba(169,255,8,0.9)]"
        style={{
          left: '15%',
          top: '42%',
          boxShadow: '0 0 8px rgba(169,255,8,0.6)'
        }}
      />
    </div>
  );
}