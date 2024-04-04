"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileSidebar from "./mobile-sidebar";
import ClassicSidebar from "./classic";

const Sidebar = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  if (!isDesktop) {
    return <MobileSidebar />;
  }
  return (
    <div>
      <ClassicSidebar />
    </div>
  );
};

export default Sidebar;
