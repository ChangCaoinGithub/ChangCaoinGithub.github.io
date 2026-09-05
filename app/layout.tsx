import type { Metadata } from "next";
import "./globals.css";
import { sitePath } from "./site-path";

export const metadata: Metadata = {
  title: "Chang Cao — Affective Computing",
  description: "Chang Cao is a PhD student at MPI-IS exploring affective computing and human-centered AI.",
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
