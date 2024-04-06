import CardSnippet from "@/components/ui/card-snippet";
import InputFormValidation from "./input-validation";
import InputFormBordered from "./input-form-bordered";
import InvalidButton from "./invalid-button";
import SimpleForm from "./simple-form";
import SelectForm from "./select-form";
import ValidateWithTooltip from "./validate-with-tooltip"
const FormValidation = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardSnippet title="Input Form Validation">
          <InputFormValidation />
        </CardSnippet>
        <CardSnippet title="Validation with tooltip">
          <InputFormBordered />
        </CardSnippet>
        <CardSnippet title="Validation disabled button">
          <InvalidButton />
        </CardSnippet>
        <CardSnippet title="Select Form">
          <SelectForm />
        </CardSnippet>
        <CardSnippet title="Simple Form">
          <SimpleForm />
        </CardSnippet>
        <CardSnippet title="Validate with tooltip">
          <ValidateWithTooltip />
        </CardSnippet>
      </div>
      <div className="mt-5">
        <p className="text-sm text-primary-foreground py-1.5 px-2 rounded bg-primary inline-block">Others Validation forms are availble on <strong>pro</strong>.</p>
      </div>
    </>
  );
};

export default FormValidation;