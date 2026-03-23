import type { Metadata } from "next";
import { Work_Sans, Yeseva_One } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const yesevaOne = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva-one",
});

export const metadata: Metadata = {
  title: {
    default: "Meddical",
    template: "%s | Meddical",
  },
  description:
    "Frontend healthcare website POC built with Next.js, TypeScript, Tailwind CSS, and accessible UI patterns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${yesevaOne.variable} bg-white text-[#212124] antialiased`}>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-app-primary px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
