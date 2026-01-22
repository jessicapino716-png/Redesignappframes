import React from 'react';
import { ArrowLeft, Upload } from 'lucide-react';

interface UploadCardPageProps {
  onBack: () => void;
}

export function UploadCardPage({ onBack }: UploadCardPageProps) {
  return (
    <>
      {/* Header */}
      <div className="relative z-10 px-7 pt-6 pb-3">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="hover:opacity-70 transition-opacity duration-200 mb-4"
        >
          <ArrowLeft className="w-7 h-7 text-[#1d1d1f]" strokeWidth={2.5} />
        </button>
        
        {/* Title */}
        <h1 className="text-[56px] leading-[0.95] text-[#1d1d1f] tracking-tight mb-6" style={{ fontWeight: 700 }}>
          Upload
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col px-7 pb-6">
        
        {/* Select Photo Section */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm">
          <h2 className="text-[18px] text-[#1d1d1f] tracking-tight mb-1 text-center" style={{ fontWeight: 700 }}>
            Select Photo
          </h2>
          <p className="text-[12px] text-[#86868b] tracking-tight text-center mb-4" style={{ fontWeight: 400 }}>
            Choose an existing photo of a business card from your device gallery
          </p>

          {/* Tips Box */}
          <div className="bg-[#f5f5f0] rounded-[16px] p-3 mb-4">
            <h3 className="text-[13px] text-[#1d1d1f] tracking-tight mb-1.5" style={{ fontWeight: 700 }}>
              For best results:
            </h3>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-[#86868b] mt-0.5">•</span>
                <p className="text-[11px] text-[#1d1d1f] leading-relaxed tracking-tight flex-1" style={{ fontWeight: 400 }}>
                  Choose clear, well-lit photos
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#86868b] mt-0.5">•</span>
                <p className="text-[11px] text-[#1d1d1f] leading-relaxed tracking-tight flex-1" style={{ fontWeight: 400 }}>
                  Avoid glare or shadows
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#86868b] mt-0.5">•</span>
                <p className="text-[11px] text-[#1d1d1f] leading-relaxed tracking-tight flex-1" style={{ fontWeight: 400 }}>
                  Text clearly visible/legible
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#86868b] mt-0.5">•</span>
                <p className="text-[11px] text-[#1d1d1f] leading-relaxed tracking-tight flex-1" style={{ fontWeight: 400 }}>
                  Business card should fill most of the frame
                </p>
              </li>
            </ul>
          </div>

          {/* Upload Icon */}
          <div className="flex justify-center mb-3">
            <div className="bg-[rgba(169,255,8,0.73)] rounded-full p-3">
              <Upload className="w-7 h-7 text-[#1d1d1f]" strokeWidth={2.5} />
            </div>
          </div>

          {/* Upload Text */}
          <div className="text-center mb-4">
            <h3 className="text-[16px] text-[#1d1d1f] tracking-tight mb-0.5" style={{ fontWeight: 700 }}>
              Select Photo
            </h3>
            <p className="text-[12px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
              Tap to browse your photo library
            </p>
          </div>

          {/* Choose from Gallery Button */}
          <button className="w-full bg-[rgba(169,255,8,0.73)] hover:bg-[rgba(169,255,8,0.85)] transition-colors rounded-[16px] py-3.5 px-6 shadow-sm">
            <span className="text-[15px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
              Choose from Gallery
            </span>
          </button>
        </div>
      </div>
    </>
  );
}