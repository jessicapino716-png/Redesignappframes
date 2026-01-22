import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Globe } from './Globe';
import { Input } from './ui/input';

interface SignInPageProps {
  onBack?: () => void;
}

export function SignInPage({ onBack }: SignInPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      {/* Globe Design Element */}
      <Globe />

      {/* Content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-7 pt-6 pb-6">
        {/* Back Button */}
        {onBack && (
          <button 
            onClick={onBack}
            className="hover:opacity-70 transition-opacity duration-200 mb-6 -mt-2"
          >
            <ArrowLeft className="w-7 h-7 text-[#1d1d1f]" strokeWidth={2.5} />
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-[34px] text-[#1d1d1f] mb-2 mt-4 tracking-tight" style={{ fontWeight: 700 }}>
            Welcome Back
          </h1>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-[#1d1d1f] text-[15px] mb-2 tracking-tight" style={{ fontWeight: 600 }}>
            Email
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#efeff4] border-0 px-5 py-4 text-[17px] text-[#1d1d1f] placeholder:text-[#86868b] focus-visible:ring-0 tracking-tight rounded-[20px]"
            style={{ fontWeight: 400 }}
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-[#1d1d1f] text-[15px] mb-2 tracking-tight" style={{ fontWeight: 600 }}>
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full bg-[#efeff4] border-0 px-5 py-4 pr-14 text-[17px] text-[#1d1d1f] placeholder:text-[#86868b] focus-visible:ring-0 tracking-tight rounded-[20px]"
              style={{ fontWeight: 400 }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-[#48484a] transition-colors duration-200"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" strokeWidth={2} />
              ) : (
                <Eye className="w-5 h-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-2 border-[#86868b] text-[rgba(8,99,255,0.78)] focus:ring-0 focus:ring-offset-0 cursor-pointer"
            />
            <span className="text-[15px] text-[#1d1d1f] tracking-tight" style={{ fontWeight: 500 }}>
              Remember me
            </span>
          </label>
          <button className="text-[15px] text-[rgba(8,99,255,0.78)] tracking-tight hover:opacity-70 transition-opacity duration-200" style={{ fontWeight: 600 }}>
            Forgot Password?
          </button>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-[rgba(8,99,255,0.78)] text-white py-4 rounded-[20px] text-[17px] tracking-tight mb-6 hover:opacity-90 transition-opacity duration-200 shadow-sm" style={{ fontWeight: 700 }}>
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-[#efeff4]"></div>
          <span className="text-[13px] text-[#86868b] tracking-tight" style={{ fontWeight: 500 }}>
            or
          </span>
          <div className="flex-1 h-px bg-[#efeff4]"></div>
        </div>

        {/* Continue with Google */}
        <button className="w-full bg-white border-2 border-[#efeff4] text-[#1d1d1f] py-4 rounded-[20px] text-[17px] tracking-tight mb-3 hover:border-[#48484a] transition-colors duration-200 shadow-sm flex items-center justify-center gap-3" style={{ fontWeight: 600 }}>
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        {/* Continue with Apple */}
        <button className="w-full bg-white border-2 border-[#efeff4] text-[#1d1d1f] py-4 rounded-[20px] text-[17px] tracking-tight mb-6 hover:border-[#48484a] transition-colors duration-200 shadow-sm flex items-center justify-center gap-3" style={{ fontWeight: 600 }}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          Continue with Apple
        </button>

        {/* Sign Up Link */}
        <div className="text-center">
          <span className="text-[15px] text-[#86868b] tracking-tight" style={{ fontWeight: 400 }}>
            Don't have an account?{' '}
          </span>
          <button className="text-[15px] text-[rgba(8,99,255,0.78)] tracking-tight hover:opacity-70 transition-opacity duration-200" style={{ fontWeight: 700 }}>
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}