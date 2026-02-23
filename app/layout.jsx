import "./globals.css";
import Footer from "@/components/Footer";
import { Navbar5 } from "@/components/ui/navbar-5";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--fog-bg)] text-black/90">
          <Navbar5 />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
