"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { shortenAddress } from "@/lib/utils";
import { User as UserIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { QuickWallet } from "quick-wallet";
import { useEffect, useState } from "react";

export const ConnectButton = () => {
  const [account, setAccount] = useState<string>();
  // const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    await QuickWallet.connect();
    setAccount(await QuickWallet.getActiveAddress());
  };

  useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      const parsedAccount = JSON.parse(storedAccount);
      setAccount(parsedAccount.address);
    }
  }, []);

  if (account) {
    return (
      <button className="flex hover:bg-gray-700 gap-2 items-center text-sm rounded-lg text-white bg-gray-800 px-3 py-2">
        <UserIcon />
        {shortenAddress(account)}
      </button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger>Connect Wallet</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <button
            onClick={handleConnect}
            className="flex items-center gap-4 hover:bg-gray-50 rounded-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-green-50">
              <Image
                src={"/quick-wallet.png"}
                alt="QuickWallet"
                width={48}
                height={48}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">QuickWallet</h3>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-600">
                  Recommended
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Creates a new wallet for you, instantly.
              </p>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
