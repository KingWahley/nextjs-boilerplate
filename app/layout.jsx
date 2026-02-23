import "./globals.css";

export const metadata = {
  title: "Scroll Animation Boilerplate",
  description: "A Next.js JavaScript boilerplate for scroll-based experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
