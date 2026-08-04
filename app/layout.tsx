import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      lang="fa"
      className= {cn("", "font-sans", geist.variable)}
    >
      <body className="">
        <Header/>

        {children}
        <Footer />
        </body>
    </html>
  );
}
