export const inputCode = `
"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const InputElement = () => {
  return (
    <>
      <Input placeholder="Enter your name" />
      <Input type="text" placeholder="Username" id="userName" disabled />
      <div>
        <Label className="mb-3" htmlFor="inputId">Username </Label>
        <Input type="text" placeholder="Enter Your Name" id="inputId" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Upload File</Label>
        <Input type="file" />
      </div>
      <div className="flex gap-4">
        <Input type="text" placeholder="with button" id="input" />
        <Button type="submit">Subscribe</Button>
      </div>
    </>
  );
};

export default InputElement;
`;
export const checkboxCode = `
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

export default CheckboxComponent;`

export const radioCode = `
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

export default RadioComponent;`

export const selectCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SelectComponent = () => {
  return (
    <div className="space-y-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="mathmatics">Mathmatics</SelectItem>
          <SelectItem value="physics">Physics</SelectItem>
          <SelectItem value="chemistry">Chemistry</SelectItem>
          <SelectItem value="biology">Biology</SelectItem>
        </SelectContent>
      </Select>
      <Select
        disabled
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="mathmatics">Mathmatics</SelectItem>
          <SelectItem value="physics">Physics</SelectItem>
          <SelectItem value="chemistry">Chemistry</SelectItem>
          <SelectItem value="biology">Biology</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComponent;`