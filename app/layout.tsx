import type { Metadata, Viewport } from "next";

import "@fontsource/anton/400.css";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/crimson-text/400.css";
import "@fontsource/crimson-text/400-italic.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/600.css";

import { getSiteUrl } from "@/lib/site";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060608",
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jimuel Reynoso | Full-Stack Web Developer",
  description:
    "Full-stack developer (Vue, React/Next.js, Node.js, MySQL). I ship fast, accessible web apps—open to roles and freelance projects.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Vue.js",
    "Next.js",
    "Node.js",
    "MySQL",
    "Portfolio",
  ],
  authors: [{ name: "Jimuel Reynoso", url: "https://github.com/JReynoso12" }],
  openGraph: {
    title: "Jimuel Reynoso | Full-Stack Web Developer",
    description:
      "Scalable web apps from idea to deployment. Available for projects and full-time roles.",
    type: "website",
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/images/daredevil-atmosphere.png",
        width: 1200,
        height: 630,
        alt: "Jimuel Reynoso — portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimuel Reynoso | Full-Stack Web Developer",
    description:
      "Scalable web apps from idea to deployment. Available for projects.",
    images: ["/images/daredevil-atmosphere.png"],
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
      <body className="dd-theme antialiased relative z-[1]">{children}</body>
    </html>
  );
}
