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
  title: "Bhavya Pandey — Full Stack Developer & AI Integration",
  description:
    "Portfolio of Bhavya Pandey: Full Stack Developer specializing in React.js, Next.js, Gemini AI multi-agent architectures, and Computer Vision.",
  keywords: [
    "Bhavya Pandey",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Gemini AI",
    "Multi-Agent",
    "Computer Vision",
    "Portfolio"
  ],
  authors: [{ name: "Bhavya Pandey" }],
  openGraph: {
    title: "Bhavya Pandey — Full Stack Developer & AI Integration",
    description: "Modern developer portfolio featuring 1-bit dither aesthetics and high-contrast Apple glassmorphism.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="bg-black text-white min-h-screen antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
