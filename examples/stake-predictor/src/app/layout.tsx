import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stake Mines Predictor",
  description: "Calculate mine positions and safe spots using provably fair algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
