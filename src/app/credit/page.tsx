"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Credit() {
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
    <div
      className="border w-[1200px] h-[700px] mx-auto mt-5 rounded-md relative"
      style={{ backgroundImage: "url('/tampilan/bg-credit.jpg')" }}
    >
      <Link onClick={playAudio} href={"/menu"}>
        <Image
          alt="button"
          src={"/button/23.png"}
          width={100}
          height={100}
          className="absolute left-12 top-12  bottom-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
        />
      </Link>

      {/* gallery team */}
      <div className="w-full border">
        <div className="rounded-full overflow-hidden w-42 h-42 border"></div>
      </div>
    </div>
  );
}
