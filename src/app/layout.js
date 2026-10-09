import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata = {
  title: "বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের বাজার দর।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" data-theme="light" className={hindSiliguri.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <PriceTicker />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}