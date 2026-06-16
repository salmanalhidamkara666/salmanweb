import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = '', size = 40 }: BrandLogoProps) {
  return (
    <img 
      src="/images/logo.png" 
      alt="Kara FX Academy Logo"
      width={size}
      height={size}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
      className={`rounded-full shrink-0 aspect-square object-cover shadow-sm shadow-emerald-950/20 group-hover:scale-105 transition-transform duration-200 ${className}`}
      id="brand-logo-img"
      referrerPolicy="no-referrer"
    />
  );
}

