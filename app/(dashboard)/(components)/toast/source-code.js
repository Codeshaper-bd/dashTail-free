export const defaultToast = `import { toast } from "@/components/ui/use-toast";";
const Toast = () => {
const defaulToast = () =>
  toast({
    title: "You submitted the following values:",
    description: <>Life is beautiful</>,
  });
  return <Button variant="outline" onClick={defaulToast}> Default Toast </Button>;
}
export default Toast`;

export const dangerToast = `import { toast } from "@/components/ui/use-toast";";
const Toast = () => {
const destructiveToast = () =>
  toast({
    title: "This is wrong",
    description: <>Please Choose Right Toast</>,
    variant: "destructive",
  });
  return <Button variant="outline" onClick={destructiveToast}> Default Toast </Button>;
}
export default Toast`;

export const differentTypeToast = `
"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));


const DifferentTypeToast = () => {
  return (
    <>
       <Button
        variant="outline"
        onClick={() => toast("Event has been created")}
      >
        Default Toast
      </Button>
    </>
  );
};
export default DifferentTypeToast;
`;
