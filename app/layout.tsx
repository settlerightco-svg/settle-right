import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SettleRight — AI-powered UAE relocation",
  description: "SettleRight is a premium landing page for AI-guided relocation to the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f8f9fb] text-[#191c1e]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
