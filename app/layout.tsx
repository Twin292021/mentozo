import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/commons/navbar";
import Footer from "@/src/commons/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mentozo | Career Counseling & Online Degree Guidance",
    template: "%s | Mentozo",
  },
  description:
    "Mentozo is a trusted career counseling platform helping students choose the right career path, online degree programs, and universities with expert guidance and end-to-end admission support.",

  keywords: [
    "career counseling",
    "career guidance",
    "online degree admission",
    "online education counseling",
    "university admission support",
    "career advisor",
    "higher education guidance",
    "Mentozo",
  ],

  authors: [{ name: "Mentozo" }],
  creator: "Mentozo",
  publisher: "Mentozo",

  metadataBase: new URL("https://www.mentozo.com"), // update when domain is live

  openGraph: {
    title: "Mentozo | Career Counseling & Online Degree Guidance",
    description:
      "Get expert career counseling and admission support at Mentozo. Choose the right online degree and university with confidence.",
    url: "https://www.mentozo.com",
    siteName: "Mentozo",
    images: [
      {
        url: "/og-image.png", // add later
        width: 1200,
        height: 630,
        alt: "Mentozo Career Counseling Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mentozo | Career Counseling & Online Degree Guidance",
    description:
      "Expert career counseling, online degree selection, and university admission support — all at Mentozo.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
