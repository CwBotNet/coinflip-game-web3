"use client";
import { client } from "@/app/utlis/client";
import { useRouter } from "next/navigation";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";


const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("io.zerion.wallet"),
    createWallet("me.rainbow"),
    createWallet("org.uniswap"),
];

const WalletButton = () => {
    const navigation = useRouter()
    return (
        <>
            <ConnectButton
                client={client}
                wallets={wallets}
                onDisconnect={() => navigation.push("/")}
                autoConnect={true}
            />
        </>
    )
};

export { WalletButton }