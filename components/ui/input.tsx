import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-warmGray-700 bg-warmGray-900 px-4 py-3 text-base text-warmGray-100 shadow-neumorphic-inset-md transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-warmGray-100 placeholder:text-warmGray-500 focus-visible:outline-none focus-visible:border-sunset-500 focus-visible:shadow-glow-sunset disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
