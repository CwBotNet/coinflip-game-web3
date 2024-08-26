"use client"
import { client } from "@/app/utlis/client";
import { sepolia } from "thirdweb/chains";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";

const WalletDetails = () => {
    const account = useActiveAccount();
    const { data: balance, isLoading } = useWalletBalance({
        client: client,
        chain: sepolia,
        address: account?.address,
    });
    return (
        <div>

            <p>Wallet address: {
                account?.address
            }</p>
            <p>
                Wallet balance: {balance?.displayValue} {balance?.symbol}
            </p>
        </div>
    );
}

export default WalletDetails;
