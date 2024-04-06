"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";
import Card from "@/components/ui/card-snippet";
import { Button } from "@/components/ui/button";

const Test = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="  space-y-5">
      <Card title="Example">
        <div className="flex  space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="secondary">Primary</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="primary">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="warning">Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="warning">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="destructive">Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="destructive">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="info">Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="info">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="success">Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="success">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
      <Card title="side">
        <div className="flex  space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>bottom</Button>
              </TooltipTrigger>
              <TooltipContent color="primary" side="bottom">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>left</Button>
              </TooltipTrigger>
              <TooltipContent color="primary" side="left">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Right</Button>
              </TooltipTrigger>
              <TooltipContent color="primary" side="right">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Top</Button>
              </TooltipTrigger>
              <TooltipContent color="primary" side="top">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
      <Card title="align">
        <div className="flex  space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>start</Button>
              </TooltipTrigger>
              <TooltipContent color="primary" align="start">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>End</Button>
              </TooltipTrigger>
              <TooltipContent color="primary" align="end">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Center</Button>
              </TooltipTrigger>
              <TooltipContent color="primary" align="center">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
      <Card title="sideOffset">
        <div className="flex  space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Default Offset (0)</Button>
              </TooltipTrigger>
              <TooltipContent color="primary">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>15 Offset</Button>
              </TooltipTrigger>
              <TooltipContent color="primary" sideOffset="4">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>3 Offset</Button>
              </TooltipTrigger>
              <TooltipContent color="primary" sideOffset="3">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
      <Card title="Arrow">
        <div className="flex  space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="secondary">secondary</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
                <TooltipArrow className=" fill-secondary" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="primary">
                <p>Add to library</p>
                <TooltipArrow className=" fill-primary" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="warning">Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="warning">
                <p>Add to library</p>
                <TooltipArrow className=" fill-warning" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="destructive">Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="destructive">
                <p>Add to library</p>
                <TooltipArrow className=" fill-destructive" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="info">Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="info">
                <p>Add to library</p>
                <TooltipArrow className=" fill-info" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button color="success">Primary</Button>
              </TooltipTrigger>
              <TooltipContent color="success">
                <p>Add to library</p>
                <TooltipArrow className=" fill-success" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
      <Card title="Control">
        <div className="flex  space-x-3">
          <TooltipProvider>
            <Tooltip open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
              <TooltipTrigger asChild>
                <Button color="secondary">secondary</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="text-sm text-muted-foreground">
            Open: {isOpen ? "true" : "false"}
          </p>
        </div>
      </Card>
      <Card title="With Delay">
        <div className="flex  space-x-3">
          <TooltipProvider delayDuration={1000}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Delay Open (1000ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={2000}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Delay Open (2000ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={1000}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>then me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>
    </div>
  );
};

export default Test;
