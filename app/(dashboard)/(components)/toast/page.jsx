"use client";
import React from "react";
import Card from "@/components/ui/card-snippet";
import { toast as reToast } from "react-hot-toast";
import { toast } from "@/components/ui/use-toast";
import { toast as stoast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  dangerToast,
  defaultToast,
  differentTypeToast,
} from "./source-code";



const defaultt = () =>
  toast({
    title: "You submitted the following values:",
    description: <>Life is beautiful</>,
  });
const destructive = () =>
  toast({
    title: "This is wrong",
    description: <>Please Choose Right Toast</>,
    color: "destructive",
  });

const ToasterPage = () => {
  return (
    <div className=" space-y-5">
      <div className=" space-y-5">
        <div className="text-xl pl-3 font-medium py-3">React Toast</div>
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Card title=" Default Toast" code={defaultToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The most basic variant does not have any design.
            </p>
            <div className="flex items-center justify-center">
              <Button variant="outline" onClick={defaultt}>
                {" "}
                Default Toast
              </Button>
            </div>
          </Card>
          <Card title=" Error Toast" code={dangerToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The variant does show error message with red background.
            </p>
            <div className="flex items-center justify-center">
              <Button color="destructive" onClick={destructive}>
                {" "}
                Error Toast
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div className=" space-y-5">
        <div className="text-xl pl-3 font-medium py-3">Sooner Toast</div>
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Card title="Different Type Toast" code={differentTypeToast}>
            <p className="text-sm text-default-400 dark:text-default-600  mb-4">
              The variant does show different type of message toasts.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant="outline"
                onClick={() => stoast("Event has been created")}
              >
                Default Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast.message("Event has been created", {
                    description: "Monday, January 3rd at 6:00pm",
                  })
                }
              >
                Description Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  stoast("Event has been created", {
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })
                }
              >
                Action Toast
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ToasterPage;
