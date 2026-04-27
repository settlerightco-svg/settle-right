import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "SettleRight",
  description: "AI-powered relocation assistant",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}