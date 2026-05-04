import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "八戸市の整体なら白浜整体院",
  description: "青森県八戸市松ヶ丘の白浜整体院。慢性痛・腰痛・肩こり・姿勢改善に対応。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
