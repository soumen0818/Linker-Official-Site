import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Linker - Intelligent Import Management | VS Code Extension",
    template: "%s | Linker"
  },
  description: "Automatically updates import statements when you rename or move files and folders. Supports JavaScript, TypeScript, React, Python, Java, Go, and CSS with visual diff preview and undo/redo.",
  keywords: [
    "VS Code extension",
    "import management",
    "auto import",
    "refactoring tool",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "Go",
    "CSS",
    "code editor",
    "developer tools"
  ],
  authors: [{ name: "Linker Team" }],
  creator: "Linker Team",
  publisher: "Linker",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Linker - Intelligent Import Management for VS Code",
    description: "Never break imports again. Automatically update all import statements when you rename or move files and folders.",
    url: '/',
    siteName: 'Linker',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/linker-logo.png',
        width: 1200,
        height: 630,
        alt: 'Linker VS Code Extension',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linker - Intelligent Import Management',
    description: 'Automatically update imports when renaming files. Supports 5+ languages.',
    images: ['/images/linker-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/linker-logo.png',
    apple: '/images/linker-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
