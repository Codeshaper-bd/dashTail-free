"use client";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ColorAlert = () => {
  return (
    <div className="space-y-4 ">
      <Alert >
        <AlertDescription>
          I'm an alert with destructive background color.!
        </AlertDescription>
      </Alert>
      <Alert color="destructive">
        <AlertDescription>
          I'm an alert with destructive background color.!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default ColorAlert;
