import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const sliderVariants = cva(
  "relative flex w-full touch-none select-none h-2 rounded-lg  items-center   data-[disabled]:opacity-50 data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-full  data-[orientation=vertical]:flex-col   ",
  {
    variants: {
      color: {
        primary:
          "[&_.range]:bg-primary  [&_.range-thumb]:border-secondary [&_.range-thumb]:drop-shadow-sm [&_.range-thumb]:bg-primary  focus-visible:[&_.range-thumb]:bg-primary",
        destructive:
          "[&_.range]:bg-destructive [&_.range-thumb]:border-secondary [&_.range-thumb]:drop-shadow-sm [&_.range-thumb]:bg-destructive  focus-visible:[&_.range-thumb]:bg-destructive",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

const Slider = React.forwardRef(
  (
    {
      className,
      color,
      showTooltip,
      showSteps,
      step = 1,
      marks = [],
      ...props
    },
    ref
  ) => {
    const steps = showSteps
      ? Math.floor((props.max - props.min) / step) + 1
      : 0;
    const value = props.value || props.defaultValue;
    // step props

    // tooltip value
    const [mappedValues, setMappedValues] = React.useState(() =>
      props.defaultValue !== undefined
        ? [Math.round(props.defaultValue[0] ?? 0)]
        : [0]
    );

    const getStepProps = (index) => {
      const innerValue = index * step + props.min;
      const maxMappedValue = Math.max(...mappedValues);
      const isInRange = innerValue <= maxMappedValue;

      const range = props.max - props.min;
      const percent = ((innerValue - props.min) / range) * 100;

      return {
        className: cn(
          "h-1.5 w-1.5 absolute rounded-full  bg-default-300/50  data-[in-range=true]:bg-background/70 top-1/2 -translate-x-1/2 -translate-y-1/2",
          {
            "h-1 w-1": size === "sm",
          }
        ),
        "data-in-range": isInRange ? "true" : "false",

        style: {
          [props.orientation === "vertical" ? "bottom" : "left"]: `${percent}%`,
        },
      };
    };
    const getMarksProps = (index) => {
      const { min, max } = props;
      const mark = marks[index];
      const percent = ((mark.value - min) / (max - min)) * 100;
      const isInRange = mark.value <= max;

      return {
        className: cn("absolute   text-default-500 mt-2", {
          " top-full": props.orientation !== "vertical",
          " left-full ml-3 ": props.orientation === "vertical",
        }),
        "data-in-range": isInRange ? "true" : "false",
        style: {
          [props.orientation === "vertical" ? "top" : "left"]: `${percent}%`,
        },
      };
    };

    return (
      <>
        <SliderPrimitive.Root
          ref={ref}
          className={cn(sliderVariants({ color }), className)}
          onValueChange={(newValues) => {
            console.log(newValues);
            const roundedValue = Math.round(newValues[0]);

            const newMappingValue = [roundedValue];
            setMappedValues(newMappingValue);
          }}
          {...props}
        >
          <SliderPrimitive.Track
            className={cn(
              "relative w-full grow overflow-hidden rounded-full bg-secondary h-full"
            )}
          >
            <SliderPrimitive.Range
              className={cn("absolute    range", {
                "w-full": props.orientation === "vertical",
                "h-full": props.orientation !== "vertical",
              })}
            />
            {Number.isFinite(steps) &&
              Array.from({ length: steps }, (_, index) => (
                <div key={index + 1} {...getStepProps(index)} />
              ))}
          </SliderPrimitive.Track>

          {value.map((nn, index) => {
            return (
              <React.Fragment key={`slider-${index}`}>
                {showTooltip ? (
                  <TooltipProvider disableHoverableContent>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SliderPrimitive.Thumb
                          key={index}
                          className="block h-5 w-5  cursor-pointer rounded-full border-2 range-thumb ring-offset-background transition-colors focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50 "
                        />
                      </TooltipTrigger>
                      <TooltipContent variant={color}>
                        {mappedValues[index]}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <SliderPrimitive.Thumb
                    key={index}
                    className="block h-5 w-5 cursor-pointer rounded-full ring-2 ring-background range-thumb  focus-visible:ring-4 ring-offset-background transition-colors focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50 "
                  />
                )}
              </React.Fragment>
            );
          })}
          {marks?.length > 0 &&
            marks.map((mark, index) => (
              <div key={index} {...getMarksProps(index)}>
                {mark.label}
              </div>
            ))}
        </SliderPrimitive.Root>
      </>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
