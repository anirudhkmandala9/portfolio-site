import type { Metadata } from "next";
import { Nav } from "../components/TerminalNav";
import { Footer } from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anirudh Kumar Mandala | Finance × Technology",
  description:
    "Building at the intersection of finance, data science, and software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg min-h-screen">
        <Nav />
        <main className="mx-auto max-w-3xl px-6 pt-28 pb-8">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
