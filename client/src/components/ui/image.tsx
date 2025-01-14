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
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Image Debug] Loading image: ${src}`);
    }
    setCurrentSrc(src);
    setIsLoading(true);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Image Debug] Successfully loaded: ${currentSrc}`);
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Image Debug] Failed to load: ${currentSrc}, falling back to: ${fallbackSrc}`);
    }
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div className={cn("relative inline-block", className)}>
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
          error && "opacity-50"
        )}
        alt={alt}
        src={currentSrc}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}