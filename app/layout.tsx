import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

const myFont = localFont({
  src: [
    {
      path: "../src/assets/Fonts/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../src/assets/Fonts/IRANSansX-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa" className={cn("font-sans", myFont.variable)}>
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
