import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wake",
  description: "Wake",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
