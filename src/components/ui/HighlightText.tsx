import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  variant?: 'solid' | 'gradient';
}

const colorMap = {
  primary: 'text-indigo-500',
  secondary: 'text-purple-500',
  accent: 'text-pink-500',
  success: 'text-emerald-500',
  warning: 'text-amber-500',
  error: 'text-rose-500',
};

const gradientMap = {
  primary: 'bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent',
  secondary: 'bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent',
  accent: 'bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent',
  success: 'bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent',
  warning: 'bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent',
  error: 'bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent',
};

export function HighlightText({
  children,
  className,
  color = 'primary',
  variant = 'solid',
}: HighlightTextProps) {
  return (
    <span
      className={cn(
        'font-semibold',
        variant === 'solid' ? colorMap[color] : gradientMap[color],
        className
      )}
    >
      {children}
    </span>
  );
}