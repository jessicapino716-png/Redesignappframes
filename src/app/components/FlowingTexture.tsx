import React from 'react';

export function FlowingTexture() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 400 844"
    >
      <defs>
        {/* Gradient for flowing lines */}
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.4 }} />
          <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: '#A8E6CF', stopOpacity: 0.1 }} />
        </linearGradient>
        
        {/* Blur filter for soft edges */}
        <filter id="softBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      
      {/* Large flowing diagonal curves */}
      <path
        d="M-50,0 Q100,100 200,80 T450,120 L450,200 Q300,180 200,160 T-50,100 Z"
        fill="url(#flowGrad)"
        opacity="0.6"
        filter="url(#softBlur)"
      />
      
      <path
        d="M-50,150 Q150,220 300,200 T550,250 L550,350 Q400,330 250,310 T-50,260 Z"
        fill="url(#flowGrad)"
        opacity="0.5"
        filter="url(#softBlur)"
      />
      
      <path
        d="M-50,350 Q120,440 280,410 T500,470 L500,570 Q350,540 220,520 T-50,460 Z"
        fill="url(#flowGrad)"
        opacity="0.55"
        filter="url(#softBlur)"
      />
      
      <path
        d="M-50,550 Q180,630 320,600 T550,670 L550,770 Q380,740 240,720 T-50,660 Z"
        fill="url(#flowGrad)"
        opacity="0.5"
        filter="url(#softBlur)"
      />
      
      <path
        d="M-50,700 Q140,790 290,760 T500,820 L500,900 Q340,870 200,850 T-50,790 Z"
        fill="url(#flowGrad)"
        opacity="0.6"
        filter="url(#softBlur)"
      />
      
      {/* Subtle sparkle dots */}
      <circle cx="320" cy="150" r="2" fill="white" opacity="0.4" />
      <circle cx="280" cy="180" r="1.5" fill="white" opacity="0.3" />
      <circle cx="340" cy="200" r="2" fill="white" opacity="0.35" />
      <circle cx="300" cy="220" r="1" fill="white" opacity="0.25" />
      
      <circle cx="250" cy="350" r="2" fill="white" opacity="0.35" />
      <circle cx="290" cy="380" r="1.5" fill="white" opacity="0.3" />
      <circle cx="310" cy="410" r="1.5" fill="white" opacity="0.3" />
      
      <circle cx="200" cy="520" r="2" fill="white" opacity="0.4" />
      <circle cx="240" cy="550" r="1" fill="white" opacity="0.25" />
      <circle cx="220" cy="580" r="1.5" fill="white" opacity="0.3" />
      
      <circle cx="180" cy="680" r="2" fill="white" opacity="0.35" />
      <circle cx="210" cy="710" r="1.5" fill="white" opacity="0.3" />
      <circle cx="190" cy="740" r="1" fill="white" opacity="0.25" />
      
      {/* Additional subtle dots scattered */}
      <circle cx="150" cy="250" r="1" fill="white" opacity="0.2" />
      <circle cx="330" cy="450" r="1.5" fill="white" opacity="0.25" />
      <circle cx="270" cy="620" r="1" fill="white" opacity="0.2" />
      <circle cx="310" cy="300" r="1" fill="white" opacity="0.2" />
      <circle cx="260" cy="480" r="1" fill="white" opacity="0.2" />
    </svg>
  );
}
