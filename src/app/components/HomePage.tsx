import React from 'react';
import { Search, Users, Mic, Camera, QrCode, Upload, ChevronRight, Home, Settings } from 'lucide-react';
import { Input } from './ui/input';
import { Globe } from './Globe';

interface HomePageProps {
  onNavigateToContacts: () => void;
}

export function HomePage({ onNavigateToContacts }: HomePageProps) {
  return (
    <>
      {/* Globe Design Element */}
      <Globe />

      {/* Header */}
      <div className="relative z-10 px-7 pt-8 pb-4">
        <h1 className="text-[56px] leading-[0.95] text-[#1d1d1f] tracking-tight mb-2 mt-6" style={{ fontWeight: 700 }}>
          Network
        </h1>
        <p className="text-[17px] text-[#86868b] tracking-tight mb-4" style={{ fontWeight: 500 }}>
          <span className="font-numeric">246</span> Connections
        </p>

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" strokeWidth={2.5} />
          <Input
            type="text"
            placeholder="Ask about your network"
            className="w-full bg-white/80 backdrop-blur-sm border-0 pl-14 pr-14 py-5 text-[19px] text-[#1d1d1f] placeholder:text-[#86868b] focus-visible:ring-0 tracking-tight rounded-[20px] shadow-sm transition-all duration-200"
            style={{ fontWeight: 400 }}
          />
          <button className="absolute right-5 top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 active:scale-95">
            <div className="w-7 h-7 rounded-full bg-[#efeff4] hover:bg-[rgba(189,255,8,0.73)] transition-all duration-200 flex items-center justify-center">
              <Search className="w-4 h-4 text-[#1d1d1f]" strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* All Contacts Button */}
        <button className="group w-full" onClick={onNavigateToContacts}>
          <div className="bg-white rounded-[20px] p-4 shadow-sm hover:shadow-md transition-all duration-200 text-left hover:bg-[rgba(106,106,108,0.5)] active:bg-[rgba(74,74,76,0.6)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[rgb(72,72,74)] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="text-[#1d1d1f] text-[15px]" style={{ fontWeight: 700 }}>
                  All Contacts
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#86868b]" strokeWidth={2} />
            </div>
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-7 pb-6 space-y-3">
        
        {/* Add Contact Header */}
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-[12px] text-[#86868b] tracking-wide whitespace-nowrap" style={{ fontWeight: 600 }}>
            ADD CONTACT
          </h2>
          <div className="h-px bg-[#86868b]/20 flex-1"></div>
        </div>

        {/* Action Cards Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-2.5">
          
          {/* Voice Input */}
          <button className="group">
            <div className="bg-white rounded-[20px] p-5 shadow-sm hover:shadow-md transition-all duration-200 text-left h-[135px] flex flex-col justify-between hover:bg-[rgba(189,255,8,0.73)]">
              <div className="w-11 h-11 rounded-xl bg-[#efeff4] flex items-center justify-center mb-2">
                <Mic className="w-5 h-5 text-[#86868b]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[#1d1d1f] text-[15px] mb-0.5" style={{ fontWeight: 700 }}>
                  Voice Input
                </div>
                <div className="text-[#86868b] text-[12px]" style={{ fontWeight: 500 }}>
                  Speak to add...
                </div>
              </div>
            </div>
          </button>

          {/* Camera */}
          <button className="group">
            <div className="bg-white rounded-[20px] p-5 shadow-sm hover:shadow-md transition-all duration-200 text-left h-[135px] flex flex-col justify-between hover:bg-[rgba(189,255,8,0.73)]">
              <div className="w-11 h-11 rounded-xl bg-[#efeff4] flex items-center justify-center mb-2">
                <Camera className="w-5 h-5 text-[#86868b]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[#1d1d1f] text-[15px] mb-0.5" style={{ fontWeight: 700 }}>
                  Camera
                </div>
                <div className="text-[#86868b] text-[12px]" style={{ fontWeight: 500 }}>
                  Scan card...
                </div>
              </div>
            </div>
          </button>

          {/* QR Code */}
          <button className="group">
            <div className="bg-white rounded-[20px] p-5 shadow-sm hover:shadow-md transition-all duration-200 text-left h-[135px] flex flex-col justify-between hover:bg-[rgba(189,255,8,0.73)]">
              <div className="w-11 h-11 rounded-xl bg-[#efeff4] flex items-center justify-center mb-2">
                <QrCode className="w-5 h-5 text-[#86868b]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[#1d1d1f] text-[15px] mb-0.5" style={{ fontWeight: 700 }}>
                  QR Code
                </div>
                <div className="text-[#86868b] text-[12px]" style={{ fontWeight: 500 }}>
                  Scan digital...
                </div>
              </div>
            </div>
          </button>

          {/* All Contacts */}
          <button className="group" onClick={onNavigateToContacts}>
            <div className="bg-white rounded-[20px] p-5 shadow-sm hover:shadow-md transition-all duration-200 text-left h-[135px] flex flex-col justify-between hover:bg-[rgba(189,255,8,0.73)]">
              <div className="w-11 h-11 rounded-xl bg-[#efeff4] flex items-center justify-center mb-2">
                <Upload className="w-5 h-5 text-[#86868b]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[#1d1d1f] text-[15px] mb-0.5" style={{ fontWeight: 700 }}>
                  Upload Photo
                </div>
                <div className="text-[#86868b] text-[12px]" style={{ fontWeight: 500 }}>
                  Import card
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Navigation - Home Page Only */}
      <div className="relative z-10 px-7 py-5">
        {/* Navigation Container */}
        <div className="flex items-center justify-center">
          {/* Centered Pill Navigation with 2 buttons */}
          <div className="flex items-center gap-2 bg-[#1a1a1a]/10 rounded-full p-1.5 shadow-lg">
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 bg-[rgba(169,255,8,0.61)]"
            >
              <Home className="w-5 h-5 text-[#1a1a1a]" />
            </button>
            
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 bg-transparent hover:bg-white/10"
            >
              <Settings className="w-5 h-5 text-black transition-colors duration-200" />
            </button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center mt-3">
          <div className="w-32 h-1 bg-[#1a1a1a]/20 rounded-full"></div>
        </div>
      </div>
    </>
  );
}