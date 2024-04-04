import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

//py-[10px]
export const inputVariants = cva(
  " w-full   bg-background border  border-default-300 dark:border-700  px-3 h-9 rounded-md   text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  read-only:leading-9 read-only:bg-background  disabled:cursor-not-allowed disabled:opacity-50  transition duration-300 ",
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
      color: "default"
    },
  }
);

const Input = React.forwardRef(
  (
    {
      className,
      type,
      color,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex-1 w-full">
        <input
          type={type}
          className={cn(
            inputVariants({ color }),
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
