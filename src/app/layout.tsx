import QuizProvider from "@/context/QuizContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizio: The Quiz App",
  description: "Quizio is a quiz app built with nextjs and tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black">
          <QuizProvider>{children}</QuizProvider>
        </div>
      </body>
    </html>
  );
}
