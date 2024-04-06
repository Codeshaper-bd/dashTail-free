import Card from "@/components/ui/card-snippet";

import {
  defaultSkeleton,
} from "./source-code";
import DefaultSkeleton from "./default-skeleton";

const SkeletonPage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Basic Skeleton" code={defaultSkeleton}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">Skeleton</code> component gives a
          demo that replace the text and gives a loading.
        </p>
        <DefaultSkeleton />
      </Card>
    </div>
  );
};

export default SkeletonPage;
