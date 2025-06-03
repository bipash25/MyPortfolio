
// src/components/shared/decorative-blob.tsx
import { cn } from '@/lib/utils';

export const blobPath1 = "M48.4,-59.8C62.9,-48.9,75.1,-33.9,79.7,-16.7C84.4,0.5,81.5,20,70.9,34.8C60.3,49.5,42.1,59.5,24.9,66.1C7.8,72.7,-8.2,75.9,-22.9,70.7C-37.5,65.5,-50.8,51.9,-59.3,36.7C-67.8,21.5,-71.6,4.8,-68.7,-10.7C-65.9,-26.1,-56.4,-40.3,-43.8,-51.3C-31.2,-62.3,-15.6,-70.1,0.9,-71.1C17.4,-72.1,34,-66.6,48.4,-59.8Z";
export const blobPath2 = "M51.4,-47.9C64.8,-37.3,72.7,-18.7,70.9,-1.7C69.1,15.3,57.6,30.6,43.8,43.3C30,56,15,66.2,-2.2,68.1C-19.4,70,-38.9,63.7,-51.2,50.5C-63.5,37.3,-68.7,17.1,-65.8,-2.2C-62.9,-21.5,-51.9,-39.9,-37.6,-50.2C-23.3,-60.5,-11.6,-62.7,3.1,-60.1C17.8,-57.5,37.9,-58.5,51.4,-47.9Z";
export const blobPath3 = "M39.5,-48.2C53.7,-42.4,69.3,-33,75.3,-19.6C81.3,-6.2,77.7,11.2,68.7,23.7C59.7,36.2,45.3,43.8,31.2,52.4C17.1,61,-6.7,70.6,-27.1,66.2C-47.5,61.8,-64.4,43.5,-71.2,23.4C-78,-6.7,-74.6,-28.5,-62.3,-40.3C-50,-52.1,-29.7,-53.9,-13.1,-53.2C3.5,-52.5,20,-48.2,39.5,-48.2Z";

interface DecorativeBlobProps {
  className?: string;
  pathD: string;
  style?: React.CSSProperties;
}

export const DecorativeBlob = ({ className, pathD, style }: DecorativeBlobProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={cn("absolute -z-10 opacity-50 pointer-events-none", className)} style={style}>
    <path fill="hsl(var(--accent))" d={pathD} transform="translate(100 100) scale(1.5)"></path>
  </svg>
);
