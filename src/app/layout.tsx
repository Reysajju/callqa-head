import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CallQA - Transform Audio into Actionable Insights",
  description: "CallQA uses advanced AI to transcribe, analyze, and extract valuable insights from your audio files. Perfect for call centers, meetings, and quality assurance.",
  keywords: ["CallQA", "audio transcription", "AI analysis", "call center", "quality assurance", "speech recognition", "business intelligence"],
  authors: [{ name: "CallQA Team" }],
  openGraph: {
    title: "CallQA - Transform Audio into Actionable Insights",
    description: "AI-powered audio transcription and analysis platform for businesses",
    url: "https://callqa.com",
    siteName: "CallQA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CallQA - Transform Audio into Actionable Insights",
    description: "AI-powered audio transcription and analysis platform for businesses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
