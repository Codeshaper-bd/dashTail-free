"use client";

import Card from "@/components/ui/card-snippet";
import RightSideSheet from "./right-slide-sheet";
import LeftSideSheet from "./left-slide-sheet";
import TopSideSheet from "./top-slide-sheet";
import BottomSideSheet from "./bottom-slide-sheet";
import SubmitFormInSheet from "./submitform-sheet";
import {
  basicSheet,
  submitFormInSheet,
} from "./source-code";
const SheetPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Basic Sheet" code={basicSheet}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> Sheet</code> component wraps the.{" "}
          <code className="text-primary">
            SheetTrigger, SheetContent, SheetHeader, SheetTitle,
            SheetDescription , SheetFooter, SheetClose
          </code>{" "}
          component to make sheet and wrap it as necessary to make sheet close.{" "}
          <code className="text-primary">side</code> props helps to identify
          from where the sheet will come from.
        </p>
        <div className="flex flex-wrap gap-5">
          <TopSideSheet />
          <BottomSideSheet />
          <RightSideSheet />
          <LeftSideSheet />
        </div>
      </Card>
      <Card title="Submit Form In Sheet" code={submitFormInSheet}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Adding component to the sheet like a form. Give extra facility to so
          that this could help the user to add information.
        </p>
        <div className="space-x-5">
          <SubmitFormInSheet />
        </div>
      </Card>
    </div>
  );
};

export default SheetPage;
