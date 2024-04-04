"use client";
import { ThemeProvider } from "next-themes";
import { ReactToaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { SonnToaster } from "@/components/ui/sonner";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <div className={cn("h-full  ")}>
        {children}
        <ReactToaster />
      </div>
      <SonnToaster />
    </ThemeProvider>
  );
};

export default Providers;
