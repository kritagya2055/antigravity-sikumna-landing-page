import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sikumna | Business Growth Strategy",
  description: "Get a FREE 1:1 strategy session and discover the fastest path to more leads, customers, and sales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${inter.className} bg-background text-primary antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
