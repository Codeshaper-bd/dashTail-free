"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store";
import ProfileInfo from "./profile-info";
import VerticalHeader from "./vertical-header";

import { useMediaQuery } from "@/hooks/use-media-query";
import MobileMenuHandler from "./mobile-menu-handler";
import ClassicHeader from "./layout/classic-header";

const NavTools = ({ isDesktop, isMobile }) => {
  return (
    <div className="nav-tools flex items-center  gap-2">
      <div className=" pl-2">
        <ProfileInfo />
      </div>
      {!isDesktop && <MobileMenuHandler />}
    </div>
  );
};
const Header = ({ handleOpenSearch }) => {
  const { collapsed, setCollapsed } = useSidebar();

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  const isMobile = useMediaQuery("(min-width: 768px)");

  return (
    <ClassicHeader
      className={cn("sticky top-0", {
        "xl:ml-[248px]": !collapsed,
        "xl:ml-[72px]": collapsed,
      })}
    >
      <div className="w-full bg-card/90 backdrop-blur-lg md:px-6 px-[15px] py-3 border-b">
        <div className="flex justify-between items-center h-full">
          <VerticalHeader handleOpenSearch={handleOpenSearch} />
          <NavTools isDesktop={isDesktop} isMobile={isMobile} />
        </div>
      </div>
    </ClassicHeader>
  );
};

export default Header;
