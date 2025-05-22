import type { Metadata } from "next";
import {Lato} from "next/font/google";
import "./globals.css";
// import {FloatingNavDemo} from "@/components/FloatingNav";


const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
    weight:"400"
});




export const metadata: Metadata = {
  title: "Ayush Saini's Portfolio",
  description: "A developer website created by an upcoming AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased bg-black`}
      >
      {/*<FloatingNavDemo/>*/}
        {children}
      </body>
    </html>
  );
}
