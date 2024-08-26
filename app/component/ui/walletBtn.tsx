"use client";
import { client } from "@/app/utlis/client";
import { ethereum, sepolia } from "thirdweb/chains";
import { ConnectButton, ConnectEmbed } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { useRouter } from "next/navigation";





const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("io.zerion.wallet"),
  createWallet("me.rainbow"),
  createWallet("org.uniswap"),
];

const WalletBtn = () => {
  const navigation = useRouter()
  return (
    <>
      <ConnectEmbed
        showAllWallets={false}
        onConnect={() => navigation.push('/coinflip')}
        client={client}
        wallets={wallets}
        chain={sepolia}
        chains={[sepolia, ethereum]}
        autoConnect={false}
      />
    </>
  )
};

export { WalletBtn }