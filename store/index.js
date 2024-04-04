import { create } from "zustand";
import { siteConfig } from "@/config/site";

export const useSidebar = create((set) => ({
  collapsed: false,
  setCollapsed: (value) => set({ collapsed: value }),
  sidebarType:
    siteConfig.layout === "semibox" ? "popover" : siteConfig.sidebarType,
  setSidebarType: (value) => {
    set({ sidebarType: value });
  },
  subMenu: false,
  setSubmenu: (value) => set({ subMenu: value }),
  // background image
  sidebarBg: siteConfig.sidebarBg,
  setSidebarBg: (value) => set({ sidebarBg: value }),
  mobileMenu: false,
  setMobileMenu: (value) => set({ mobileMenu: value }),
}));
