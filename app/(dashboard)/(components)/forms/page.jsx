
"use client"
import CardSnippet from "@/components/ui/card-snippet";
import InputElement from "./input-element"
import CheckboxComponent from "./checkbox-component"
import RadioComponent from "./radio-component"
import SelectComponent from "./select-component"
import { inputCode, checkboxCode, radioCode, selectCode, fileUploader } from "./source-code"
import FileUploader from "./file-uploader";
const FormPage = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <CardSnippet title="Input" code={inputCode}>
        <div className="space-y-3">
          <InputElement />
        </div>
      </CardSnippet>
      <CardSnippet title="Select" code={selectCode}>
        <SelectComponent />
      </CardSnippet>
      <CardSnippet title="File Uploader" code={fileUploader}>
        <FileUploader />
      </CardSnippet>
      <CardSnippet title="Checkbox" code={checkboxCode}>
        <CheckboxComponent />
      </CardSnippet>
      <CardSnippet title="Radio" code={radioCode}>
        <RadioComponent />
      </CardSnippet>

    </div>
  );
};

export default FormPage;