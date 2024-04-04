import { DashBoard } from "@/components/svg";

export const menusConfig = {
  sidebarNav: {
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/",
      },
      {
        isHeader: true,
        title: "Components",
      },
      {
        title: "Affix",
        icon: DashBoard,
        badge: "pro",
        href: "#",
      },
      {
        title: "Watermark",
        icon: DashBoard,
        badge: "pro",
        href: "#",
      },
    ],
  },
};
