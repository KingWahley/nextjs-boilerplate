import { Hexagon, Github, Twitter } from "lucide-react";
import { Footer as TapedFooter } from "@/components/ui/composite/taped-footer";

export default function SiteFooter() {
  return (
    <div className="w-full">
      <TapedFooter
        logo={
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mycvmtjinugeTsXQ9wRYS5p4W802Gxxg6Q&s"
            className="max-h-8 rounded-full"
            alt="Shadcn UI Navbar"
          />
        }
        brandName="Adtlax.com"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "(c) 2026 WevDevii",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

