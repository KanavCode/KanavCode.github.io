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

// EDIT: Update metadata for SEO — title, description, and canonical URL
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
    type: "website",
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
