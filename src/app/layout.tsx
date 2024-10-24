import { localFontVariables } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: "TEDxUniversitasBrawijaya 2024",
  description:
    "TEDxUniversitasBrawijaya merupakan sebuah event yang diinisiasi oleh kumpulan mahasiswa Universitas Brawijaya yang diselenggarakan secara independen dengan lisensi dari TED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${localFontVariables} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
