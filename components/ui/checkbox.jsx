import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

const checkboxVariants = cva(
  "peer group bg-card  shrink-0 rounded h-5 w-5 [&_svg]:h-4 [&_svg]:w-4   ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:stroke-primary-foreground ",
  {
    variants: {
      color: {
        default:
          "border border-default-400 data-[state=checked]:border-primary data-[state=checked]:bg-primary  ",
        secondary:
          "border border-default-300 data-[state=checked]:bg-default-300/90 ",
        destructive:
          "border  border-default-400 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive ",
      },
    },

    defaultVariants: {
      color: "default",
    },
  }
);

const Checkbox = React.forwardRef(
  (
    {
      className,
      color,
      children,
      lineThrough,
      icon = <Check />,
      ...props
    },
    ref
  ) => (
    <>
      {children ? (
        <div className="flex items-center">
          <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
              checkboxVariants({ color }),
              className
            )}
            {...props}
          >
            <CheckboxPrimitive.Indicator
              className={cn("flex items-center justify-center text-current ")}
            >
              {icon}
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          <Label
            htmlFor={props.id}
            className={cn(
              " font-normal text-muted-foreground  flex-1 transition-colors-opacity before:transition-width motion-reduce:transition-none pl-2.5 cursor-pointer",

            )}
          >
            {children}
          </Label>
        </div>
      ) : (
        <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
            checkboxVariants({ color }),
            className
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current ")}
          >
            {icon}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      )}
    </>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
