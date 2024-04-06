"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
const SwitchComponent = () => {
  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-default-900">Basic</div>
      <Switch defaultChecked />

      <div className="text-sm font-medium text-default-900">Switch With Label</div>

      <div className="flex items-center space-x-2.5">
        <Switch id="terms15" />
        <Label
          htmlFor="terms15"
          className="text-base text-muted-foreground  font-normal"
        >
          Click me to check switch
        </Label>
      </div>
      <div className="text-sm font-medium text-default-900">Disabled Switch</div>
      <Switch disabled />
    </div>
  );
};

export default SwitchComponent;