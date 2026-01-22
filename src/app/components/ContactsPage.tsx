import React from 'react';
import { Search, MapPin, Upload, ArrowLeft } from 'lucide-react';
import { Input } from './ui/input';
import { Globe } from './Globe';

interface Contact {
  id: string;
  initials: string;
  name: string;
  title: string;
  company: string;
  description: string;
  avatarColor: string;
}

const contacts: Contact[] = [
  {
    id: '1',
    initials: 'SC',
    name: 'Sarah Chen',
    title: 'Senior Product Manager',
    company: 'TechVision AI',
    description: 'Met at AI Summit 2024. Expert in ML applications for fintech. Mentioned upcoming product launches. Used to work at Google. Currently leading identity verification using AI...',
    avatarColor: '#86868b'
  },
  {
    id: '2',
    initials: 'MR',
    name: 'Michael Rodriguez',
    title: 'VP of Strategic Partnerships',
    company: 'FinanceCore',
    description: 'Focused on compliance and government relations. Based in Riyadh office. Expert in MENA market regulatory compliance...',
    avatarColor: '#86868b'
  },
  {
    id: '3',
    initials: 'JW',
    name: 'Jessica Wang',
    title: 'Chief Technology Officer',
    company: 'NexGen Fintech',
    description: 'Leading AI infrastructure development. Previously at Meta. Interested in collaboration opportunities for Saudi market expansion...',
    avatarColor: '#86868b'
  }
];

interface ContactsPageProps {
  onBack?: () => void;
}

export function ContactsPage({ onBack }: ContactsPageProps) {
  return (
    <>
      {/* Header with Search */}
      <div className="relative z-10 px-7 pt-6 pb-4">
        {/* Back Button */}
        {onBack && (
          <button 
            onClick={onBack}
            className="hover:opacity-70 transition-opacity duration-200 mb-4 -mt-2"
          >
            <ArrowLeft className="w-7 h-7 text-[#1d1d1f]" strokeWidth={2.5} />
          </button>
        )}
        
        <div className="relative mb-4">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(8,99,255,0.78)] z-10" strokeWidth={2.5} />
          <Input
            type="text"
            placeholder="Search contacts"
            className="w-full bg-[#efeff4] border-0 pl-14 pr-14 py-4 text-[17px] text-[#1d1d1f] placeholder:text-[#86868b] focus-visible:ring-0 tracking-tight rounded-[20px]"
            style={{ fontWeight: 400 }}
          />
        </div>
        
        <div className="px-1">
          <p className="text-[13px] text-[#86868b] tracking-tight mb-1" style={{ fontWeight: 500 }}>
            Recent: "Who do I know in fintech AI?"
          </p>
          <h2 className="text-[17px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
            3 contacts found
          </h2>
        </div>
      </div>

      {/* Contacts List */}
      <div className="relative z-10 flex-1 overflow-y-auto px-7 pb-6 space-y-3">
        {contacts.map((contact) => (
          <div 
            key={contact.id} 
            className="bg-white rounded-[20px] p-5 transition-all duration-200 hover:shadow-md relative shadow-sm"
          >
            
            {/* Contact Header */}
            <div className="flex items-start gap-4 mb-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: '#efeff4'
                }}
              >
                <span 
                  className="text-[17px] text-[#48484a]" 
                  style={{ 
                    fontWeight: 700
                  }}
                >
                  {contact.initials}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#1d1d1f] text-[17px] mb-1 tracking-tight" style={{ fontWeight: 700 }}>{contact.name}</h3>
                <p className="text-[#86868b] text-[14px] tracking-tight mb-0.5" style={{ fontWeight: 600 }}>{contact.title}</p>
                <p className="text-[#86868b] text-[14px] tracking-tight" style={{ fontWeight: 500 }}>{contact.company}</p>
              </div>
            </div>

            {/* Memory Tag */}
            <div className="mb-3">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#efeff4] hover:bg-[#e5e5ea] transition-colors duration-200">
                <MapPin className="w-3.5 h-3.5 text-[#86868b]" />
                <span className="text-[#86868b] text-[12px] tracking-tight" style={{ fontWeight: 600 }}>Memory Found</span>
              </button>
            </div>

            {/* Description */}
            <div className="bg-[#48484a] rounded-[15px] p-4">
              <p className="text-white text-[14px] leading-relaxed tracking-tight" style={{ fontWeight: 400 }}>
                {contact.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}