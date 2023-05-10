import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
