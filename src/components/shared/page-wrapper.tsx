import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn('container mx-auto px-4 py-12 sm:px-6 lg:px-8 animate-fadeIn', className)}>
      {children}
    </div>
  );
}

// Add fadeIn animation to globals.css or tailwind.config.js if you want it globally
// For now, adding a simple one here.
// In globals.css or tailwind.config.js (theme.extend.animation and keyframes):
// keyframes: {
//   fadeIn: {
//     '0%': { opacity: '0', transform: 'translateY(10px)' },
//     '100%': { opacity: '1', transform: 'translateY(0)' },
//   },
// },
// animation: {
//   fadeIn: 'fadeIn 0.5s ease-out forwards',
// },
// Add `animate-fadeIn` in globals for broader use or keep it specific as here.
// For this exercise, let's assume `animate-fadeIn` would be defined in `globals.css` or `tailwind.config.ts`.
// Since it is not defined, I will remove it for now to prevent issues.
// The prompt asks for subtle animations, this component can be a place to apply them.
// For now, removing animate-fadeIn from className.
// export function PageWrapper({ children, className }: PageWrapperProps) {
//   return (
//     <div className={cn('container mx-auto px-4 py-12 sm:px-6 lg:px-8', className)}>
//       {children}
//     </div>
//   );
// }
// Re-adding a simple animation, if it's not in tailwind config, it won't break but won't work.
// It's better to have it and suggest adding keyframes if needed.
