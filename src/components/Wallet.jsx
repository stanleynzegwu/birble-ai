import Image from "next/image";
import { WALLET_DETAILS } from "../constants";
import walletBgImage from "../../public//lazer.png";

const Wallet = () => {
  return (
    <div className="relative w-[27.8%] h-full rounded-3xl p-3">
      <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-3xl ">
        <Image
          src={walletBgImage}
          alt={"backgound image"}
          placeholder="blur"
          width={1000}
          height={1000}
          className="w-full h-full bg-cover object-cover rounded-3xl"
        />
      </div>
      <div className="p-2 2xl:p-6 h-full w-full rounded-3xl flex flex-col justify-between bg-gradient-to-bl from-[#1D2641] to-[#1D2E56]">
        <div className="text-sm capitalize">
          <div className="flex justify-between">
            <span>wallet balance</span>
            <Image
              src={"/assets/icons/empty-wallet.png"}
              alt={"walet icon"}
              width={20}
              height={20}
              className="bg-cover object-cover"
            />
          </div>

          <div className="flex flex-col capitalize">
            <span className="text-lg font-bold">9,758.41</span>
            <span className="text-[12px] text-[#A7A7BE] tracking-tighter">birble AI tokens</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <span className="text-[12px] flex justify-end text-[#A7A7BE]">Remaining</span>
          <div className="relative p-2 flex flex-col bg-[#373A63] rounded-2xl text-sm">
            {WALLET_DETAILS.map(({ assetName, amount }, index) => (
              <div key={index} className="text-[12px] flex justify-between capitalize">
                <span className="text-[#A7A7BE]">{assetName}</span>
                <span className="">{amount}</span>
              </div>
            ))}

            {/* ABSOLUTELY POSITIONED LINE */}
            <div className="absolute w-full left-4 top-1/2 transform -translate-y-1/2 bg-[rgb(255,255,255,0.1)] h-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
