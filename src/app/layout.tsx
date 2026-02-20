import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://delegate-digital.vercel.app'),
  title: {
    default: "Delegate Digital — Enterprise AI. Small Business Prices.",
    template: "%s | Delegate Digital",
  },
  description:
    "B2B digital services and AI consulting for small businesses. Web design, mobile apps, automation, CRM, social media, and more. Part of Black Hills Consortium.",
  keywords: [
    "digital services",
    "AI consulting",
    "web design",
    "mobile apps",
    "automation",
    "Black Hills",
    "Delegate Digital",
  ],
  openGraph: {
    title: "Delegate Digital",
    description: "Enterprise AI. Small Business Prices.",
    type: "website",
    locale: "en_US",
    siteName: "Delegate Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delegate Digital — Enterprise AI. Small Business Prices.",
    description:
      "B2B digital services and AI consulting for small businesses. Web design, mobile apps, automation, CRM, social media, and more. Part of Black Hills Consortium.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <SiteHeader />
        <main className="min-h-screen pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
