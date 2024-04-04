import React from "react";
import { useSidebar } from "@/store";
import { cn } from "@/lib/utils";
import FooterLayout from "./footer-layout";

const Footer = ({}) => {
  const { collapsed } = useSidebar();

  return (
    <FooterLayout
      className={cn("", {
        "xl:ml-[248px]": !collapsed,
        "xl:ml-[72px]": collapsed,
      })}
    >
      <FooterContent />
    </FooterLayout>
  );
};

export default Footer;

const FooterContent = () => {
  return (
    <div className="block md:flex md:justify-between text-muted-foreground">
      <p className="sm:mb-0 text-xs md:text-sm">
        COPYRIGHT © {new Date().getFullYear()} DashTail All rights Reserved
      </p>
      <p className="mb-0 text-xs md:text-sm">
        Hand-crafted & Made by{" "}
        <a
          className="text-primary"
          target="__blank"
          href="https://codeshaper.net"
        >
          Codeshaper
        </a>
      </p>
    </div>
  );
};
