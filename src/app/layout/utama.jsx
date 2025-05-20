"use client";
import Image from "next/image";
import { useCoin } from "@/context/coinContext"; // path-nya sesuaikan
import { useMoney } from "@/context/moneyContext"; // ✅ Tambahkan ini
import MusikManual from "@/comp/music";

const LayoutUtama = ({ children }) => {
  const { coinBuyer } = useCoin(); // Ambil coin dari context
  const { money } = useMoney(); // ✅ Ambil money dari context

  return (
    <div className="border w-[1200px] h-[700px] mx-auto mt-5 rounded-md relative">
      <div className="absolute flex gap-8 items-center right-14 top-8">
        <div className="border-2 w-[160px] h-[50px] flex items-center justify-center rounded-full relative">
          <Image
            alt="coin icon"
            src={"/bahan/button/18.png"}
            width={60}
            height={60}
            className="absolute -left-10 -bottom-4"
          />
          <p>Rp. {coinBuyer}</p>
        </div>
        <div className="border-2 w-[160px] h-[50px] flex items-center justify-center rounded-full relative">
          <Image
            alt="coin icon"
            src={"/bahan/button/20.png"}
            width={60}
            height={60}
            className="absolute -left-10 -bottom-4"
          />
          <p>Rp. {money}</p>
        </div>
      </div>

      {/* ini unutk wadah money */}

      {children}
    </div>
  );
};

export default LayoutUtama;
