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
      <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka2zcbzQn3h76s12g0D0W2nGvTibcFmb7taHz1dgdqGTIEgkVoPqa1MwvET2jpH0"
          crossOrigin="anonymous"
          defer
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
