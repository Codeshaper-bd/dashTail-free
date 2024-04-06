
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
      <div className="flex gap-4">
        <Input type="text" placeholder="with button" id="input" />
        <Button type="submit">Subscribe</Button>
      </div>
    </>
  );
};

export default InputElement;