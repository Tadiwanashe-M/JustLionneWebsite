import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "JUSTLIONNE PTY LTD | Mining & Logistics",
    template: "%s | JUSTLIONNE PTY LTD",
  },
  description:
    "South African mining and logistics company providing coal supply, processing, dry bulk handling, storage, and end-to-end transport services.",
  applicationName: "JUSTLIONNE PTY LTD",
  metadataBase: new URL("https://justlionne.co.za"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "JUSTLIONNE PTY LTD | Mining & Logistics",
    description:
      "Roaring with Quality. Delivering with Pride. Coal supply, processing, dry bulk handling, storage, and transport.",
    url: "https://justlionne.co.za",
    siteName: "JUSTLIONNE PTY LTD",
    locale: "en_ZA",
    type: "website",
    images: [{ url: "/images/logo.jpeg", width: 512, height: 512, alt: "JUSTLIONNE PTY LTD" }],
  },
  keywords: [
    "JUSTLIONNE",
    "mining",
    "logistics",
    "coal supply",
    "coal crushing",
    "coal washing",
    "screening",
    "material handling",
    "dry bulk handling",
    "transport",
    "Emalahleni",
    "South Africa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--jl-bg]">{children}</body>
    </html>
  );
}
