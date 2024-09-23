import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOMADX",
  description: "AR/VR Real Estate pre-sales marketplace for investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
