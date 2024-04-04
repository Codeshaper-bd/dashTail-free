
"use client"
import CardSnippet from "@/components/ui/card-snippet";
import InputElement from "./input-element"
import CheckboxComponent from "./checkbox-component"
import RadioComponent from "./radio-component"
import SelectComponent from "./select-component"
import { inputCode, checkboxCode, radioCode, selectCode } from "./source-code"
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
      <CardSnippet title="Radio Component" code={radioCode}>
        <RadioComponent />
      </CardSnippet>
      <CardSnippet title="Select Component" code={selectCode}>
        <SelectComponent />
      </CardSnippet>
    </div>
  );
};

export default FormPage;