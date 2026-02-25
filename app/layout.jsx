import "./globals.css";
import SiteFooter from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen w-full flex-col bg-[var(--fog-bg)] text-black/90">
          <SiteHeader />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
