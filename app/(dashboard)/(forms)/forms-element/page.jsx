
"use client"
import CardSnippet from "@/components/ui/card-snippet";
import InputElement from "./input-element"
import CheckboxComponent from "./checkbox-component"
import RadioComponent from "./radio-component"
import SelectComponent from "./select-component"
import { inputCode, checkboxCode, radioCode, selectCode, fileUploader, switchCode, rangeSlider } from "./source-code"
import FileUploader from "./file-uploader";
import SwitchComponent from "./switch-component"
import TextAreaComponents from "./text-area"
import RangeSlider from "./range-slider"

const FormPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardSnippet title="Input" code={inputCode}>
          <p className="text-sm text-default-400 dark:text-default-600">
            No <span className="text-primary">props</span> are required when using
            the default style.  Use <span className="text-primary">disabled</span> attribute to
            disable input.  Use <span className="text-primary">Label</span> components for our
            label style. Use <span className="text-primary">Button</span> component for button
          </p>
          <div className="space-y-3 mt-4">
            <InputElement />
          </div>
        </CardSnippet>
        <CardSnippet title="Select" code={selectCode}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            <code className="text-primary">Select</code> component wrap{" "}
            <code className="text-primary">SelectTrigger</code> and{" "}
            <code className="text-primary">SelectContent</code> tag and show{" "}
            <code className="text-primary">SelectValue</code> as label placeholder
            and <code className="text-primary">SelectItem</code> to show and
            select item. <br />
            <code className="text-primary">disabled</code> props in{" "}
            <code className="text-primary">Select</code> Component to disabled the
            select.
          </p>
          <SelectComponent />
        </CardSnippet>
        <CardSnippet title="File Uploader" code={fileUploader}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            File input elements enable users to select one or multiple files
            from their device storage. Once selected, the files can be submitted
            to a server through form submission.
          </p>
          <FileUploader />
        </CardSnippet>
        <CardSnippet title="Checkbox" code={checkboxCode}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            <code className="text-primary">Checkbox</code> component are use to
            reserve and show radio button with label in it.  Checkbox component with
            <code className="text-primary"> disabled </code>props makes checkbox
            component disabled.
          </p>
          <CheckboxComponent />
        </CardSnippet>
        <CardSnippet title="Radio" code={radioCode}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            No <span className="text-primary">Props</span> are required for the
            default radio input.{" "}   Use the <span className="text-primary">disabled</span> attribute to
            deactivate the radio input.
          </p>
          <RadioComponent />
        </CardSnippet>
        <CardSnippet title="Switch" code={switchCode}>
          <p className="text-sm text-default-400 dark:text-default-600  mb-4">
            No<code className="text-primary"> props </code> are required for our
            default style. Use<code className="text-primary"> Label component </code> for the
            switch label.  Use the<code className="text-primary"> disabled </code> attribute to
            disabled the switch.
          </p>
          <SwitchComponent />
        </CardSnippet>
      </div>
      <CardSnippet title="Range Slider" code={rangeSlider}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary"> Slider</code> component make with
          default value make range slider visible.  <code className="text-primary"> disabled</code> prop in
          <code className="text-primary"> Slider</code> component make range
          slider disabled.   <code className="text-primary"> showTooltip</code> prop in
          <code className="text-primary"> Slider</code> component make range
          slider show tooltip on long hover.     <code className="text-primary"> min </code>and
          <code className="text-primary"> max </code> prop in
          <code className="text-primary"> Slider</code> component make a bound
          on with minimum and maximum value slider. <code className="text-primary"> color </code> prop in
          <code className="text-primary"> Slider</code> component make range
          slider colored.
        </p>
        <RangeSlider />
      </CardSnippet>
      <CardSnippet title="Text Area" code={fileUploader}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          No <span className="text-primary">props</span> are required when using
          the default style. Use <span className="text-primary">disabled</span> attribute to
          disable textarea. Apply <span className="text-primary">the readonly attribute</span> to
          make the textarea non-editable.Use <span className="text-primary">Label</span> components for our
          label style.  Use <span className="text-primary">required</span> attribute to
          required textarea.
        </p>
        <TextAreaComponents />
      </CardSnippet>
    </div>
  );
};

export default FormPage;