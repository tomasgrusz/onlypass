import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { MiniKitProvider } from "@worldcoin/minikit-js/minikit-provider";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnlyPass | Human-only events",
  description: "A human-only ticketing platform powered by Worldcoin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MiniKitProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
        >
          <Header />
          <main>
            {children}
            {/* Bottom Navigation */}
            <Navbar />
          </main>
        </body>
      </MiniKitProvider>
    </html>
  );
}
