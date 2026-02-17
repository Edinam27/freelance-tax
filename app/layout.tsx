import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelance Tax Calculator 2025 | HustleFinance",
  description: "Free self-employment tax calculator for freelancers, contractors, and gig workers. Estimate your 1099 taxes, quarterly payments, and take-home pay instantly.",
  keywords: ["freelance tax calculator", "1099 tax estimator", "self employment tax calculator", "gig worker taxes", "quarterly tax calculator"],
  openGraph: {
    title: "Freelance Tax Calculator 2025 | HustleFinance",
    description: "Stop guessing your tax bill. Calculate your self-employment taxes instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
