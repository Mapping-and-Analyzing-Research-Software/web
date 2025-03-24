import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/global.css";
import Script from "next/script";
import Navbar from "@/app/ui/navbar/navbar";
import Footer from "@/app/ui/footer/footer";

export const metadata: Metadata = {
  title: "MARS",
  description: "Mapping and Analyzing Research Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        {/* Ensure Bootstrap JS is included */}
        {/* <Script
          src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      {/* {typeof document !== 'undefined' && (
        <Script
          src="bootstrap/dist/css/bootstrap.min.js"
          strategy="afterInteractive"
        />
      )} */}
    </html>
  );
}
