import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreya Sarkar — Aspiring Software Engineer | BA LL.B",
  description:
    "Law graduate transitioning to software engineering. Building full-stack projects (Beatsify), completing Harvard CS50x, practicing DSA. Seeking Google Software Engineering Apprenticeship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark snap-y snap-mandatory">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased snap-y snap-mandatory`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
