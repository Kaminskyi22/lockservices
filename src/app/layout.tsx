import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/providers/TranslationProvider";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "LockService - Аварійне відкриття замків",
  description: "Професійні послуги з відкриття замків у Києві. Працюємо 24/7, швидкий приїзд, доступні ціни.",
  keywords: "відкриття замків, аварійне відкриття, відкриття дверей, відкриття автомобілів, відкриття сейфів",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
