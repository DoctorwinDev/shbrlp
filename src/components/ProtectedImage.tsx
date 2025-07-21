import Image, { ImageProps } from 'next/image';
import React from 'react';

interface ProtectedImageProps extends Omit<ImageProps, 'draggable'> {
  className?: string;
  style?: React.CSSProperties;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  ...props 
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      style={{
        ...style,
        pointerEvents: 'none',
        userSelect: 'none'
      }}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onSelect={(e) => e.preventDefault()}
      {...props}
    />
  );
};

export default ProtectedImage; 