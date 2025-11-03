import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins, STIX_Two_Text } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ImagesStoreProvider } from "@/providers/images-store-provider";
import { FiltersStoreProvider } from "@/providers/filters-store-provider";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-stix-two-text',
});

const websiteUrl = "https://framify.vercel.app";
const imageUrl = "./public/framify-preview.png";

export const metadata: Metadata = {
  title: "Framify - Your Personal Photo Framing Studio",
  description:
    "Transform your photos into stunning framed masterpieces with Framify! ✨ Our intuitive platform lets you create beautiful, custom frames for your favorite memories. Whether it's a special moment, a professional headshot, or just a fun selfie, Framify helps you showcase your photos in style. 🖼️ Frame. Style. Share. Elevate your photos with Framify's creative framing tools!",
  metadataBase: new URL(websiteUrl),
  openGraph: {
    type: "website",
    url: websiteUrl,
    title: "Framify - Your Personal Photo Framing Studio",
    siteName: "Framify",
    description:
      "Transform your photos into stunning framed masterpieces with Framify! ✨ Our intuitive platform lets you create beautiful, custom frames for your favorite memories. Whether it's a special moment, a professional headshot, or just a fun selfie, Framify helps you showcase your photos in style. 🖼️ Frame. Style. Share. Elevate your photos with Framify's creative framing tools!",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Framify - Your Personal Photo Framing Studio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framify - Your Personal Photo Framing Studio",
    description:
      "Transform your photos into stunning framed masterpieces with Framify! ✨ Our intuitive platform lets you create beautiful, custom frames for your favorite memories. Whether it's a special moment, a professional headshot, or just a fun selfie, Framify helps you showcase your photos in style. 🖼️ Frame. Style. Share. Elevate your photos with Framify's creative framing tools!",
    images: [imageUrl],
  },
  keywords: [
    "framify",
    "photo frames",
    "picture frames",
    "photo editing",
    "custom frames",
    "digital frames",
    "photo display",
    "photography",
    "camera",
    "photos",
    "pictures",
    "snapshots",
    "celebration",
    "special occasion",
    "friends",
    "family",
    "joy",
    "laughter",
    "magic",
    "customizable",
    "aesthetic",
    "modern",
    "twist",
    "snap",
    "smile",
    "sparkle",
    "memories",
    "forever",
    "click",
    "time",
  ],
  authors: [
    {
      name: "Briuwu",
      url: "https://brianmillonte.vercel.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${stixTwoText.variable} font-poppins bg-background grid min-h-dvh grid-rows-[auto_1fr_auto] antialiased`}
      >
        <Header />
        <FiltersStoreProvider>
          <ImagesStoreProvider>{children}</ImagesStoreProvider>
        </FiltersStoreProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
