import React, { useState } from 'react';
import { ArrowLeft, User, Crown, Download, Upload, RefreshCw, HelpCircle, ChevronRight, Headphones, Star, Trash2, Power } from 'lucide-react';

interface SettingsPageProps {
  onBack: () => void;
}

export function SettingsPage({ onBack }: SettingsPageProps) {
  const [showSuccessBanner, setShowSuccessBanner] = useState(true);

  return (
    <>
      {/* Header */}
      <div className="relative z-10 px-7 pt-6 pb-3">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="hover:opacity-70 transition-opacity duration-200 mb-6"
        >
          <ArrowLeft className="w-7 h-7 text-[#1d1d1f]" strokeWidth={2.5} />
        </button>
        
        {/* Title */}
        <h1 className="text-[56px] leading-[0.95] text-[#1d1d1f] tracking-tight mb-8" style={{ fontWeight: 700 }}>
          Settings
        </h1>

        {/* Success Banner - Overlays on top of title */}
        {showSuccessBanner && (
          <div className="absolute top-[10px] left-7 right-7 bg-[rgba(169,255,8,0.73)] rounded-[20px] p-4 shadow-lg z-20">
            <div className="flex items-center justify-between">
              <p className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
                Export successful!
              </p>
              <button 
                onClick={() => setShowSuccessBanner(false)}
                className="text-[#1d1d1f] hover:opacity-70 transition-opacity"
              >
                <span className="text-[20px]">×</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-7 pb-6 space-y-6">
        
        {/* ACCOUNT Section */}
        <div>
          <h2 className="text-[13px] text-[rgba(8,99,255,0.78)] tracking-tight mb-3 px-1" style={{ fontWeight: 700 }}>
            ACCOUNT
          </h2>
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            {/* Edit Profile */}
            <button className="w-full group">
              <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[rgba(8,99,255,0.78)] flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                    Edit Profile
                  </h3>
                  <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                    Update name, email and avatar
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
              </div>
            </button>

            {/* Divider */}
            <div className="h-[1px] bg-[#efeff4] mx-5"></div>

            {/* Upgrade to Pro */}
            <button className="w-full group">
              <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[rgba(169,255,8,0.73)] flex items-center justify-center flex-shrink-0">
                  <Crown className="w-5 h-5 text-[#1d1d1f]" strokeWidth={2.5} />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                      Upgrade to Pro
                    </h3>
                    <span className="bg-[#ff9500] text-white text-[10px] px-2 py-0.5 rounded-md tracking-tight" style={{ fontWeight: 700 }}>
                      PREMIUM
                    </span>
                  </div>
                  <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                    Unlimited contacts
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
              </div>
            </button>
          </div>
        </div>

        {/* DATA MANAGEMENT Section */}
        <div>
          <h2 className="text-[13px] text-[rgba(8,99,255,0.78)] tracking-tight mb-3 px-1" style={{ fontWeight: 700 }}>
            DATA MANAGEMENT
          </h2>
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            {/* Export Data */}
            <button className="w-full group">
              <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[rgba(8,99,255,0.78)] flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                    Export Data
                  </h3>
                  <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                    Download all contacts and voice notes
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
              </div>
            </button>

            {/* Divider */}
            <div className="h-[1px] bg-[#efeff4] mx-5"></div>

            {/* Import Contacts */}
            <button className="w-full group">
              <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[rgba(8,99,255,0.78)] flex items-center justify-center flex-shrink-0">
                  <Upload className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                    Import Contacts
                  </h3>
                  <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                    Restore from CSV or JSON backup
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
              </div>
            </button>

            {/* Divider */}
            <div className="h-[1px] bg-[#efeff4] mx-5"></div>

            {/* Sync Contacts */}
            <button className="w-full group">
              <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[rgba(8,99,255,0.78)] flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                    Sync Contacts
                  </h3>
                  <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                    Import new contacts from your phone
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
              </div>
            </button>
          </div>
        </div>

        {/* SUPPORT & INFO Section */}
        <div>
          <h2 className="text-[13px] text-[rgba(8,99,255,0.78)] tracking-tight mb-3 px-1" style={{ fontWeight: 700 }}>
            SUPPORT & INFO
          </h2>
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            {/* Help & FAQ */}
            <button className="w-full group">
              <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[rgba(8,99,255,0.78)] flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                    Help & FAQ
                  </h3>
                  <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                    Get help with Recall Verse
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
              </div>
            </button>

            {/* Divider */}
            <div className="h-[1px] bg-[#efeff4] mx-5"></div>

            {/* Contact Support */}
            <button className="w-full group">
              <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[rgba(8,99,255,0.78)] flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                    Contact Support
                  </h3>
                  <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                    Get help from our team
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
              </div>
            </button>

            {/* Divider */}
            <div className="h-[1px] bg-[#efeff4] mx-5"></div>

            {/* Rate App */}
            <button className="w-full group">
              <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[rgba(8,99,255,0.78)] flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                    Rate App
                  </h3>
                  <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                    Help us improve Recall Verse
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
              </div>
            </button>
          </div>
        </div>

        {/* Delete Account Button */}
        <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
          <button className="w-full group">
            <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#ff3b30] flex items-center justify-center flex-shrink-0">
                <Trash2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                  Delete Account
                </h3>
                <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                  Delete your Recall Verse account
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
            </div>
          </button>
        </div>

        {/* Sign Out Button */}
        <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
          <button className="w-full group">
            <div className="flex items-center gap-4 p-5 hover:bg-[#efeff4]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#ff3b30] flex items-center justify-center flex-shrink-0">
                <Power className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
                  Sign Out
                </h3>
                <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
                  Sign out of your account
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#86868b] flex-shrink-0" strokeWidth={2} />
            </div>
          </button>
        </div>

        {/* Version Info */}
        <div className="text-center py-4 space-y-0.5">
          <p className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 600 }}>
            Recall Verse v1.0.0
          </p>
          <p className="text-[11px] text-[#86868b]/70 tracking-tight" style={{ fontWeight: 400 }}>
            Build 20241004.15
          </p>
        </div>
      </div>
    </>
  );
}