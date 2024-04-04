
"use client"
import CardSnippet from "@/components/ui/card-snippet";
import InputElement from "./input-element"
import CheckboxComponent from "./checkbox-component"
import { inputCode, checkboxCode } from "./source-code"
const FormPage = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <CardSnippet title="Input" code={inputCode}>
        <div className="space-y-3">
          <InputElement />
        </div>
      </CardSnippet>
      <CardSnippet title="Checkbox Component" code={checkboxCode}>
        <CheckboxComponent />
      </CardSnippet>
    </div>
  );
};

export default FormPage;