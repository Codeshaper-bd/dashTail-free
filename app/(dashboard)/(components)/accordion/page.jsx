"use client";
import React from "react";
import Card from "@/components/ui/card-snippet";
import BasicAccordion from "./basic-accordion";
import {
  accordionBorder,
  accordionSubtitle,
  accordionWithContent,
  accordionWithIcon,
  accordionWithOutArrow,
  additionalActions,
  basicAccordion,
  collapseIconAccordion,
  customIndicator,
  simpleAccordion,
} from "./source-code";

const AccordionPage = () => {
  return (
    <Card title="Basic  Accordion" code={basicAccordion}>
      <p className="text-sm text-default-400 dark:text-default-600  mb-4">
        The <code className="text-primary">collapsible</code> prop is used to
        collapse the Accordion.
      </p>
      <BasicAccordion />
    </Card>
  );
};

export default AccordionPage;
