
"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const RadioComponent = () => {
  return (
    <div className="space-y-5">
      <div className="text-sm font-medium text-default-900">Basic</div>
      <RadioGroup
        defaultValue="right"
      >
        <RadioGroupItem value="right" id="r_1" color="default">
          Right
        </RadioGroupItem>
        <RadioGroupItem value="Wrong" id="r_2">
          wrong
        </RadioGroupItem>
      </RadioGroup>
      <div className="text-sm font-medium text-default-900">Disabled</div>
      <RadioGroup
        defaultValue="rb1"
        disabled
      >
        <RadioGroupItem value="rb1" id="rb1">
          Checked
        </RadioGroupItem>
        <RadioGroupItem value="rb2" id="rb2" >
          Unchecked
        </RadioGroupItem>
      </RadioGroup>
    </div>
  );
};

export default RadioComponent;