// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

// Font configuration
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Metadata
export const metadata: Metadata = {
  title: "Adric Busani Maplanka | Full Stack Developer",
  description:
    "Personal portfolio of Adric Busani Maplanka, a Full Stack Developer specializing in React, NestJS, and Microservices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
