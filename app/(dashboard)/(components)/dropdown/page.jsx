"use client";
import Card from "@/components/ui/card-snippet";
import BasicDropdown from "./default-dropdown";
import SoftDropdown from "./soft-dropdown";
import {
  defaultDropdown,
  softDropdown,
} from "./source-code";

const DropdownPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Default Dropdown" code={defaultDropdown}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant</code> prop is used to
          change the background color of the Button.
        </p>
        <div className=" flex flex-wrap gap-5">
          <BasicDropdown />
        </div>
      </Card>
      <Card title="Soft Dropdown" code={softDropdown}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant='soft'</code> prop is used
          to change for soft color
        </p>
        <div className=" flex flex-wrap gap-5">
          <SoftDropdown />
        </div>
      </Card>
    </div>
  );
};
export default DropdownPage;
