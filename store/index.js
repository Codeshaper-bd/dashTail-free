import { create } from "zustand";
import { siteConfig } from "@/config/site";

export const useSidebar = create((set) => ({
  collapsed: false,
  setCollapsed: (value) => set({ collapsed: value }),
  mobileMenu: false,
  setMobileMenu: (value) => set({ mobileMenu: value }),
}));
