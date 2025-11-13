import type { Metadata } from "next";
import { Inter, Inria_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Aedura | AI-Native ERP for The Next Gen",
  description: "AI Native ERP for the next generation of Enterprise and Schools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inriaSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
