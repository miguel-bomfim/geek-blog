import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

import { fetchCategories } from "@/services/hygraphApi";

const robotoRegular = localFont({
  src: "./fonts/RobotoRegular.ttf",
  variable: "--font-roboto-regular",
});
const robotoBold = localFont({
  src: "./fonts/RobotoBold.ttf",
  variable: "--font-roboto-bold",
});

export const metadata: Metadata = {
  title: "Perfil Nerd",
  description: "O seu perfil de notícias favorito!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await fetchCategories();

  return (
    <html lang="en">
      <body className={`${robotoRegular.variable} ${robotoBold.variable}`}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9534755771299362"
          crossOrigin="anonymous"
        ></script>
        <Menu categories={categories} />
        {children}
        <Footer categories={categories} />
      </body>
    </html>
  );
}
