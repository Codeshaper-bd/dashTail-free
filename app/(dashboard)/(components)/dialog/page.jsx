"use client";
import Card from "@/components/ui/card-snippet";
import BasicDialog from "./basic-dialog";
import DialogForm from "./dialog-form";
import {
  basicDialog,
  formModal,
} from "./source-code";
const DialogPage = () => {
  return (
    <div className="space-y-6">
      <Card title="Basic Modal" code={basicDialog}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          No need to provide props for our default modal.
        </p>
        <BasicDialog />
      </Card>

      <Card title="Form" code={formModal}>
        <div className="mb-4">
          <p className="text-sm text-default-500 ">
            Use <span className="text-primary">form</span> in modal.
          </p>
        </div>
        <div className="flex flex-wrap  gap-x-5 gap-y-4 ">
          <DialogForm />
        </div>
      </Card>
    </div>
  );
};

export default DialogPage;
