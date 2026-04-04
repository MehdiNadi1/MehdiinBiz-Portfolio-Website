import React from "react";
import { cn } from "../utils/cn";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg bg-[#222222] border border-white/10 px-4 py-3 text-sm text-[#F5F5F5] transition-colors placeholder:text-[#888888] focus-visible:outline-none focus-visible:border-[#FACC15] focus-visible:ring-1 focus-visible:ring-[#FACC15] disabled:cursor-not-allowed disabled:opacity-50 resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
