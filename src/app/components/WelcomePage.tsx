import React from 'react';
import logoImage from 'figma:asset/51e9ff80db11786c54bdaece917dac1be4d8d57b.png';

interface WelcomePageProps {
  onBack?: () => void;
}

export function WelcomePage({ onBack }: WelcomePageProps) {
  return (
    <div className="flex-1 relative overflow-hidden bg-[#E8E3D5] flex items-center justify-center">
      {/* Logo Container */}
      <div className="flex flex-col items-center">
        {/* Logo Image */}
        <img 
          src={logoImage} 
          alt="Recall Verse Logo" 
          className="w-auto h-auto max-w-[250px] object-contain"
          style={{ mixBlendMode: 'multiply', clipPath: 'inset(0 0 0 2px)' }}
        />
      </div>
    </div>
  );
}