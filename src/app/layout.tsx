import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sun City Hospital - Gorakhpur",
  description: "Bilingual Premium Healthcare Portal for Sun City Hospital, Gorakhpur. PM-JAY Cashless treatment, 24x7 Emergency Care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
