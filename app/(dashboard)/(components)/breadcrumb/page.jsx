"use client";
import React from "react";
import Card from "@/components/ui/card-snippet";
import DefaultBreadCrumb from "./defalut-breadcrumb";
import {
  customSeparator,
  customizeCollapsingBreadcrumb,
  defaultBreadCrumb,
} from "./source-code.js";
import CustomSeparator from "./custom-separator";
import CustomizeCollapsingBreadcrumb from "./customize-collapsing-breadcrumb";

const BreadCrumbPage = () => {
  return (
    <div className="space-y-5">
      <Card title="Default Breadcrumb" code={defaultBreadCrumb}>
        <p className="text-muted-foreground mb-5 text-sm">
          <span className="text-primary">Breadcrumbs</span> is the main
          component, which is a wrapper for the other components and show as a
          breadcrumb component..{" "}
          <span className="text-primary">BreadcrumbItem</span> is the component
          that represents a breadcrumb item also hold the text in it and show as
          a breadcrumb item.
        </p>
        <div>
          <DefaultBreadCrumb />
        </div>
      </Card>
      <Card title="Custom  Separator" code={customSeparator}>
        <p className="text-muted-foreground mb-5 text-sm">
          The <span className="text-primary">separator</span> props helps
          breadcrumb to change the style of the breadcrumb divider into any kind
          of style can show.
        </p>
        <div>
          <CustomSeparator />
        </div>
      </Card>

      <Card
        title="Customize Collapsing Breadcrumb"
        code={customizeCollapsingBreadcrumb}
      >
        <p className="text-muted-foreground mb-5 text-sm">
          If the breadcrumb is too long we can minimize the length, item that
          will be shown before and after the minimize of breadcrumb by using{" "}
          <span className="text-primary">
            maxItems , itemsBeforeCollapse, itemsAfterCollapse{" "}
          </span>{" "}
          props. also we can use{" "}
          <span className="text-primary">renderEllipsis</span> props to show
          folded item from ellipsis as menu.
        </p>
        <div>
          <CustomizeCollapsingBreadcrumb />
        </div>
      </Card>
    </div>
  );
};

export default BreadCrumbPage;
