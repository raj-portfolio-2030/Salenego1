import React, { useState, useRef } from 'react';

interface GlassTooltipProps {
  content: string;
  title?: string;
  badge?: string;
  badgeColor?: 'blue' | 'orange';
  position?: 'top' | 'bottom';
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const GlassTooltip: React.FC<GlassTooltipProps> = ({
  content,
  title,
  badge,
  badgeColor = 'blue',
  position = 'top',
  children,
  className = '',
  containerClassName = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 80);
  };

  const isTop = position === 'top';

  return (
    <div
      className={`relative inline-block w-full ${containerClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex={0}
    >
      {children}

      {/* Tooltip Popup */}
      <div
        role="tooltip"
        aria-hidden={!isVisible}
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 z-50 w-64 sm:w-72 p-3 rounded-xl sn-glass-panel border border-[#D6D9E0]/90 shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isTop
            ? `bottom-[calc(100%+8px)] ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-2 scale-95'
              }`
            : `top-[calc(100%+8px)] ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 -translate-y-2 scale-95'
              }`
        } ${className}`}
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
        }}
      >
        {/* Header with Title and Optional Badge */}
        {(title || badge) && (
          <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-[#E8EAEE]/80">
            {title && (
              <span className="text-xs font-bold text-[#22252B] tracking-tight truncate">
                {title}
              </span>
            )}
            {badge && (
              <span
                className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded tracking-wider flex-shrink-0 ${
                  badgeColor === 'orange'
                    ? 'bg-[#FFF4ED] text-[#FF8A3D] border border-[#FFD8BF]'
                    : 'bg-[#EDF2FE] text-[#3B5BDB] border border-[#BAC8FF]'
                }`}
              >
                {badge}
              </span>
            )}
          </div>
        )}

        {/* 1-Sentence Function Description */}
        <p className="text-[11px] leading-relaxed text-[#5F6673] font-medium text-left">
          {content}
        </p>

        {/* Subtle Arrow Caret */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-[#D6D9E0]/90 rotate-45 ${
            isTop
              ? 'bottom-[-6px] border-r border-b'
              : 'top-[-6px] border-l border-t'
          }`}
        />
      </div>
    </div>
  );
};
