import React from 'react';

interface SaladLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark'; // light background vs dark footer background
  showTagline?: boolean;
}

export const SaladLogo: React.FC<SaladLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showTagline = true,
}) => {
  const isDark = variant === 'dark';
  
  // Icon dimensions
  const iconSize = size === 'sm' ? 38 : size === 'lg' ? 56 : 46;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Circular Vector Emblem */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-full p-1 transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Arc Circle with natural sprout */}
          <circle
            cx="48"
            cy="50"
            r="40"
            stroke={isDark ? '#55A038' : '#2D6B30'}
            strokeWidth="4"
            strokeDasharray="225 35"
            strokeDashoffset="15"
            strokeLinecap="round"
          />

          {/* Right sprout / Two Leaves */}
          <path
            d="M74 38 C75 22, 88 12, 92 12 C92 18, 86 34, 76 38 Z"
            fill={isDark ? '#68BA45' : '#418B33'}
          />
          <path
            d="M66 28 C64 18, 72 10, 78 8 C77 15, 74 24, 66 28 Z"
            fill={isDark ? '#8ED96B' : '#5EAA47'}
          />

          {/* Lettuce Leaves inside Bowl */}
          {/* Back Leaves */}
          <path
            d="M30 46 C24 38, 28 26, 38 27 C42 22, 54 22, 58 28 C68 25, 76 34, 70 46 Z"
            fill={isDark ? '#66B543' : '#4E9C38'}
          />
          {/* Front Vibrant Lettuce Frills */}
          <path
            d="M34 48 C30 42, 34 33, 42 34 C46 30, 52 30, 56 34 C64 32, 68 40, 66 48 Z"
            fill={isDark ? '#82D35A' : '#68BA47'}
          />

          {/* Cucumber Slices */}
          <circle
            cx="41"
            cy="47"
            r="8.5"
            fill={isDark ? '#DCF7CF' : '#E6F8DC'}
            stroke={isDark ? '#2D6B30' : '#18471D'}
            strokeWidth="1.8"
          />
          {/* Cucumber seeds */}
          <circle cx="39" cy="46" r="0.9" fill={isDark ? '#2D6B30' : '#18471D'} />
          <circle cx="43" cy="46" r="0.9" fill={isDark ? '#2D6B30' : '#18471D'} />
          <circle cx="41" cy="49" r="0.9" fill={isDark ? '#2D6B30' : '#18471D'} />

          {/* Lime / Lemon Wedge */}
          <path
            d="M51 43 C51 36, 62 36, 64 47 C57 48, 51 46, 51 43 Z"
            fill={isDark ? '#DCF7CF' : '#E6F8DC'}
            stroke={isDark ? '#2D6B30' : '#18471D'}
            strokeWidth="1.8"
          />
          <path
            d="M54 44 C55 40, 60 40, 61 46 Z"
            fill={isDark ? '#A2E683' : '#7BC85E'}
          />

          {/* Dark Forest Green Salad Bowl */}
          <path
            d="M26 47 C28 66, 68 66, 70 47 Z"
            fill={isDark ? '#0D3820' : '#164324'}
          />
          {/* Bowl Rim highlight line */}
          <path
            d="M28 47 Q48 54 68 47"
            stroke={isDark ? '#4F9E3B' : '#73C757'}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Bowl Foot Base */}
          <path
            d="M42 64 L54 64 L52 67 L44 67 Z"
            fill={isDark ? '#0D3820' : '#164324'}
          />
        </svg>
      </div>

      {/* Typography: SALAD & Fresh Food • Healthy Life */}
      <div className="flex flex-col justify-center">
        {/* 'SALAD' with leaf in second 'A' */}
        <div className="flex items-center tracking-wide leading-none">
          <span
            className={`font-serif font-black tracking-wider transition-colors ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${isDark ? 'text-white' : 'text-[#164324]'}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '0.08em' }}
          >
            SAL
          </span>

          {/* Styled 'A' with green leaf accent */}
          <span className="relative inline-flex items-center justify-center">
            <span
              className={`font-serif font-black tracking-wider transition-colors ${
                size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              } ${isDark ? 'text-white' : 'text-[#164324]'}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '0.08em' }}
            >
              A
            </span>
            <svg
              viewBox="0 0 24 24"
              className="absolute -top-1 -right-0.5 w-3 h-3 pointer-events-none fill-current text-[#4F8F3A]"
            >
              <path d="M12 2 C16 4, 20 9, 20 15 C17 15, 12 12, 12 2 Z" />
            </svg>
          </span>

          <span
            className={`font-serif font-black tracking-wider transition-colors ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${isDark ? 'text-white' : 'text-[#164324]'}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '0.08em' }}
          >
            D
          </span>
        </div>

        {/* Tagline: Fresh Food • Healthy Life */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className={`h-[1px] w-2.5 ${isDark ? 'bg-[#55A038]/70' : 'bg-[#2D6B30]/50'}`} />
            <span
              className={`text-[9px] sm:text-[10px] font-medium tracking-tight whitespace-nowrap ${
                isDark ? 'text-[#C7EAB4]' : 'text-[#2D6B30]'
              }`}
            >
              Fresh Food <span className="mx-0.5 font-bold">•</span> Healthy Life
            </span>
            <div className={`h-[1px] w-2.5 ${isDark ? 'bg-[#55A038]/70' : 'bg-[#2D6B30]/50'}`} />
          </div>
        )}
      </div>
    </div>
  );
};
