import React, { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import Navbar from './components/navbar';
import Footer from "./components/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
