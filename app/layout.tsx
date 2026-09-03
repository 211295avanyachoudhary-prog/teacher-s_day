import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const serif2 = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif2",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Shagufta Hamid Ma'am — Happy Teacher's Day",
  description:
    "A little story written by one of your students. Some teachers teach a subject. Some become part of the story.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${serif2.variable} ${body.variable} ${hand.variable}`}>
      <body className="font-body bg-charcoal text-parchment antialiased grain">
        {children}
      </body>
    </html>
  );
}
