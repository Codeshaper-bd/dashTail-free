"use client";
import Card from "@/components/ui/card-snippet";
import ColorAlert from "./color-alert";
import {
  colorAlert,
} from "./source-code";

const AlertPage = () => {
  return (
    <div className="  space-y-5">
      <Card title="Color Alert" code={colorAlert}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">color</code> props of alert change
          the color.
        </p>
        <ColorAlert />
      </Card>
    </div>
  );
};

export default AlertPage;
