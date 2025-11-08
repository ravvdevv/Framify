import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
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
  title: "Framify: Create Custom Photo Frames Online",
  description:
    "Design and create beautiful custom photo frames online with Framify. Turn your memories into art with our easy-to-use photo framing tool. Perfect for any occasion!",
  metadataBase: new URL(websiteUrl),
  openGraph: {
    type: "website",
    url: websiteUrl,
    title: "Framify: Create Custom Photo Frames Online",
    siteName: "Framify",
    description:
      "Design and create beautiful custom photo frames online with Framify. Turn your memories into art with our easy-to-use photo framing tool. Perfect for any occasion!",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Framify: Create Custom Photo Frames Online",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Framify: Create Custom Photo Frames Online",
    description:
      "Design and create beautiful custom photo frames online with Framify. Turn your memories into art with our easy-to-use photo framing tool. Perfect for any occasion!",
    images: [imageUrl],
  },
  keywords: [
    "framify",
    "photo frames",
    "custom photo frames",
    "online photo frames",
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
    "photo framing tool",
    "photo editor",
    "online photo editor",
    "free photo editor",
  ],
  authors: [
    {
      name: "Raven",
      url: "https://github.com/ravvdevv",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
