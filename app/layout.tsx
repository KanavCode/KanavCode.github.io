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
  keywords: ["Kanav Modi", "Kanav", "kanavcode", "Modi Kanav", "Software Developer", "Full Stack Developer", "India", "React", "Next.js"],
  metadataBase: new URL("https://kanavmodi.me"),
  openGraph: {
    title: "Kanav Modi | Software Developer",
    description:
      "3rd year CSE student and Software Developer Intern. Building full-stack web apps, AI projects, and open source. Based in India, open to remote.",
    url: "https://kanavmodi.me",
    siteName: "Kanav Modi",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kanav Modi",
              alternateName: ["Kanav", "Modi Kanav", "kanavcode", "KanavCode"],
              url: "https://kanavmodi.me",
              jobTitle: "Software Developer",
              sameAs: [
                "https://github.com/KanavCode",
                "https://www.linkedin.com/in/kanav-modi/"
              ],
              knowsAbout: ["React", "TypeScript", "Next.js", "Python", "Full Stack Web Development", "Software Engineering"]
            })
          }}
        />
      </head>
      <body className="bg-background text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
