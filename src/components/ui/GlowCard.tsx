import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export function GlowCard({
  children,
  className,
  glowColor = 'rgba(99, 102, 241, 0.5)',
  glowIntensity = 'medium',
}: GlowCardProps) {
  const intensityMap = {
    low: '0 0 10px',
    medium: '0 0 20px',
    high: '0 0 30px',
  };

  return (
    <div
      className={cn(
        'relative rounded-lg p-6 transition-all duration-300',
        'before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-transparent before:via-transparent before:to-transparent',
        'after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-transparent after:via-transparent after:to-transparent',
        className
      )}
      style={{
        boxShadow: `${intensityMap[glowIntensity]} ${glowColor}`,
      }}
    >
      {children}
    </div>
  );
} 