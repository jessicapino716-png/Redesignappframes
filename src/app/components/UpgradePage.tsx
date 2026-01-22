import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Globe } from './Globe';

interface UpgradePageProps {
  onBack?: () => void;
}

export function UpgradePage({ onBack }: UpgradePageProps) {
  return (
    <>
      {/* Globe Design Element */}
      <Globe />

      {/* Header */}
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

        {/* Premium Badge */}
        <div className="mb-4">
          <span className="inline-block bg-[rgba(8,99,255,0.78)] text-white px-4 py-2 rounded-full text-[11px] tracking-tight" style={{ fontWeight: 700 }}>
            PREMIUM
          </span>
        </div>

        {/* Title & Description */}
        <h1 className="text-[28px] text-[#1d1d1f] mb-2 tracking-tight" style={{ fontWeight: 700 }}>
          Upgrade Your Plan
        </h1>
        <p className="text-[15px] text-[#86868b] tracking-tight mb-1" style={{ fontWeight: 400 }}>
          You can add up to 10 contacts in the free plan.
        </p>
        <p className="text-[15px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
          Upgrade for unlimited access.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-7 pb-6">
        {/* Premium Plan Card */}
        <div className="bg-white rounded-[20px] p-6 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[20px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
              Premium Plan
            </h2>
            <span className="text-[24px] text-[rgba(8,99,255,0.78)] tracking-tight" style={{ fontWeight: 700 }}>
              $4.99
            </span>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[rgba(169,255,8,0.73)] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-[#1d1d1f]" strokeWidth={3} />
              </div>
              <span className="text-[15px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 500 }}>
                Unlimited memory
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[rgba(169,255,8,0.73)] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-[#1d1d1f]" strokeWidth={3} />
              </div>
              <span className="text-[15px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 500 }}>
                Priority Support
              </span>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-[#efeff4] rounded-[20px] p-5 mb-6">
          <p className="text-[11px] text-[#86868b] leading-relaxed tracking-tight" style={{ fontWeight: 400 }}>
            Payment will be charged to iTunes Account at confirmation of purchase. Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period. Account will be charged for renewal within 24-hours prior to the end of the current period, and identify the cost of the renewal. Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user's Account Settings after purchase. Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that publication, where applicable.
          </p>
        </div>

        {/* Upgrade Button */}
        <button className="w-full bg-[rgba(8,99,255,0.78)] text-white py-4 rounded-[20px] text-[17px] tracking-tight mb-4 hover:opacity-90 transition-opacity duration-200 shadow-sm" style={{ fontWeight: 700 }}>
          Upgrade Now
        </button>

        {/* Footer Links */}
        <div className="flex items-center justify-center gap-2 text-[12px] text-[#86868b] tracking-tight">
          <button className="hover:text-[#1d1d1f] transition-colors duration-200" style={{ fontWeight: 500 }}>
            Term of use
          </button>
          <span>|</span>
          <button className="hover:text-[#1d1d1f] transition-colors duration-200" style={{ fontWeight: 500 }}>
            Privacy Policy
          </button>
        </div>
      </div>
    </>
  );
}