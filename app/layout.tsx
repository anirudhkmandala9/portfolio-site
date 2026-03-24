import type { Metadata } from "next";
import { Nav } from "../components/TerminalNav";
import { Footer } from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anirudh Kumar Mandala",
  description:
    "Finance, data science, and software engineering — building tools at the intersection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        {/* Ambient glow */}
        <div className="glow-blob -top-64 -left-64" />
        <div className="glow-blob -bottom-64 -right-64" style={{ background: "radial-gradient(circle, rgba(192, 132, 252, 0.05) 0%, transparent 70%)" }} />

        <Nav />
        <main className="relative z-10 mx-auto max-w-3xl px-6 pt-28 pb-8">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
