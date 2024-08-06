import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "sonner";  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El partido de tus sueños",
  description: "Construye tu equipo de ensueño con los jugadores que más te gusten",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Toaster  position="bottom-right" richColors  /> 
        {children}
      </body>
    </html>
  );
}
