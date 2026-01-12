import React from "react"; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
   title: "Shreedhar Portfolio",
  description: "Modern Portfolio with Smooth Animations",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
