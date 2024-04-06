"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));
const SoonerToastDemo = () => {
  return (
    <>
      <Button
        variant="outline"
        onClick={() => toast("Event has been created")}
      >
        Default
      </Button>
    </>
  );
};

export default SoonerToastDemo;
