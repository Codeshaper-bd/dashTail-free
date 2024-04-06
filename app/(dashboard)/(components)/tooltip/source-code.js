export const defaultTooltip = `"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const DefaultTooltip = () => {
  return (
    <div className="flex  justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="secondary">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>I am a Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default DefaultTooltip;
`;
