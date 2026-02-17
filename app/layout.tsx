import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="en" className="overflow-x-hidden">
      <body className="antialiased overflow-x-hidden min-h-dvh">{children}</body>
    </html>
  );
}
