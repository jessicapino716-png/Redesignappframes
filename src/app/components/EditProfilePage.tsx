import React from 'react';
import { ArrowLeft, User, Briefcase, Mail, Phone, Linkedin as LinkedinIcon, Globe as GlobeIcon, MapPin } from 'lucide-react';

interface EditProfilePageProps {
  onBack: () => void;
}

export function EditProfilePage({ onBack }: EditProfilePageProps) {
  return (
    <>
      {/* Header */}
      <div className="relative z-10 px-7 pt-6 pb-3">
        <div className="flex items-center justify-between mb-4">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <ArrowLeft className="w-7 h-7 text-[#1d1d1f]" strokeWidth={2.5} />
          </button>

          {/* Title */}
          <h1 className="text-[20px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
            Edit Profile
          </h1>

          {/* Save Button */}
          <button className="bg-[rgba(8,99,255,0.78)] rounded-[10px] px-4 py-1.5 text-[13px] text-white tracking-tight hover:opacity-70 transition-opacity" style={{ fontWeight: 700 }}>
            Save
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-7 pb-6 overflow-y-auto">
        
        {/* Profile Avatar */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#efeff4] mb-3">
            <span className="text-[32px] text-[#48484a] tracking-tight" style={{ fontWeight: 700 }}>
              JB
            </span>
          </div>
          
          {/* Last Updated */}
          <p className="text-[11px] text-[#86868b] tracking-tight mb-0.5" style={{ fontWeight: 600 }}>
            Last Updated
          </p>
          <p className="text-[11px] text-[#86868b] tracking-tight" style={{ fontWeight: 500, fontFamily: 'Orbitron, sans-serif' }}>
            Aug 12, 2025 at 3:30 PM
          </p>
        </div>

        {/* Basic Information Section */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <User className="w-4 h-4 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
            <h2 className="text-[14px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 700 }}>
              Basic Information
            </h2>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-3.5 h-3.5 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
              <label className="text-[11px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 600 }}>
                Full Name
              </label>
            </div>
            <input
              type="text"
              defaultValue="Jules Boutin"
              className="w-full bg-[#48484a] text-white rounded-[15px] px-4 py-3 text-[13px] tracking-tight border-none outline-none"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Company */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-3.5 h-3.5 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
              <label className="text-[11px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 600 }}>
                Company
              </label>
            </div>
            <input
              type="text"
              defaultValue="Nexora Solutions"
              className="w-full bg-[#48484a] text-white rounded-[15px] px-4 py-3 text-[13px] tracking-tight border-none outline-none"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Job Title */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-3.5 h-3.5 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
              <label className="text-[11px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 600 }}>
                Job Title
              </label>
            </div>
            <input
              type="text"
              defaultValue="Marketing Director"
              className="w-full bg-[#48484a] text-white rounded-[15px] px-4 py-3 text-[13px] tracking-tight border-none outline-none"
              style={{ fontWeight: 500 }}
            />
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Phone className="w-4 h-4 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
            <h2 className="text-[14px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 700 }}>
              Contact Information
            </h2>
          </div>

          {/* Email */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-3.5 h-3.5 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
              <label className="text-[11px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 600 }}>
                Email
              </label>
            </div>
            <input
              type="email"
              defaultValue="jules.boutin@nexora.com"
              className="w-full bg-[#48484a] text-white rounded-[15px] px-4 py-3 text-[13px] tracking-tight border-none outline-none"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-3.5 h-3.5 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
              <label className="text-[11px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 600 }}>
                Phone
              </label>
            </div>
            <input
              type="tel"
              defaultValue="+1 (212) 987-6543"
              className="w-full bg-[#48484a] text-white rounded-[15px] px-4 py-3 text-[13px] tracking-tight border-none outline-none"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* LinkedIn */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <LinkedinIcon className="w-3.5 h-3.5 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
              <label className="text-[11px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 600 }}>
                LinkedIn
              </label>
            </div>
            <input
              type="text"
              defaultValue="www.linkedin.com/in/jules.boutin"
              className="w-full bg-[#48484a] text-white rounded-[15px] px-4 py-3 text-[13px] tracking-tight border-none outline-none"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Website */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <GlobeIcon className="w-3.5 h-3.5 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
              <label className="text-[11px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 600 }}>
                Website
              </label>
            </div>
            <input
              type="text"
              defaultValue="nexora.com"
              className="w-full bg-[#48484a] text-white rounded-[15px] px-4 py-3 text-[13px] tracking-tight border-none outline-none"
              style={{ fontWeight: 500 }}
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-3.5 h-3.5 text-[rgba(8,99,255,0.78)]" strokeWidth={2.5} />
              <label className="text-[11px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 600 }}>
                Location
              </label>
            </div>
            <input
              type="text"
              defaultValue="New York, NY"
              className="w-full bg-[#48484a] text-white rounded-[15px] px-4 py-3 text-[13px] tracking-tight border-none outline-none"
              style={{ fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}