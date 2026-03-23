import type { Metadata } from "next";
import { TerminalNav } from "../components/TerminalNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anirudh Kumar Mandala",
  description:
    "Finance × Technology — Portfolio analytics, quantitative modeling, and software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TerminalNav />
        <main className="mx-auto max-w-5xl px-6 pt-20 pb-24">{children}</main>
      </body>
    </html>
  );
}
