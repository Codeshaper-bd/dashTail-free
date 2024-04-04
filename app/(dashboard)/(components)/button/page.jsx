"use client";
import React from "react";
import Card from "@/components/ui/card-snippet";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

import {
  defaultButton,
  sizeButton,
  outlineButton,
  raisedButton,
  roundedButton,
  roundedOutline,
  softButton,
  ghostButton,
  disabledButton,
  iconButton,
  loaderButton,
  blockButton,
  socialButton,
  socialIconButton,
  toggleButton,
} from "./source-code";
import DefaultButton from "./default-button";
import OutlineButton from "./outline-button";
import SoftButton from "./soft-button";
import GhostButton from "./ghost-button";
import IconButton from "./icon-button";
import LoaderButton from "./loader-button";

const ButtonPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Default Buttons" code={defaultButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change the background colo of the Button.
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <DefaultButton />
        </div>
      </Card>

      <Card title="Outline Buttons" code={outlineButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> variant="outline" </code> prop is
          used to for Outline Button
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <OutlineButton />
        </div>
      </Card>


      <Card title="Soft Buttons" code={softButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant='soft'</code> prop is used
          to change for soft color
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <SoftButton />
        </div>
      </Card>
      <Card title="Ghost Buttons" code={ghostButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant='ghost'</code> prop is used
          to change for soft color
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <GhostButton />
        </div>
      </Card>

      <Card title="Icon Buttons" code={iconButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">size='icon'</code> props design
          size of the button as icon
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <IconButton />
        </div>
      </Card>
      <Card title="Loading" code={loaderButton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Loader</code> component design the
          button as loading button
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <LoaderButton />
        </div>
      </Card>
    </div>
  );
};

export default ButtonPage;
