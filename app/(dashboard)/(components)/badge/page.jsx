"use client";
import Card from "@/components/ui/card-snippet";

import DefaultBadge from "./default-badge";
import OutlineBadge from "./outline-badge";
import {
  defaultBadge,
  outlineBadge,
} from "./souce-code";

const BadgePage = () => {
  return (
    <div className=" space-y-5">
      <Card title="Default badges" code={defaultBadge}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">color</code> prop is
          used to change color of badge
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <DefaultBadge />
        </div>
      </Card>
      <Card title="Outline badges" code={outlineBadge}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The <code className="text-primary">variant="outline"</code> prop is
          used to change outline of badge
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          <OutlineBadge />
        </div>
      </Card>
    </div>
  );
};

export default BadgePage;
