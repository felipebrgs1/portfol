import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  glowIntensity?: 'low' | 'medium' | 'high';
}

const variantStyles = {
  primary: 'bg-indigo-500 hover:bg-indigo-600 text-white',
  secondary: 'bg-purple-500 hover:bg-purple-600 text-white',
  accent: 'bg-pink-500 hover:bg-pink-600 text-white',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const glowIntensityMap = {
  low: '0 0 10px',
  medium: '0 0 20px',
  high: '0 0 30px',
};

export function GlowButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  glowIntensity = 'medium',
  ...props
}: GlowButtonProps) {
  const glowColor = variant === 'primary' 
    ? 'rgba(99, 102, 241, 0.5)'
    : variant === 'secondary'
    ? 'rgba(168, 85, 247, 0.5)'
    : 'rgba(236, 72, 153, 0.5)';

  return (
    <button
      className={cn(
        'relative rounded-lg font-semibold transition-all duration-300',
        'hover:scale-[1.02] active:scale-[0.98]',
        'before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-transparent before:via-transparent before:to-transparent',
        'after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-transparent after:via-transparent after:to-transparent',
        'hover:before:from-[rgba(99,102,241,0.1)] hover:before:via-[rgba(99,102,241,0.1)] hover:before:to-[rgba(99,102,241,0.1)]',
        'hover:after:from-[rgba(99,102,241,0.1)] hover:after:via-[rgba(99,102,241,0.1)] hover:after:to-[rgba(99,102,241,0.1)]',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={{
        boxShadow: `${glowIntensityMap[glowIntensity]} ${glowColor}`,
      }}
      {...props}
    >
      {children}
    </button>
  );
} 