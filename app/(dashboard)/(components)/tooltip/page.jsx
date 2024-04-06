"use client";
import React from "react";
import Card from "@/components/ui/card-snippet";
import DefaultTooltip from "./default-tooltip";
import {
  defaultTooltip,
} from "./source-code";

const TooltipPage = () => {

  return (
    <div className="space-y-5">
      <Card title="Default Tooltip" code={defaultTooltip}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">TooltipProvider </code>
          component wraps <code className="text-primary">Tooltip </code>{" "}
          component wraps
          <code className="text-primary"> TooltipTrigger</code>
          <code className="text-primary"> TooltipContent </code> to make a
          tooltip.
        </p>
        <DefaultTooltip />
      </Card>
    </div>
  );
};

export default TooltipPage;
