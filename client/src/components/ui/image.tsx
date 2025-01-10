
import { cn } from "@/lib/utils";
import NextImage from "next/image";
import { ComponentProps } from "react";

type ImageProps = ComponentProps<"img">;

export default function Image({ className, alt, ...props }: ImageProps) {
  return (
    <img
      className={cn("", className)}
      alt={alt}
      {...props}
    />
  );
}
