import { OutputMetadata, useState } from 'react';

export interface ImageData {
  name: string;
  width?: number;
  height?: number;
  alt: string;
}

interface ImgProps {
  src: string;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * @description requires the top asset whitespace to match the shadow height. If the bottom shadow is 32px, the top asset whitespace should be 32px too.
   */
  ignoreShadow?: boolean;
  deviceBorder?: boolean;
  className?: string;
  alt?: string;
}
const pictures = import.meta.glob(`@/assets/*.{jpg,jpeg,png}`, {
  query: { format: 'avif;png', as: 'meta:src;format;aspect;width;height' },
  import: 'default',
  eager: true
});

export const Img = ({ src, alt = 'Image asset', ignoreShadow = false, deviceBorder = false }: ImgProps) => {
  // match the src to the pictures object
  const pictureSrc = Object.keys(pictures).find((key) => key.includes(src)) as string;
  const meta = pictures[pictureSrc] as OutputMetadata[];
  const pngData = meta.find((m) => m.format === 'png') as OutputMetadata;
  const avifData = meta.find((m) => m.format === 'avif') as OutputMetadata;

  return (
    <picture>
      {avifData.src && <source srcSet={avifData.src} type="image/avif" />}
      <img loading="lazy" src={pngData.src} alt={alt} width={pngData.width} height={pngData.height} />
    </picture>
  );
};
