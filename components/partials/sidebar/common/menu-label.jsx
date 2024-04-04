import React from "react";
import { cn } from "@/lib/utils";

const MenuLabel = ({ item, className }) => {
  const { title } = item;
  return (
    <div
      className={cn(
        "text-default-900 font-semibold uppercase mb-3 text-xs  mt-4",
        className
      )}
    >
      {title}
    </div>
  );
};

export default MenuLabel;
