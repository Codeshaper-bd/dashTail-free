import * as React from "react";

import { cn } from "@/lib/utils";

import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  "flex flex-1 bg-background w-full min-h-[80px] rounded-md border px-3 py-[10px] text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  read-only:bg-background  disabled:cursor-not-allowed disabled:opacity-50  transition duration-300 ",
  {
    variants: {
      color: {
        default:
          "border-default-300 text-default-500 focus:outline-none focus:border-primary disabled:bg-default-200  placeholder:text-accent-foreground/50",
        primary:
          "border-primary text-primary focus:outline-none focus:border-primary-700 disabled:bg-primary/30 disabled:placeholder:text-primary  placeholder:text-primary/70",
        destructive:
          "border-destructive/50 text-destructive focus:outline-none focus:border-destructive-700 disabled:bg-destructive/30 disabled:placeholder:text-destructive  placeholder:text-destructive/70",
      }
    },

    defaultVariants: {
      color: "default",
    },
  }
);

const Textarea = React.forwardRef(
  ({ className, color, children, ...props }, ref) => {
    return (
      <div className="flex-1 w-full">
        <textarea
          className={cn(
            textareaVariants({ color, }),
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </textarea>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
