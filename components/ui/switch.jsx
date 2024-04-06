"use client";
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  "peer relative  inline-flex items-center h-5 w-[38px]  [&_.content-box>svg]:h-4  [&_.content-box>svg]:w-4  [&_.content-box]:text-primary-foreground [&_.content-box]:text-[10px] justify-start group  flex-shrink-0  cursor-pointer rounded-full  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-default-300",
  {
    variants: {
      color: {
        primary: "data-[state=checked]:bg-primary ",
        secondary: "data-[state=checked]:bg-secondary ",
        destructive: "data-[state=checked]:bg-destructive ",
      }
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

const Switch = React.forwardRef(
  (
    {
      className,
      color,
      thumbClass,
      ...props
    },
    ref
  ) => (
    <SwitchPrimitives.Root
      className={cn(switchVariants({ color }), className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none z-10 origin-right  h-4 w-4 rounded-full bg-background    shadow-lg ring-0 transition-all  flex items-center justify-center   data-[state=checked]:ml-5 data-[state=unchecked]:ml-0.5 ",
          thumbClass,
        )}
      >
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  )
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
