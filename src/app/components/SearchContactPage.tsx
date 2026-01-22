import React from 'react';
import { ArrowLeft, Search, Mic } from 'lucide-react';

interface SearchContactPageProps {
  onBack: () => void;
}

export function SearchContactPage({ onBack }: SearchContactPageProps) {
  return (
    <>
      {/* Header */}
      <div className="relative z-10 px-7 pt-6 pb-3">
        <div className="flex items-center justify-between mb-6">
          {/* Title */}
          <h1 className="text-[20px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
            Add Memory
          </h1>

          {/* Done Button */}
          <button 
            onClick={onBack}
            className="text-[17px] text-[rgba(8,99,255,0.78)] tracking-tight hover:opacity-70 transition-opacity" 
            style={{ fontWeight: 600 }}
          >
            Done
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col px-7 pb-8">
        {/* Heading */}
        <h2 className="text-[28px] text-[#1d1d1f] tracking-tight text-center mb-12" style={{ fontWeight: 600 }}>
          Speak the contact details
        </h2>

        {/* Mic Button */}
        <div className="flex justify-center mb-8">
          <button className="hover:scale-105 transition-all duration-300">
            <div className="w-28 h-28 rounded-full bg-[rgba(169,255,8,0.73)] flex items-center justify-center shadow-lg">
              <Mic className="w-12 h-12 text-[#48484a]" strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* Instructions */}
        <p className="text-[15px] text-[#86868b] tracking-tight text-center mb-2" style={{ fontWeight: 500 }}>
          Tap to start speaking contact details
        </p>
        <p className="text-[13px] text-[#86868b]/70 tracking-tight text-center mb-8" style={{ fontWeight: 400 }}>
          Speak clearly and include name/ company, title, and<br />contact information
        </p>

        {/* Text Box */}
        <div className="flex-1 bg-[#efeff4] rounded-[20px] p-5 shadow-sm">
          <p className="text-[14px] text-[#1d1d1f] tracking-tight leading-relaxed" style={{ fontWeight: 400 }}>
            Met at AI Summit 2024. Expert in ML applications for fintech. Mentioned they're exploring partnerships for digital identity verification using AI...
          </p>
        </div>
      </div>
    </>
  );
}