import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import HeaderComp from "../components/Header";
import FooterComp from "../components/Footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Modakelar - Indumentaria",
  description:
    "Descubre nuestra colección de zapatillas, zapatos y botas de moda para hombre y mujer. Compra en Modakelar con envíos rápidos y seguros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.variable} antialiased`}>
        <HeaderComp />
        <Toaster toastOptions={{ duration: 3000 }} />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
