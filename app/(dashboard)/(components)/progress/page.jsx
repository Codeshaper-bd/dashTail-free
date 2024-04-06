"use client";

import Card from "@/components/ui/card-snippet";
import DefaultProgress from "./default-progress";

import {
  defaultProgress,
} from "./source-code";

const ProgressPage = () => {
  return (
    <div className="space-y-5">
      <Card title="Default Progress Bar" code={defaultProgress}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          <code className="text-primary">Progress</code> component shows the
          progressbar to show the default component and use.
        </p>
        <div className="w-full md:w-3/5 ">
          <DefaultProgress />
        </div>
      </Card>
    </div>
  );
};

export default ProgressPage;
