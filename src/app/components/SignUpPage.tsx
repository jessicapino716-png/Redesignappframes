import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Input } from './ui/input';
import { Globe } from './Globe';

export function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      {/* Globe Design Element */}
      <Globe />

      {/* Header */}
      <div className="relative z-10 px-7 pt-6 pb-5">
        <p className="text-[45px] text-[#86868b] mb-1 tracking-tight" style={{ fontWeight: 500 }}>
          Welcome,
        </p>
        <h1 className="text-[56px] leading-[1.1] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 700 }}>
          Get Started
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-7 pb-6 space-y-4">
        
        {/* Email Validation Banner */}
        <div className="bg-[rgba(169,255,8,0.73)] rounded-[20px] p-5 shadow-lg">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#1d1d1f] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
            <div className="flex-1">
              <h3 className="text-[15px] text-[#1d1d1f] tracking-tight mb-1" style={{ fontWeight: 700 }}>
                Check Your Email
              </h3>
              <p className="text-[13px] text-[#1d1d1f]/90 leading-relaxed tracking-tight" style={{ fontWeight: 500 }}>
                We've sent you a verification link to validate your account. Please check your inbox and click the link to continue.
              </p>
            </div>
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-[13px] text-[#86868b] tracking-tight px-1" style={{ fontWeight: 600 }}>Email</label>
          <div className="relative">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white border-0 pl-14 pr-4 py-4 text-[17px] text-[#1d1d1f] placeholder:text-[#86868b] focus-visible:ring-0 tracking-tight rounded-[16px] shadow-sm transition-all duration-200"
              style={{ fontWeight: 400 }}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <label className="text-[13px] text-[#86868b] tracking-tight px-1" style={{ fontWeight: 600 }}>Password</label>
          <div className="relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="w-full bg-white border-0 pl-14 pr-14 py-4 text-[17px] text-[#1d1d1f] placeholder:text-[#86868b] focus-visible:ring-0 tracking-tight rounded-[16px] shadow-sm transition-all duration-200"
              style={{ fontWeight: 400 }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-[#1d1d1f] transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="space-y-2">
          <label className="text-[13px] text-[#86868b] tracking-tight px-1" style={{ fontWeight: 600 }}>Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full bg-white border-0 pl-14 pr-14 py-4 text-[17px] text-[#1d1d1f] placeholder:text-[#86868b] focus-visible:ring-0 tracking-tight rounded-[16px] shadow-sm transition-all duration-200"
              style={{ fontWeight: 400 }}
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-[#1d1d1f] transition-colors"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Create Account Button */}
        <div className="pt-2">
          <button className="w-full group">
            <div className="bg-[rgba(8,99,255,0.78)] hover:bg-[rgba(169,255,8,0.85)] rounded-[16px] py-4 transition-all duration-200 shadow-md">
              <span className="text-[#1d1d1f] text-[17px] tracking-tight" style={{ fontWeight: 600 }}>Create Account</span>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 py-2">
          <div className="flex-1 h-[1px] bg-[#86868b]/20"></div>
          <span className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 500 }}>or sign up with</span>
          <div className="flex-1 h-[1px] bg-[#86868b]/20"></div>
        </div>

        {/* Social Sign Up Options */}
        <div className="space-y-3">
          {/* Google */}
          <button className="w-full group">
            <div className="bg-white hover:bg-white/80 border-0 rounded-[16px] py-4 transition-all duration-200 shadow-sm">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-[#1d1d1f] text-[17px] tracking-tight" style={{ fontWeight: 600 }}>Sign up with Google</span>
              </div>
            </div>
          </button>

          {/* Apple */}
          <button className="w-full group">
            <div className="bg-white hover:bg-white/80 border-0 rounded-[16px] py-4 transition-all duration-200 shadow-sm">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-[#1d1d1f]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="text-[#1d1d1f] text-[17px] tracking-tight" style={{ fontWeight: 600 }}>Sign up with Apple</span>
              </div>
            </div>
          </button>
        </div>

        {/* Terms and Sign In */}
        <div className="text-center pt-3 space-y-2.5">
          <p className="text-[12px] text-[#86868b] leading-relaxed tracking-tight">
            By continuing, you agree to our{' '}
            <button className="text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors" style={{ fontWeight: 600 }}>Terms</button>
            {' '}and{' '}
            <button className="text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors" style={{ fontWeight: 600 }}>Privacy Policy</button>
          </p>
          <p className="text-[15px] text-[#86868b] tracking-tight">
            Already have an account?{' '}
            <button className="text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors" style={{ fontWeight: 600 }}>Sign in</button>
          </p>
        </div>
      </div>
    </>
  );
}