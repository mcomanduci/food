import type { Metadata } from "next";
import { Quicksand, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components//main-header/main-header";

const quicksand = Quicksand({
  weight: ["400", "600", "700"],
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${quicksand.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
