import React from "react";
import { cn } from "../utils/cn";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[#1A1A1A]/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:border-[#F97316]/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] hover:-translate-y-1 relative overflow-hidden group",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
