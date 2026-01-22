import React from 'react';
import { ArrowLeft, Mail, Phone, MessageSquare, Globe as GlobeIcon, Linkedin, Copy, ExternalLink } from 'lucide-react';

interface ContactProfilePageProps {
  onBack: () => void;
}

export function ContactProfilePage({ onBack }: ContactProfilePageProps) {
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
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-7 pb-6 overflow-y-auto">
        
        {/* Profile Header */}
        <div className="text-center mb-5">
          {/* Avatar */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#efeff4] mb-3">
            <span className="text-[28px] text-[#48484a] tracking-tight" style={{ fontWeight: 700 }}>
              SC
            </span>
          </div>
          
          {/* Name */}
          <h1 className="text-[28px] text-[#1d1d1f] tracking-tight mb-1" style={{ fontWeight: 700 }}>
            Sarah Chen
          </h1>
          
          {/* Job Title */}
          <p className="text-[13px] text-[#86868b] tracking-tight mb-0.5" style={{ fontWeight: 600 }}>
            Senior Product Manager
          </p>
          
          {/* Company */}
          <p className="text-[12px] text-[#86868b] tracking-tight mb-2" style={{ fontWeight: 500 }}>
            TechCorp Innovation
          </p>
          
          {/* Added Date */}
          <div className="inline-block bg-[rgba(169,255,8,0.73)] rounded-full px-3 py-1">
            <p className="text-[10px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 600 }}>
              Added Jan 15, 2024
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 mb-5">
          <button className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#48484a]" strokeWidth={2} />
            </div>
            <span className="text-[10px] text-[#86868b] tracking-tight" style={{ fontWeight: 600 }}>Email</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#48484a]" strokeWidth={2} />
            </div>
            <span className="text-[10px] text-[#86868b] tracking-tight" style={{ fontWeight: 600 }}>Call</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-[#48484a]" strokeWidth={2} />
            </div>
            <span className="text-[10px] text-[#86868b] tracking-tight" style={{ fontWeight: 600 }}>Message</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <GlobeIcon className="w-5 h-5 text-[#48484a]" strokeWidth={2} />
            </div>
            <span className="text-[10px] text-[#86868b] tracking-tight" style={{ fontWeight: 600 }}>Website</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-[#48484a]" strokeWidth={2} />
            </div>
            <span className="text-[10px] text-[#86868b] tracking-tight" style={{ fontWeight: 600 }}>LinkedIn</span>
          </button>
        </div>

        {/* Contact Information Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[rgba(169,255,8,0.73)]"></div>
            <h2 className="text-[14px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
              Contact Information
            </h2>
          </div>

          <div className="bg-white rounded-[20px] p-4 space-y-3">
            {/* Email */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2 flex-1">
                <Mail className="w-4 h-4 text-[#86868b] mt-0.5" strokeWidth={2} />
                <div className="flex-1">
                  <p className="text-[10px] text-[#86868b] tracking-tight mb-0.5" style={{ fontWeight: 600 }}>EMAIL</p>
                  <p className="text-[12px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 500 }}>sarah.chen@techcorp.com</p>
                </div>
              </div>
              <button className="bg-[#efeff4] rounded-[10px] px-3 py-1.5 text-[11px] text-[#48484a] tracking-tight hover:opacity-70 transition-opacity min-w-[52px]" style={{ fontWeight: 700 }}>
                Copy
              </button>
            </div>

            <div className="border-t border-[#efeff4]"></div>

            {/* Phone */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2 flex-1">
                <Phone className="w-4 h-4 text-[#86868b] mt-0.5" strokeWidth={2} />
                <div className="flex-1">
                  <p className="text-[10px] text-[#86868b] tracking-tight mb-0.5" style={{ fontWeight: 600 }}>PHONE</p>
                  <p className="text-[12px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 500 }}>+1 (650) 123-4567</p>
                </div>
              </div>
              <button className="bg-[#efeff4] rounded-[10px] px-3 py-1.5 text-[11px] text-[#48484a] tracking-tight hover:opacity-70 transition-opacity min-w-[52px]" style={{ fontWeight: 700 }}>
                Call
              </button>
            </div>

            <div className="border-t border-[#efeff4]"></div>

            {/* LinkedIn */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2 flex-1">
                <Linkedin className="w-4 h-4 text-[#86868b] mt-0.5" strokeWidth={2} />
                <div className="flex-1">
                  <p className="text-[10px] text-[#86868b] tracking-tight mb-0.5" style={{ fontWeight: 600 }}>LINKEDIN</p>
                  <p className="text-[12px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 500 }}>www.linkedin.com/in/sarah</p>
                </div>
              </div>
              <button className="bg-[#efeff4] rounded-[10px] px-3 py-1.5 text-[11px] text-[#48484a] tracking-tight hover:opacity-70 transition-opacity min-w-[52px]" style={{ fontWeight: 700 }}>
                Visit
              </button>
            </div>

            <div className="border-t border-[#efeff4]"></div>

            {/* Website */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2 flex-1">
                <GlobeIcon className="w-4 h-4 text-[#86868b] mt-0.5" strokeWidth={2} />
                <div className="flex-1">
                  <p className="text-[10px] text-[#86868b] tracking-tight mb-0.5" style={{ fontWeight: 600 }}>WEBSITE</p>
                  <p className="text-[12px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 500 }}>techcorp.com</p>
                </div>
              </div>
              <button className="bg-[#efeff4] rounded-[10px] px-3 py-1.5 text-[11px] text-[#48484a] tracking-tight hover:opacity-70 transition-opacity min-w-[52px]" style={{ fontWeight: 700 }}>
                Visit
              </button>
            </div>

            <div className="border-t border-[#efeff4]"></div>

            {/* Location */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2 flex-1">
                <ExternalLink className="w-4 h-4 text-[#86868b] mt-0.5" strokeWidth={2} />
                <div className="flex-1">
                  <p className="text-[10px] text-[#86868b] tracking-tight mb-0.5" style={{ fontWeight: 600 }}>LOCATION</p>
                  <p className="text-[12px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 500 }}>San Francisco, CA</p>
                </div>
              </div>
              <button className="bg-[#efeff4] rounded-[10px] px-3 py-1.5 text-[11px] text-[#48484a] tracking-tight hover:opacity-70 transition-opacity min-w-[52px]" style={{ fontWeight: 700 }}>
                Map
              </button>
            </div>
          </div>
        </div>

        {/* Your Memory Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[rgba(169,255,8,0.73)]"></div>
              <h2 className="text-[14px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
                Memory
              </h2>
            </div>
            <button className="bg-[#efeff4] rounded-[10px] px-3 py-1.5 text-[11px] text-[#48484a] tracking-tight hover:opacity-70 transition-opacity min-w-[52px]" style={{ fontWeight: 700 }}>
              + Add
            </button>
          </div>
        </div>

        {/* Personal Notes Section */}
        <div className="mb-4">
          <div className="bg-white rounded-[20px] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[rgba(8,99,255,0.78)]"></div>
                <h2 className="text-[14px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
                  Personal Notes
                </h2>
              </div>
              <button className="bg-[#efeff4] rounded-[10px] px-3 py-1.5 text-[11px] text-[#48484a] tracking-tight hover:opacity-70 transition-opacity min-w-[52px]" style={{ fontWeight: 700 }}>
                Edit
              </button>
            </div>

            <p className="text-[12px] text-[#1d1d1f] leading-relaxed tracking-tight mb-3" style={{ fontWeight: 400 }}>
              Sarah mentioned they're exploring new AI applications for fintech. Mentioned they're exploring partnerships w/ digital identity verification using AI. Really knowledgeable about regulatory compliance in the financial sector. Great network w/ VCs on West Coast. Her company just mentioned our AI capabilities. Should follow up on potential partnership opportunities.
            </p>
            <p className="text-[10px] text-[#86868b] tracking-tight" style={{ fontWeight: 500 }}>
              remembered Jan 15,2024 at 2:30 PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
}