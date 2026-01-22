import React, { useState } from 'react';
import { ArrowLeft, User, Building2, Briefcase, Mail, Phone, Globe as GlobeIcon, MapPin, MessageSquare, Mic } from 'lucide-react';
import { Globe } from './Globe';

interface CreateContactPageProps {
  onBack: () => void;
}

export function CreateContactPage({ onBack }: CreateContactPageProps) {
  const [inputMode, setInputMode] = useState<'voice' | 'type'>('type');

  return (
    <>
      {/* Globe Design Element */}
      <Globe />

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
        <h1 className="text-[56px] leading-[0.95] text-[#1d1d1f] tracking-tight mb-5" style={{ fontWeight: 700 }}>
          Details
        </h1>

        {/* Input Mode Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setInputMode('voice')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-[12px] transition-all ${
              inputMode === 'voice'
                ? 'bg-[rgba(169,255,8,0.73)] text-[#1d1d1f]'
                : 'bg-white text-[#86868b]'
            }`}
          >
            <Mic className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-[13px] tracking-tight" style={{ fontWeight: 600 }}>
              Voice Input
            </span>
          </button>
          <button
            onClick={() => setInputMode('type')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-[12px] transition-all ${
              inputMode === 'type'
                ? 'bg-[rgba(169,255,8,0.73)] text-[#1d1d1f]'
                : 'bg-white text-[#86868b]'
            }`}
          >
            <span className="text-[13px] tracking-tight" style={{ fontWeight: 600 }}>
              Type Details
            </span>
          </button>
        </div>
      </div>

      {/* Main Content - Form Fields */}
      <div className="relative z-10 flex-1 px-7 pb-6 overflow-y-auto">
        <div className="space-y-3">
          
          {/* Full Name */}
          <div>
            <label className="flex items-center gap-2 text-[11px] text-[#86868b] tracking-tight mb-1.5 px-1" style={{ fontWeight: 600 }}>
              <User className="w-3.5 h-3.5" strokeWidth={2.5} />
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John"
              className="w-full bg-white rounded-[12px] px-4 py-2.5 text-[13px] text-[#1d1d1f] tracking-tight border-2 border-transparent focus:border-[rgba(169,255,8,0.73)] outline-none transition-colors"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Company */}
          <div>
            <label className="flex items-center gap-2 text-[11px] text-[#86868b] tracking-tight mb-1.5 px-1" style={{ fontWeight: 600 }}>
              <Building2 className="w-3.5 h-3.5" strokeWidth={2.5} />
              Company
            </label>
            <input
              type="text"
              defaultValue="VentureConnect Partners"
              className="w-full bg-white rounded-[12px] px-4 py-2.5 text-[13px] text-[#1d1d1f] tracking-tight border-2 border-transparent focus:border-[rgba(169,255,8,0.73)] outline-none transition-colors"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="flex items-center gap-2 text-[11px] text-[#86868b] tracking-tight mb-1.5 px-1" style={{ fontWeight: 600 }}>
              <Briefcase className="w-3.5 h-3.5" strokeWidth={2.5} />
              Job Title
            </label>
            <input
              type="text"
              defaultValue="Senior Investment Manager"
              className="w-full bg-white rounded-[12px] px-4 py-2.5 text-[13px] text-[#1d1d1f] tracking-tight border-2 border-transparent focus:border-[rgba(169,255,8,0.73)] outline-none transition-colors"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-[11px] text-[#86868b] tracking-tight mb-1.5 px-1" style={{ fontWeight: 600 }}>
              <Mail className="w-3.5 h-3.5" strokeWidth={2.5} />
              Email
            </label>
            <input
              type="email"
              defaultValue="john.smith@ventureconnect.com"
              className="w-full bg-white rounded-[12px] px-4 py-2.5 text-[13px] text-[#1d1d1f] tracking-tight border-2 border-transparent focus:border-[rgba(169,255,8,0.73)] outline-none transition-colors"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-[11px] text-[#86868b] tracking-tight mb-1.5 px-1" style={{ fontWeight: 600 }}>
              <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
              Phone
            </label>
            <input
              type="tel"
              defaultValue="+1 (310) 555-8923"
              className="w-full bg-white rounded-[12px] px-4 py-2.5 text-[13px] text-[#1d1d1f] tracking-tight border-2 border-transparent focus:border-[rgba(169,255,8,0.73)] outline-none transition-colors"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Website */}
          <div>
            <label className="flex items-center gap-2 text-[11px] text-[#86868b] tracking-tight mb-1.5 px-1" style={{ fontWeight: 600 }}>
              <GlobeIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
              Website
            </label>
            <input
              type="url"
              defaultValue="ventureconnect.com"
              className="w-full bg-white rounded-[12px] px-4 py-2.5 text-[13px] text-[#1d1d1f] tracking-tight border-2 border-transparent focus:border-[rgba(169,255,8,0.73)] outline-none transition-colors"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center gap-2 text-[11px] text-[#86868b] tracking-tight mb-1.5 px-1" style={{ fontWeight: 600 }}>
              <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
              Location
            </label>
            <input
              type="text"
              defaultValue="San Francisco, California"
              className="w-full bg-white rounded-[12px] px-4 py-2.5 text-[13px] text-[#1d1d1f] tracking-tight border-2 border-transparent focus:border-[rgba(169,255,8,0.73)] outline-none transition-colors"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Comment */}
          <div>
            <label className="flex items-center gap-2 text-[11px] text-[#86868b] tracking-tight mb-1.5 px-1" style={{ fontWeight: 600 }}>
              <MessageSquare className="w-3.5 h-3.5" strokeWidth={2.5} />
              Comment
            </label>
            <textarea
              defaultValue="John has deep contacts in the VC network in California."
              rows={2}
              className="w-full bg-white rounded-[12px] px-4 py-2.5 text-[13px] text-[#1d1d1f] tracking-tight border-2 border-transparent focus:border-[rgba(169,255,8,0.73)] outline-none transition-colors resize-none"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Save Button */}
          <div className="pt-3">
            <button className="w-full bg-[rgba(169,255,8,0.73)] hover:bg-[rgba(169,255,8,0.85)] transition-colors rounded-[16px] py-3.5 px-6 shadow-sm">
              <span className="text-[15px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
                Save
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}