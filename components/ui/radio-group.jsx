import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
const radioVariants = cva(
  "aspect-square  [&_svg]:h-4 [&_svg]:w-4 h-5 w-5 rounded-full border border-default-400  data-[state=checked]:text-default-700  ring-offset-background  focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-default-100 disabled:border-default-400 disabled:opacity-50 [&_svg]:fill-current [&_svg]:text-current ",
  {
    variants: {
      color: {
        primary:
          "data-[state=checked]:border-primary data-[state=checked]:text-primary",
        destructive:
          "data-[state=checked]:border-destructive data-[state=checked]:text-destructive",
        secondary:
          "data-[state=checked]:border-default-300 data-[state=checked]:text-default-300",
      }
    },
    defaultVariants: {
      color: "primary",
    },
  }
);
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex flex-wrap gap-x-6 gap-y-4", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(
  (
    {
      className,
      children,
      color,
      icon = <Circle />,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {children ? (
          <div className="flex items-center  gap-2">
            <RadioGroupPrimitive.Item
              ref={ref}
              className={cn(
                radioVariants({ color, }),
                className
              )}
              {...props}
            >
              <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                {icon}
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <Label
              htmlFor={props.id}
              className="font-normal text-default-600 cursor-pointer"
            >
              {children}
            </Label>
          </div>
        ) : (
          <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
              radioVariants({ color, size, radius, variant }),
              className
            )}
            {...props}
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              {icon}
            </RadioGroupPrimitive.Indicator>
          </RadioGroupPrimitive.Item>
        )}
      </>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
