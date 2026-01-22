import React, { useState } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { Globe } from './Globe';

interface ScanCardPageProps {
  onBack: () => void;
}

export function ScanCardPage({ onBack }: ScanCardPageProps) {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false);
    }, 2000);
  };

  return (
    <>
      {/* Globe Design Element */}
      <Globe />

      {/* Header */}
      <div className="relative z-10 px-7 pt-6 pb-4">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="hover:opacity-70 transition-opacity duration-200 mb-6"
        >
          <ArrowLeft className="w-7 h-7 text-[#1d1d1f]" strokeWidth={2.5} />
        </button>
        
        {/* Title */}
        <h1 className="text-[56px] leading-[0.95] text-[#1d1d1f] tracking-tight mb-8" style={{ fontWeight: 700 }}>
          Scan Card
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col px-7 pb-6">
        
        {/* Instructions */}
        <div className="text-center mb-6">
          <p className="text-[13px] text-[#86868b] leading-relaxed tracking-tight" style={{ fontWeight: 400 }}>
            Position the business card within the frame and tap the button to scan
          </p>
        </div>

        {/* Scanning Frame */}
        <div className="flex-1 flex items-center justify-center mb-8">
          <div className="relative w-full max-w-[340px] aspect-[1.6/1] bg-white rounded-[24px] shadow-lg overflow-hidden border-4 border-dashed border-[#efeff4]">
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isScanning ? 'bg-[rgba(169,255,8,0.1)]' : ''
            }`}>
              <div className="text-center space-y-2">
                <p className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                  Position business card in frame
                </p>
                <p className="text-[13px] text-[#86868b] px-8 leading-relaxed tracking-tight" style={{ fontWeight: 400 }}>
                  Make sure the card is flat, well-lit, and all text is clearly visible and in focus
                </p>
              </div>
            </div>
            
            {/* Corner Guides */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-[3px] border-t-[3px] border-[rgba(169,255,8,0.73)] rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-[3px] border-t-[3px] border-[rgba(169,255,8,0.73)] rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-[3px] border-b-[3px] border-[rgba(169,255,8,0.73)] rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-[3px] border-b-[3px] border-[rgba(169,255,8,0.73)] rounded-br-lg" />
          </div>
        </div>

        {/* Scan Button */}
        <div className="flex justify-center pb-8">
          <button
            onClick={handleScan}
            className="relative group"
            disabled={isScanning}
          >
            {/* Camera Circle */}
            <div className={`w-20 h-20 rounded-full transition-all duration-300 flex items-center justify-center ${
              isScanning ? 'animate-pulse' : ''
            }`} 
            style={{
              backgroundColor: 'rgba(169, 255, 8, 0.73)',
              boxShadow: isScanning ? '0 8px 32px rgba(169, 255, 8, 0.4)' : '0 4px 16px rgba(169, 255, 8, 0.3)'
            }}>
              <Camera className="w-9 h-9 text-[#1d1d1f]" strokeWidth={2} />
            </div>
          </button>
        </div>

        {/* Status Text */}
        <div className="text-center">
          <p className="text-[15px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
            {isScanning ? 'Scanning...' : 'Tap to scan'}
          </p>
        </div>
      </div>
    </>
  );
}