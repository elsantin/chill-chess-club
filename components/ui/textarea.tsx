import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-warmGray-700 bg-warmGray-900 px-4 py-3 text-base text-warmGray-100 shadow-neumorphic-inset-md transition-all duration-300 placeholder:text-warmGray-500 focus-visible:outline-none focus-visible:border-sunset-500 focus-visible:shadow-glow-sunset disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
