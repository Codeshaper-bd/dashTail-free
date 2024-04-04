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
        title: "Accordion",
        icon: DashBoard,
        href: "/accordion",
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
      {
        title: "Forms",
        icon: DashBoard,
        href: "/forms",
      },
    ],
  },
};
