"use client";
import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useCoin } from "@/context/coinContext";
import { useAudio } from "@/context/audioProvider";

export default function Menu() {
  const [coinBuyer, setCoinBuyer] = useState(50000);
  const { tambahCoin } = useCoin();
  const { toggleAudio, isPlaying } = useAudio();

  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/musik/press-sound.mp3");
    }
  }, []);

  const playAudio = () => {
    audioRef.current
      ?.play()
      .catch((e) => console.error("Gagal memutar audio:", e));
  };

  // useEffect(() => {
  //   console.log(coinBuyer);
  // }, [coinBuyer]);

  const handleTambahCoinBuyer = () => {
    if (coinBuyer < 0) {
      setCoinBuyer(0);
    } else {
      setCoinBuyer(coinBuyer + 1);
    }
  };

  useEffect(() => {
    console.log(coinBuyer);
  }, [coinBuyer]);
  // console.log(coinBuyer);

  return (
    <>
      <LayoutUtama>
        <div
          className=" overflow-hidden"
          style={{
            backgroundImage: "url(/tampilan/4.png)",
            width: "100%",
            height: "700px",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <Link onClick={playAudio} href={"/"}>
            <Image
              alt="button"
              src={"/bahan/button/13.png"}
              width={100}
              height={100}
              className="absolute left-14 top-5  bottom-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
            />
          </Link>

          {/* button unutk  menaacari coin */}

          <div onClick={tambahCoin}>
            <Image
              alt="button"
              src={"/bahan/button/19.png"}
              width={80}
              height={80}
              className="absolute right-12 top-52 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
            />
          </div>

          <Image
            alt="button"
            onClick={toggleAudio}
            src={"/bahan/button/15.png"}
            width={80}
            height={80}
            className="absolute right-12 top-28   cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
          />

          <div className="flex  items-center  gap-3 absolute left-14 bottom-0">
            <Link
              onClick={playAudio}
              href={"/buyer-seller?role=buyer"}
              className=""
            >
              <Image
                alt="button"
                src={"/button/buyer.png"}
                width={120}
                height={120}
                className=" translate-y-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 rounded-md"
              />
            </Link>
            <Link onClick={playAudio} href={"/seller"} className="">
              <Image
                alt="button"
                src={"/button/seller.png"}
                width={120}
                height={120}
                className="cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 rounded-md"
              />
            </Link>
          </div>

          <div className="w-[400px] h-[480px]  absolute left-1/2 top-1/2 -translate-1/2">
            <Image
              src={"/karakter/1.png"}
              height={500}
              width={500}
              alt="karakter"
              className="object-center w-full h-full"
            />
          </div>
        </div>
      </LayoutUtama>
    </>
  );
}
