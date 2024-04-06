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
  defaultrehToast,
  differentPositionToast,
  differentTypeToast,
  errorrehToast,
  infoToast,
  promisrehToast,
  rehcustomToast,
  rehdarkToast,
  rehemojiToast,
  rehnewlineToast,
  rehpositionToast,
  rehtailwindToast,
  rehtheamToast,
  richColorToast,
  successToast,
  successrehToast,
  warningToast,
} from "./source-code";

const defaultToasts = () => reToast("Here is your toast.");
const darkToast = () =>
  reToast("Hello Darkness!", {
    icon: "👏",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
const newLineToast = () =>
  reToast(
    "This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
    {
      duration: 6000,
    }
  );
const promiseToast = () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("foo");
      } else {
        reject("fox");
      }
    }, 1000);
  });

  return reToast.promise(myPromise, {
    loading: "Loading",
    success: "Got the data",
    error: "Error when fetching",
  });
};
const customJsx = () => {
  reToast((t) => (
    <span className="space-x-4">
      Custom and <b>bold</b>
      <Button
        size="sm"
        color="destructive"
        onClick={() => reToast.dismiss(t.id)}
      >
        Dismiss
      </Button>
    </span>
  ));
};
const themToast = () => {
  reToast.success("Look at my styles.", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
};
const tailwindClass = () => {
  reToast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-background shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
            <p className="mt-1 text-sm text-gray-500">
              Sure! 8:30pm works great!
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => reToast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
};

const defaultt = () =>
  toast({
    title: "You submitted the following values:",
    description: <>Life is beautiful</>,
  });
const success = () =>
  toast({
    title: "Success",
    color: "success",
  });
const warning = () =>
  toast({
    title: "This Could be dangerous",
    color: "warning",
  });
const destructive = () =>
  toast({
    title: "This is wrong",
    description: <>Please Choose Right Toast</>,
    color: "destructive",
  });
const info = () =>
  toast({
    title: "This is a toast",
    color: "info",
  });

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));

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
