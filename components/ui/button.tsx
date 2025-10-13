import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-500 focus-visible:ring-offset-2 focus-visible:ring-offset-warmGray-900 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-sunset-500 via-rose-500 to-purple-500 text-white shadow-neumorphic-sm hover:shadow-glow-sunset",
        destructive:
          "bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-neumorphic-sm hover:shadow-glow-rose",
        outline:
          "border-2 border-sunset-500 bg-warmGray-800 text-sunset-400 shadow-neumorphic-sm hover:shadow-glow-sunset hover:bg-warmGray-700",
        secondary:
          "bg-warmGray-800 text-sunset-400 shadow-neumorphic-sm hover:shadow-glow-sunset hover:bg-warmGray-700",
        ghost: "bg-transparent text-sunset-400 hover:bg-warmGray-800/50",
        link: "text-sunset-400 underline-offset-4 hover:underline hover:text-sunset-300",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-8 rounded-lg px-4 py-2 text-xs",
        lg: "h-12 rounded-lg px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
