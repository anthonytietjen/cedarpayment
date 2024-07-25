import type { Metadata } from "next";
import "./globals.css";
import PageLayout from "./components/PageLayout";

export const metadata: Metadata = {
  title: "ABC Health System",
  description: "ABC Health System Payment Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
