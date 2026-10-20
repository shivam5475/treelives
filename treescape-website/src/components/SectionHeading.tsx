import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <span className="text-sm font-semibold tracking-[0.2em] text-amber-700 uppercase mb-3 block">
          {eyebrow}
        </span>
      )}
      
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 tracking-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
