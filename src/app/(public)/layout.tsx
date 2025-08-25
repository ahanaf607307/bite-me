import { ThemeProvider } from "@/view/DashboardComponents/ThemeProvider/theme-provider";
import { Footer } from "@/view/PublicComponents/Home/Footer";
import Navbar from "@/view/PublicComponents/Home/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bite Me",
  description: "Find your best food here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className=" flex-1">{children}</div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
