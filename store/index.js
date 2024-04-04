import { create } from "zustand";
import { siteConfig } from "@/config/site";
import { persist, createJSONStorage } from "zustand/middleware";
export const useThemeStore = create((set) => ({
  theme: siteConfig.theme,
  setTheme: (theme) => set({ theme }),
  radius: siteConfig.radius,
  setRadius: (value) => set({ radius: value }),
  layout: siteConfig.layout,
  setLayout: (value) => {
    set({ layout: value });

    // If the new layout is "semibox," also set the sidebarType to "popover"
    if (value === "semibox") {
      useSidebar.setState({ sidebarType: "popover" });
    }
    //
    if (value === "horizontal") {
      // update  setNavbarType
      useThemeStore.setState({ navbarType: "sticky" });
    }
  },
  navbarType: siteConfig.navbarType,
  setNavbarType: (value) => set({ navbarType: value }),
  footerType: siteConfig.footerType,
  setFooterType: (value) => set({ footerType: value }),
}));

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
