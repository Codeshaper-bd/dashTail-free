import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      color: {
        default: "border-transparent bg-primary text-primary-foreground ",
        destructive:
          "bg-destructive border-transparent text-destructive-foreground",
        
        secondary: "bg-secondary border-transparent text-foreground ",
      },
      variant: {
        outline: "border border-current bg-background  ",
       
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

function Badge({ className, color, variant, ...props }) {
  return (
    <div
      className={cn(badgeVariants({ color, variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
