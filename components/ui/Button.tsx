import React from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95 group",
          {
            "bg-[#FACC15] text-[#0D0D0D] hover:bg-[#EAB308] hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]": variant === "primary",
            "border border-[#FACC15] text-[#FACC15] hover:bg-[#FACC15]/10": variant === "outline",
            "text-[#F5F5F5] hover:bg-white/5 hover:text-[#FACC15]": variant === "ghost",
            "px-3 py-1.5 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
