import type { Metadata, Viewport } from "next";
import { Anton, Bebas_Neue, Crimson_Text, Oswald } from "next/font/google";

import "./globals.css";

const fontHeroName = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hero-name",
  display: "swap",
});

const fontDisplay = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontUi = Oswald({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const fontSerif = Crimson_Text({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060608",
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
      <body
        className={`${fontHeroName.variable} ${fontDisplay.variable} ${fontUi.variable} ${fontSerif.variable} dd-theme antialiased relative z-[1]`}
      >
        {children}
      </body>
    </html>
  );
}
