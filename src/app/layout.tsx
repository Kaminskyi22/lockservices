import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/providers/TranslationProvider";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "LockService - Аварійне відкриття замків у Рівному",
  description: "Професійні послуги з відкриття замків у Рівному та області. Працюємо 24/7, швидкий приїзд, доступні ціни.",
  keywords: "відкриття замків Рівне, аварійне відкриття Рівне, відкриття дверей Рівне, відкриття автомобілів Рівне, відкриття сейфів Рівне, замки Рівне, майстер замків Рівне",
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
