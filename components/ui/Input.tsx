import React from "react";
import { cn } from "../utils/cn";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg bg-[#222222] border border-white/10 px-4 py-3 text-sm text-[#F5F5F5] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#888888] focus-visible:outline-none focus-visible:border-[#FACC15] focus-visible:ring-1 focus-visible:ring-[#FACC15] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
