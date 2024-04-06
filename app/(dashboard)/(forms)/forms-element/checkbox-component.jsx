
"use client"
import { Checkbox } from "@/components/ui/checkbox";
const CheckboxComponent = () => {
  return (
    <div className="space-y-5">
      <div className="text-sm font-medium text-default-900">Basic</div>
      <div className="flex gap-6 flex-wrap">
        <Checkbox defaultChecked id="default_1">
          Right
        </Checkbox>
        <Checkbox id="default_2">
          Wrong
        </Checkbox>
      </div>
      <div className="text-sm font-medium text-default-900">Disabled</div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="rd-1" disabled>
          Left
        </Checkbox>
        <Checkbox id="rd-2" disabled>
          Right
        </Checkbox>
      </div>
    </div>
  );
};

export default CheckboxComponent;