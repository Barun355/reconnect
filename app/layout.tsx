import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Reconnect",
  description:
    "Reconnect helps you achieve holistic health by balancing your physical, mental, and subconscious well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center items-center w-full">
        <Header />
        <div className="">

        </div>
        {children}
        <footer className="flex w-full py-4">footer</footer>
      </body>
    </html>
  );
}
