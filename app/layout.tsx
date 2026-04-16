import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/features/header";

export const metadata: Metadata = {
  title: "Furniro | Furniture Store",
  description: "Dự án website nội thất cao cấp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {
            
        }
        <Header />    
        {

        }
        <main>{children}</main>
      </body>
    </html>
  );
}