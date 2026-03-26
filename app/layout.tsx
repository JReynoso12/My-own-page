import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Orbitron } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-orbitron",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Jimuel Reynoso | Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer specializing in Vue.js, Node.js, and MySQL. Building scalable, user-friendly web applications. Available for projects and full-time opportunities.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Vue.js",
    "Node.js",
    "MySQL",
    "Frontend",
    "Backend",
    "REST API",
    "Portfolio",
  ],
  authors: [{ name: "Jimuel Reynoso", url: "https://github.com/JReynoso12" }],
  openGraph: {
    title: "Jimuel Reynoso | Full-Stack Web Developer",
    description:
      "Building scalable, user-friendly web applications with Vue.js, Node.js, and MySQL. Available for projects.",
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
    <html lang="en" className={`${notoSansJP.variable} ${orbitron.variable} overflow-x-hidden`}>
      <body className="antialiased overflow-x-hidden min-h-dvh font-anime">{children}</body>
    </html>
  );
}
