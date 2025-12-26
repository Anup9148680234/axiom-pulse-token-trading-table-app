import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Axiom Trade Replica",
    template: "%s | Axiom Trade Replica",
  },
  description:
    "Token discovery board with simulated real-time updates and a three-lane trading dashboard layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
