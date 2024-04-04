"use client";
import React, { useState } from "react";
import { cn, isLocationMatch } from "@/lib/utils";
import { useSidebar } from "@/store";
import SidebarLogo from "../common/logo";
import { menusConfig } from "@/config/menus";
import MenuLabel from "../common/menu-label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import SingleMenuItem from "./single-menu-item";

const ClassicSidebar = () => {
  const menus = menusConfig?.sidebarNav?.classic || [];
  const { collapsed, setCollapsed } = useSidebar();
  const [hovered, setHovered] = useState(false);

  const locationName = usePathname();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "fixed  z-[999] top-0  bg-card h-full hover:!w-[248px]  border-r  ",
        {
          "w-[248px]": !collapsed,
          "w-[72px]": collapsed,
          "shadow-md": collapsed || hovered,
        }
      )}
    >
      <SidebarLogo hovered={hovered} />

      <ScrollArea
        className={cn("sidebar-menu  h-[calc(100%-80px)] ", {
          "px-4": !collapsed || hovered,
        })}
      >
        <ul
          className={cn(" space-y-1", {
            " space-y-2 text-center": collapsed,
            "text-start": collapsed && hovered,
          })}
        >
          {menus.map((item, i) => (
            <li key={`menu_key_${i}`}>
              {/* single menu  */}

              {!item.child && !item.isHeader && (
                <SingleMenuItem
                  item={item}
                  collapsed={collapsed}
                  hovered={hovered}
                />
              )}

              {/* menu label */}
              {item.isHeader && !item.child && (!collapsed || hovered) && (
                <MenuLabel item={item} />
              )}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ClassicSidebar;
