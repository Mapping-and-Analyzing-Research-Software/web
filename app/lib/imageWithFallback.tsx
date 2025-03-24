"use client"
import { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = ({ src, alt, fallbackSrc, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc(fallbackSrc);
  };

  return (
    <>
    <Image
      src={imageSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
    </>
  );
};

export default ImageWithFallback;
