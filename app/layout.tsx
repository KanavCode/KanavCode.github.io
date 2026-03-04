import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// EDIT: Update metadata for SEO
export const metadata: Metadata = {
  title: "Kanav Modi | Software Developer",
  description:
    "3rd year CSE student and Software Developer Intern. Building full-stack web apps, AI projects, and open source. Based in India, open to remote.",
  metadataBase: new URL("https://kanavmodi.me"),
  openGraph: {
    title: "Kanav Modi | Software Developer",
    description:
      "3rd year CSE student and Software Developer Intern. Building full-stack web apps, AI projects, and open source. Based in India, open to remote.",
    url: "https://kanavmodi.me",
    siteName: "Kanav Modi",
    // OG-IMAGE: Replace /public/og-image.png with a real 1200x630px image for social sharing cards
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kanav Modi — Software Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanav Modi | Software Developer",
    description:
      "3rd year CSE student and Software Developer Intern. Building full-stack web apps, AI projects, and open source.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://kanavmodi.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
