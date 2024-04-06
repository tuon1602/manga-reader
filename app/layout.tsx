import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuon's mangas",
  description: "Trọn các bộ manga comic hay nhất và cập nhật mới nhất hiện tại",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/favicon_io/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon_io/favicon-16x16.png"
        />
      </head>
      <body>
        <main className={`${inter.className} container min-h-screen`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Toaster position="top-center" richColors />
            <Navbar />
            <div className="2xl:pt-40 2xl:pb-20 pt-24 pb-10 md:pt-28 md:pb-14 xl:pt-32 xl:pb-16">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
