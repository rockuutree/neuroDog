import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import QueryClientWrapper from "@/components/QueryClientWrapper";
import Head from "next/head";
import { CSPostHogProvider } from "@/components/PosthogWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neurodog",
  description: "Emotional robotic service dogs assisting those in need",
  metadataBase: new URL("https://neurodog.vercel.app/"),
  openGraph: { images: "/opengraph-image.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors />
        <CSPostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryClientWrapper>{children}</QueryClientWrapper>
          </ThemeProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
