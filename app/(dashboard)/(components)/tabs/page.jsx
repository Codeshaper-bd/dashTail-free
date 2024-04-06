import Card from "@/components/ui/card-snippet";
import BasicTabs from "./basic-tabs";
import {
  basicTabs,
  colorVariants,
  disabledTabs,
  iconVariants,
  roundedTabs,
  sizesTabs,
  styleVariants,
} from "./source-code";
const TabsPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Basic Tabs" code={basicTabs}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary"> Tabs</code> component wraps the.{" "}
          <code className="text-primary">
            {" "}
            TabsList, TabsTrigger, TabsContent
          </code>{" "}
          component to change tabs and wrap it as necessary component.
        </p>
        <BasicTabs />
      </Card>
    </div>
  );
};

export default TabsPage;
