"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef(function Avatar({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
});

const AvatarImage = React.forwardRef(function AvatarImage({ className, alt = "", ...props }, ref) {
  return <img ref={ref} alt={alt} className={cn("aspect-square h-full w-full object-cover", className)} {...props} />;
});

const AvatarFallback = React.forwardRef(function AvatarFallback({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("flex h-full w-full items-center justify-center rounded-full bg-slate-100 text-slate-700", className)}
      {...props}
    />
  );
});

Avatar.displayName = "Avatar";
AvatarImage.displayName = "AvatarImage";
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
