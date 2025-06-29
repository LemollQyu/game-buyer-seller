"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Petunjuk() {
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
    <div className="border w-[1200px] h-[700px] mx-auto mt-5 rounded-md relative bg-[#f7c58b]">
      <div
        className=" overflow-hidden"
        style={{
          backgroundImage: "url(/tampilan/8.png)",
          width: "100%",
          height: "700px",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
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

        <div className="w-[700px] relative h-[1000px]  -translate-x-1/2 left-1/2 -top-32">
          {" "}
          <Image
            src={"/bahan/papan-tulis.png"}
            alt="papan"
            width={900}
            height={900}
            className="w-full h-full object-fill"
          />
          <div className="absolute w-[480px] top-72 left-28 text-sm leading-relaxed text-black font-medium">
            <p className="mb-2 text-lg">
              🕹️ <strong>Petunjuk Permainan</strong>
            </p>
            <p className="mb-2">
              Terdapat 2 peran utama: <strong>Pembeli</strong> &{" "}
              <strong>Penjual</strong>.
            </p>
            <p className="mb-2">
              <strong>Pembeli:</strong> dapat membeli barang dari etalase yang
              dibuka oleh penjual. Pembeli mendapat koin awal Rp50.000 dan bisa
              menambahkan koin dengan menekan tombol tambah koin (+Rp50 tiap
              tekan).
            </p>
            <p className="mb-2">
              <strong>Penjual:</strong> hanya bisa membuka etalase. Ada dua:
              buah (terbuka dari awal) & roti (terkunci). Etalase roti akan
              terbuka jika penjual sudah mendapat uang dari hasil penjualan.
            </p>
            <p className="text-lg">🎯 Selamat bermain!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
