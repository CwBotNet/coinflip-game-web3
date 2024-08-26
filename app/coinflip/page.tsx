import { useContractEvents } from "thirdweb/react";
import { WalletButton } from "../component/ui/WalletButton";
import WalletDetails from "../component/ui/WalletDetails";
import PlaceBet from "../component/ui/PlaceBet";

const CoinFlip = () => {
    return (
        <>
            <div className="flex float-end p-4">
                <WalletButton />
            </div>
            <div className="p-12 h-full w-full flex flex-col space-y-16 justify-center items-center">
                <div>
                    <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-5xl text-transparent'>
                        CoinFlip
                    </span>
                </div>
                <WalletDetails />

                <div>
                    <PlaceBet />
                </div>
            </div>
        </>
    );
}

export default CoinFlip;