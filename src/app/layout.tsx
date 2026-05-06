import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Om Yadav | AI Systems & Backend Engineer",
    template: "%s | Om Yadav"
  },
  description: "Om Yadav is an AI systems and backend engineer building scalable, production-grade intelligent platforms with Python, FastAPI, and modern web technologies.",
  keywords: ["Om Yadav", "AI Systems Engineer", "Backend Engineering", "Portfolio", "Scalable Systems", "Python", "FastAPI", "Next.js"],
  authors: [{ name: "Om Yadav" }],
  creator: "Om Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Om Yadav | AI Systems & Backend Engineer",
    description: "Om Yadav builds scalable AI-driven backend systems and production-quality intelligent platforms.",
    siteName: "Om Yadav Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Om Yadav Portfolio social preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Yadav | AI Systems & Backend Engineer",
    description: "Om Yadav builds scalable AI-driven backend systems and production-quality intelligent platforms.",
    site: "@om_yadav",
    creator: "@om_yadav",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
