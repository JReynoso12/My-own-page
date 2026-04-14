import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Jimuel Reynoso | Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer specializing in Vue.js, Node.js, and MySQL. Building scalable, user-friendly web applications.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Vue.js",
    "Node.js",
    "MySQL",
    "Portfolio",
  ],
  authors: [{ name: "Jimuel Reynoso", url: "https://github.com/JReynoso12" }],
  openGraph: {
    title: "Jimuel Reynoso | Full-Stack Web Developer",
    description:
      "Building scalable, user-friendly web applications. Available for projects.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative z-[1]">{children}</body>
    </html>
  );
}
