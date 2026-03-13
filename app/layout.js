import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Paragon Insurance Brokers - You are in safe hands",
  description: "Compare life insurance quotes from Botswana's top providers: Metropolitan Life, Botswana Life, Hollard Life, and Bona Life. Licensed by NBFIRA.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/logo/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Paragon Insurance Brokers - You are in safe hands",
    description: "Compare life insurance quotes from Botswana's top providers. Licensed by NBFIRA.",
    images: [{ url: "/images/logo/paragon-logo-og.webp", width: 1200, height: 400 }],
    locale: "en_BW",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}