import "./assets/scss/globals.scss";
import "./assets/scss/theme.scss";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import Providers from "@/provider/providers";
import "simplebar-react/dist/simplebar.min.css";
import TanstackProvider from "@/provider/providers.client";
import "flatpickr/dist/themes/light.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("dash-tail-app ", inter.className)}>
        <TanstackProvider>
          <Providers>{children}</Providers>
        </TanstackProvider>
      </body>
    </html>
  );
}
