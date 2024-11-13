import "@/app/globals.css";
import { GradientLine } from "@/components";
import { WalletProvider } from "@/providers/wallet.provider";
import { ConnectButton } from "arweave-wallet-kit";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chain The Blocks",
  description:
    "Chain all blocks together by answering all blockchain-related questions within 90 seconds to claim a prize!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${inter.variable} antialiased`}>
        <WalletProvider>
          {children}{" "}
          <footer className="fixed bottom-0 w-full flex px-4 py-2 md:pt-2 bg-slate-50 z-20">
            <GradientLine className="absolute top-0 w-full left-0" />
            <div className="flex md:flex-row flex-col items-center justify-between w-full">
              <Link target="_blank" href="https://linktr.ee/arweaveph">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={80}
                  className="w-auto h-16"
                />
              </Link>
              <ConnectButton accent="#000" />
            </div>
          </footer>
        </WalletProvider>
      </body>
    </html>
  );
}
