import React, { useState } from 'react';
import { ArrowLeft, Mic, Type } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface SpeakPageProps {
  onBack: () => void;
}

export function SpeakPage({ onBack }: SpeakPageProps) {
  const [activeTab, setActiveTab] = useState<'voice' | 'type'>('voice');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("John Smith from VentureConnect Partners, he's a Senior Investment Manager. His email is john.smith@ventureconnect.com, phone number is +1 (510) 555-8923.");

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simulate recording and transcript generation
    setTimeout(() => {
      setTranscript("John Smith from VentureConnect Partners, he's a Senior Investment Manager. His email is john.smith@ventureconnect.com, phone number is +1 (510) 555-8923.");
    }, 2000);
  };

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
          Create
        </h1>
        
        {/* Toggle Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('voice')}
            className="flex-1"
          >
            <div className={`rounded-[16px] py-3 px-4 transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'voice' 
                ? 'bg-[#48484a] shadow-md' 
                : 'bg-[#efeff4] shadow-sm hover:bg-[#e5e5ea]'
            }`}>
              <Mic className={`w-4 h-4 ${activeTab === 'voice' ? 'text-white' : 'text-[#86868b]'}`} strokeWidth={2} />
              <span className={`text-[15px] tracking-tight ${activeTab === 'voice' ? 'text-white' : 'text-[#86868b]'}`} style={{ fontWeight: 600 }}>
                Voice Input
              </span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('type')}
            className="flex-1"
          >
            <div className={`rounded-[16px] py-3 px-4 transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === 'type' 
                ? 'bg-[#48484a] shadow-md' 
                : 'bg-[#efeff4] shadow-sm hover:bg-[#e5e5ea]'
            }`}>
              <Type className={`w-4 h-4 ${activeTab === 'type' ? 'text-white' : 'text-[#86868b]'}`} strokeWidth={2} />
              <span className={`text-[15px] tracking-tight ${activeTab === 'type' ? 'text-white' : 'text-[#86868b]'}`} style={{ fontWeight: 600 }}>
                Type Details
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-7 pb-6">
        
        {/* Voice Input Tab */}
        {activeTab === 'voice' && (
          <div className="space-y-6">
            {/* Instructions Section */}
            <div className="text-center space-y-2 mt-[0px] mr-[0px] mb-[10px] ml-[0px]">
              <h2 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
                Speak contact details
              </h2>
              <p className="text-[13px] text-[#86868b] leading-relaxed tracking-tight" style={{ fontWeight: 400 }}>
                Say something like "met Brad Cox at the HR conference in Denver.  He is the VP of People at Acme Corp.  He is looking for new software and mentioned he loves skiing"
              </p>
            </div>

            {/* Audio Visualization */}
            <div className="flex flex-col items-center justify-center p-[0px] m-[0px] px-[0px] py-[10px]">
              <button
                onClick={handleStartRecording}
                className="relative group"
                disabled={isRecording}
              >
                {/* Mic Circle */}
                <div className={`w-28 h-28 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isRecording ? 'animate-pulse' : ''
                }`} 
                style={{
                  backgroundColor: 'rgba(169, 255, 8, 0.73)',
                  boxShadow: isRecording ? '0 8px 32px rgba(169, 255, 8, 0.4)' : '0 4px 16px rgba(169, 255, 8, 0.3)'
                }}>
                  <Mic className="w-11 h-11 text-[#1d1d1f]" strokeWidth={2} />
                </div>
              </button>

              <div className="mt-4 text-center space-y-1">
                <p className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                  {isRecording ? 'Listening...' : 'Tap to start speaking'}
                </p>
              </div>
            </div>

            {/* Transcript Box */}
            {transcript && (
              <div className="space-y-4">
                <div className="bg-white rounded-[20px] p-5 shadow-sm">
                  <p className="text-[14px] text-[#1d1d1f] leading-relaxed tracking-tight" style={{ fontWeight: 400 }}>
                    {transcript}
                  </p>
                </div>

                {/* Save Button */}
                <button className="w-full group">
                  <div className="bg-[#48484a] hover:bg-[#3a3a3c] rounded-[16px] py-4 transition-all duration-200 shadow-md">
                    <span className="text-white text-[17px] tracking-tight" style={{ fontWeight: 600 }}>Save</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Type Details Tab */}
        {activeTab === 'type' && (
          <div className="space-y-6">
            <Input
              type="text"
              placeholder="Name"
              className="w-full"
            />
            <Input
              type="text"
              placeholder="Company"
              className="w-full"
            />
            <Input
              type="text"
              placeholder="Title"
              className="w-full"
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full"
            />
            <Input
              type="tel"
              placeholder="Phone"
              className="w-full"
            />
            <Textarea
              placeholder="Additional Notes"
              className="w-full"
            />

            {/* Save Button */}
            <button className="w-full group">
              <div className="bg-[rgba(169,255,8,0.73)] hover:bg-[rgba(169,255,8,0.85)] rounded-[16px] py-4 transition-all duration-200 shadow-md">
                <span className="text-[#1d1d1f] text-[17px] tracking-tight" style={{ fontWeight: 600 }}>Save</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}