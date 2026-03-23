import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anirudh Kumar Mandala | Finance × Technology",
  description:
    "Personal portfolio of Anirudh Kumar Mandala — Finance, Data Science, and Software Engineering at UC Irvine.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
