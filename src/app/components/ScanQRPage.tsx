import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

interface ScanQRPageProps {
  onBack: () => void;
}

export function ScanQRPage({ onBack }: ScanQRPageProps) {
  const [isDetected, setIsDetected] = useState(true); // Set to true for screenshot

  return (
    <>
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
          QR Code
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col px-7 pb-6">
        
        {/* Instructions */}
        <div className="text-center mb-4">
          <p className="text-[13px] text-[#86868b] leading-relaxed tracking-tight" style={{ fontWeight: 400 }}>
            Point camera at QR code on business card
          </p>
        </div>

        {/* Scanning Frame */}
        <div className="flex-1 flex items-center justify-center mb-4 max-h-[340px]">
          <div className="relative w-full max-w-[280px] aspect-square bg-white/10 rounded-[24px] overflow-hidden border-2 border-[rgba(169,255,8,0.73)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              
              {/* Detection Status */}
              {isDetected && (
                <div className="mb-3">
                  <div className="bg-[rgba(169,255,8,0.73)] rounded-[16px] px-5 py-3 shadow-lg">
                    <div className="flex items-center gap-2 mb-0.5">
                      <Check className="w-4 h-4 text-[#1d1d1f]" strokeWidth={3} />
                      <p className="text-[14px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
                        QR Code Detected!
                      </p>
                    </div>
                    <p className="text-[12px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                      Processing...
                    </p>
                  </div>
                </div>
              )}

              <p className="text-[11px] text-[#86868b] tracking-tight px-10 text-center" style={{ fontWeight: 400 }}>
                clearly visible and well-lit
              </p>
            </div>
            
            {/* Corner Guides - Dark Grey */}
            <div className="absolute top-5 left-5 w-10 h-10 border-l-[4px] border-t-[4px] border-[#48484a] rounded-tl-lg" />
            <div className="absolute top-5 right-5 w-10 h-10 border-r-[4px] border-t-[4px] border-[#48484a] rounded-tr-lg" />
            <div className="absolute bottom-5 left-5 w-10 h-10 border-l-[4px] border-b-[4px] border-[#48484a] rounded-bl-lg" />
            <div className="absolute bottom-5 right-5 w-10 h-10 border-r-[4px] border-b-[4px] border-[#48484a] rounded-br-lg" />
          </div>
        </div>

        {/* Align Instruction */}
        <div className="text-center mb-4">
          <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 500 }}>
            Align QR code within frame
          </p>
        </div>

        {/* QR Scanning Tips */}
        <div className="bg-white rounded-[20px] p-4 shadow-sm">
          <h3 className="text-[14px] text-[#1d1d1f] tracking-tight mb-2" style={{ fontWeight: 700 }}>
            QR Scanning Tips:
          </h3>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-[#86868b] mt-0.5">•</span>
              <p className="text-[12px] text-[#1d1d1f] leading-relaxed tracking-tight flex-1" style={{ fontWeight: 400 }}>
                Hold device steady and keep QR code centered
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#86868b] mt-0.5">•</span>
              <p className="text-[12px] text-[#1d1d1f] leading-relaxed tracking-tight flex-1" style={{ fontWeight: 400 }}>
                Ensure good lighting on the QR code
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#86868b] mt-0.5">•</span>
              <p className="text-[12px] text-[#1d1d1f] leading-relaxed tracking-tight flex-1" style={{ fontWeight: 400 }}>
                Move closer or further to focus clearly
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}