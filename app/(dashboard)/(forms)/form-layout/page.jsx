import CardSnippet from "@/components/ui/card-snippet";
import FormGrid from "./form-grid";
import Gutters from "./gutters-box";
const FormLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CardSnippet title="Form Grid">
        <FormGrid />
      </CardSnippet>
      <CardSnippet title="Gutters">
        <Gutters />
      </CardSnippet>
      <div className="mt-5">
        <p className="text-sm text-primary-foreground py-1.5 px-2 rounded bg-primary inline-block">Others Layout forms are availble on pro.</p>
      </div>
    </div>
  );
};

export default FormLayout;