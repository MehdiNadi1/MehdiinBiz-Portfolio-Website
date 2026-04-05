import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Mehdi Nadi | Web Developer & AI Automation Studio",
  description: "I don't just build websites — I build digital growth engines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
