interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function Image({ src, alt, className = "", ...props }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-auto ${className}`}
      loading="lazy"
      {...props}
    />
  );
}
