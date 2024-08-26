import { WalletBtn } from "./component/ui/walletBtn";
import WalletDetails from "./component/ui/WalletDetails";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen space-y-12 w-full">
        
        <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-5xl text-transparent'>
          CoinFlip
        </span>
        <div className="flex flex-col gap-4">
          <WalletBtn />
          
        </div>
      </div>
    </>
  );
}
