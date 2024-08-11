import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Metadata } from "next";
import "../styles/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "AyEstate Awesome Estates",
  description: "Come and check our awesome estates!",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
