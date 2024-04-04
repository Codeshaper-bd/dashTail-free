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
        href: "/dashboard",
      },
      {
        isHeader: true,
        title: "Components",
      },
      {
        title: "Button",
        icon: DashBoard,
        href: "/button",
      },
      {
        title: "Alert",
        icon: DashBoard,
        href: "/alert",
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
