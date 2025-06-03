"use client";
import Link from "next/link";
import LayoutUtama from "../layout/utama";
import Image from "next/image";
import ShinyButton from "@/comp/btnUpToko";
import { useRef, useEffect } from "react";

export default function Seller() {
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
  return (
    <>
      <LayoutUtama>
        <div
          className=" overflow-hidden"
          style={{
            backgroundImage: "url(/tampilan/5.png)",
            width: "100%",
            height: "700px",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          {/* <div className="w-36 h-36 absolute left-1/2 -translate-x-1/2 bottom-56 rounded-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-orange-500 shadow-lg flex items-center justify-center border-[8px] border-orange-400 ">
            <div className="absolute inset-1 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 flex items-center justify-center font-bold text-lg text-[#fefefe] text-center">
              Upgrade <br />
              Toko
            </div>
          </div> */}

          <Link
            onClick={playAudio}
            href={"/buyer-seller?role=seller"}
            className="absolute left-1/2 -translate-x-1/2 bottom-56"
          >
            <ShinyButton />
          </Link>
          <Link onClick={playAudio} href={"/menu"}>
            <Image
              alt="button"
              src={"/button/23.png"}
              width={100}
              height={100}
              className="absolute left-12 top-32  bottom-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
            />
          </Link>
        </div>
      </LayoutUtama>
    </>
  );
}
