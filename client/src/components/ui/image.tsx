import { cn } from "@/lib/utils";
import { ComponentProps, useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type ImageProps = ComponentProps<"img"> & {
  fallbackSrc?: string;
  showLoading?: boolean;
};

export default function Image({ 
  className, 
  alt, 
  src,
  fallbackSrc = "/placeholder-image.png",
  showLoading = true,
  ...props 
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Add logging for development to track image loading states
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Image loading: ${src}`);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
    if (process.env.NODE_ENV === 'development') {
      console.log(`Image loaded successfully: ${src}`);
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
    if (process.env.NODE_ENV === 'development') {
      console.log(`Image failed to load: ${src}, falling back to: ${fallbackSrc}`);
    }
    if (fallbackSrc && src !== fallbackSrc) {
      // Using direct src update instead of getElementById for more reliable fallback
      const imgElement = document.querySelector(`img[src="${src}"]`) as HTMLImageElement;
      if (imgElement) {
        imgElement.src = fallbackSrc;
      }
    }
  };

  return (
    <div className="relative inline-block">
      {showLoading && isLoading && (
        <Skeleton 
          className={cn(
            "absolute inset-0 bg-muted/50",
            className
          )} 
        />
      )}
      <img
        className={cn(
          "transition-opacity duration-200",
          isLoading && "opacity-0",
          error && "opacity-50",
          className
        )}
        alt={alt}
        src={error ? fallbackSrc : src}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}