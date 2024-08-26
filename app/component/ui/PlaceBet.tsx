"use client";
import { contract } from "@/app/utlis/contract";
import { useState } from "react";
import { prepareContractCall, toWei } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import { flipCoin } from "@/app/lib/flipCoin";

const PlaceBet = () => {
    const [amount, setAmount] = useState("");
    const [isHead, setIsHead] = useState<boolean | null>(null); // Use null for initial state
    const [guess, setGuess] = useState<boolean | null>(null); // Use null for initial state
    const payableAmount = toWei(amount);

    const coin = {
        heads: true,
        tails: false
    };

    const flip = () => {
        const result = flipCoin(); // Flip the coin and get the result (true for heads, false for tails)
        setIsHead(!result); // Update the state to reflect the result of the coin flip
        if (result === guess) {
            return true
        }
        // console.log(result, guess)
        return false; // Return true if the guess matches the result, false otherwise
    };

    const handleTransaction = async () => {
        if (flip()) {
            // Proceed with the transaction only if the guess is correct
            return prepareContractCall({
                contract: contract,
                method: "placeBet",
                params: [true], // Use the user's guess
                value: payableAmount
            });
        } else {
            // Proceed with the transaction only if the guess is incorrect
            return prepareContractCall({
                contract: contract,
                method: "placeBet",
                params: [false], // Use the user's guess
                value: payableAmount
            });
        }
    };

    return (
        <>
            <div className="space-y-6">
                <input
                    className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
                    type="text"
                    placeholder='bet amount'
                    onChange={(e: any) => setAmount(e.target.value)}
                />

                <div className="flex justify-around space-x-4">
                    <TransactionButton
                        onClick={() => setGuess(true)}
                        transaction={() => handleTransaction()}
                        onError={(e) => console.log(e)}
                        onTransactionSent={() => console.log("Transaction in process")}
                        onTransactionConfirmed={() => setIsHead(null)}
                    >
                        Heads
                    </TransactionButton>

                    <TransactionButton
                        onClick={() => setGuess(false)}
                        transaction={() => handleTransaction()}
                        onError={(e) => console.log(e)}
                        onTransactionSent={() => console.log("Transaction in process")}
                        onTransactionConfirmed={() => setIsHead(null)}
                    >
                        Tails
                    </TransactionButton>
                </div>

                <div className="flex justify-center p-12 text-5xl">
                    <h1>
                        {isHead === null ? "Make a guess" : isHead ? "Heads" : "Tails"}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default PlaceBet;
