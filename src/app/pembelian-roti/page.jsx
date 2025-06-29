"use client";

import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCoin } from "../../context/coinContext";
import { useMoney } from "../../context/moneyContext"; // ← import context money
import { useRef, useEffect } from "react";

export default function Pembelian() {
  const kata = "Hollaworldeld";

  // Menyusun kata yang diulang sebanyak 12.100 kali
  let result = "";

  for (let i = 0; i < 12100; i++) {
    result += kata + " "; // Menambahkan kata dan spasi ke dalam result
  }

  // Tampilkan hasil di console
  console.log(result);

  const { coinBuyer, setCoinBuyer, tambahCoin } = useCoin();
  const { setMoney, money } = useMoney();

  const [totalHarga, setTotalHarga] = useState(0);
  const [namaBuah, setNamaBuah] = useState("");

  console.log(totalHarga);

  const audioRef = useRef(null);
  const audioMoneyRef = useRef(null); // untuk suara "money"

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioMoneyRef.current = new Audio("/musik/money-sound.mp3");
    }
  }, []);

  const playAudioMoney = () => {
    audioMoneyRef.current
      ?.play()
      .catch((e) => console.error("Gagal memutar audio:", e));
  };

  const handleReset = () => {
    setTotalHarga(0);
    setNamaBuah("");
    playAudio();
  };

  // handle pembayarannya
  const handleClickBayar = () => {
    if (coinBuyer >= totalHarga) {
      setCoinBuyer(coinBuyer - totalHarga);
      setMoney((prev) => prev + totalHarga); // Tambah ke money
      console.log("Bayar berhasil. Sisa koin: ", coinBuyer - totalHarga);
      console.log("Uang sekarang: ", money + totalHarga);
      setTotalHarga(0); // Reset total belanja
      playAudioMoney();
    } else {
      console.log(
        "Koin tidak cukup! Coin anda: ",
        coinBuyer,
        " Harga: ",
        totalHarga
      );
      alert("Koin tidak cukup untuk membeli!");
    }
  };

  return (
    <>
      <LayoutUtama>
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
          {/* etalse pembelian buah */}

          <div className="w-[560px]  -3 z-10 absolute top-30 left-56 h-[550px]">
            <Image
              src={"/etalase/3.png"}
              height={800}
              width={800}
              alt="etalase-buah"
              className="object-cover   w-full h-full"
            />
          </div>

          {/* layout unutk buah buah dengan catatan  z-20 */}
          <div className="z-20  -2  -amber-200 pt-[107px]  w-[560px] absolute top-30 left-56 h-[550px]">
            {/* rak pertama */}
            <div className="flex items-center justify-evenly gap-2  -2 w-[352px] mx-auto h-[62px]  -blue-600">
              {/*  */}
              <div
                className="w-[60px] h-full"
                onClick={() => {
                  setTotalHarga(totalHarga + 6000);
                  setNamaBuah("Roti Kering");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/17.png"}
                  height={70}
                  width={70}
                  alt="Roti Kering"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  setNamaBuah("Roti Gandum");
                  setTotalHarga(totalHarga + 6000);
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/18.png"}
                  height={70}
                  width={70}
                  alt="Roti Gandum"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 14000);
                  setNamaBuah("Roti Artisan");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/19.png"}
                  height={70}
                  width={70}
                  alt="Roti Artisan"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 10000);
                  setNamaBuah("Roti Sourdough");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/20.png"}
                  height={70}
                  width={70}
                  alt="Roti Sourdough"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 8000);
                  setNamaBuah("Roti Tawar");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/21.png"}
                  height={70}
                  width={70}
                  alt="Roti Tawar"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* rak kedua */}
            <div className="flex items-center justify-evenly mt-2  -2 w-[352px] mx-auto h-[70px]  -blue-600">
              <div
                className="w-[80px] h-full "
                onClick={() => {
                  setTotalHarga(totalHarga + 8000);
                  setNamaBuah("Roti Tawar");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/21.png"}
                  height={70}
                  width={100}
                  alt="Roti Tawar"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[80px] h-full"
                onClick={() => {
                  setTotalHarga(totalHarga + 10000);
                  setNamaBuah("Roti Sourdough");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/20.png"}
                  height={70}
                  width={100}
                  alt="Roti Sourdough"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[80px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 20000);
                  setNamaBuah("Roti Campuran");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/23.png"}
                  height={70}
                  width={100}
                  alt="Roti Campuran"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 7000);
                  setNamaBuah("Roti Kaiser Roll");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/24.png"}
                  height={70}
                  width={70}
                  alt="Roti Kaiser Roll"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* rak ketiga */}
            <div className="flex items-center gap-2  -2 mt-2 w-[352px] mx-auto h-[62px]  -blue-600">
              <div
                className="w-[70px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 12000);
                  setNamaBuah("Roti Gandum Lapis");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/25.png"}
                  height={100}
                  width={200}
                  alt="Roti Gandum Lapis"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[70px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 8000);
                  setNamaBuah("Roti Tawar");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/21.png"}
                  height={120}
                  width={200}
                  alt="Roti Tawar"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[70px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 9000);
                  setNamaBuah("Humburger");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/26.png"}
                  height={120}
                  width={200}
                  alt="Humberger"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[70px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 8000);
                  setNamaBuah("Roti Tawar");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/21.png"}
                  height={120}
                  width={200}
                  alt="Roti Tawar"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[70px] h-full"
                onClick={() => {
                  setTotalHarga(totalHarga + 11000);
                  setNamaBuah("Roti Grissini");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/22.png"}
                  height={120}
                  width={200}
                  alt="Roti Grissini"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* rak keempat */}
            <div className="flex items-center justify-between   -2 mt-3 w-[382px] mx-auto h-[85px]  -blue-600">
              <div
                className="w-[90px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 12000);
                  setNamaBuah("Roti Gandum Lapis");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/25.png"}
                  height={70}
                  width={70}
                  alt="Roti Gandum Lapis"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[90px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 11000);
                  setNamaBuah("Roti Grissini");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/22.png"}
                  height={70}
                  width={70}
                  alt="Roti Grissini"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[90px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 10000);
                  setNamaBuah("Roti Sourdough");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/20.png"}
                  height={70}
                  width={70}
                  alt="Roti Sourdough"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[90px] h-full  "
                onClick={() => {
                  setTotalHarga(totalHarga + 20000);
                  setNamaBuah("Roti Campuran");
                  playAudio();
                }}
              >
                <Image
                  src={"/roti/23.png"}
                  height={70}
                  width={70}
                  alt="Roti Campuran"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* menu home */}

          <Link onClick={playAudio} href={"/menu"}>
            <Image
              alt="button"
              src={"/bahan/button/13.png"}
              width={100}
              height={100}
              className="absolute left-14 top-5  bottom-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
            />
          </Link>

          {/* <Link href={"/bayar"}> */}
          <div className="rounded-full absolute bottom-10 left-14 flex flex-col gap-2">
            <div
              onClick={handleReset}
              className=" -amber-800 bg-amber-600 cursor-pointer  -4  w-[150px] flex items-center justify-center h-[50px] rounded-full"
            >
              <p className="font-bold text-amber-950">Reset Pembelian</p>
            </div>
            <div className=" -amber-800 bg-amber-600  -4  w-[150px] flex items-center justify-center h-[50px] rounded-full">
              <p className="font-bold text-amber-950">{namaBuah}</p>
            </div>
            <div className=" -amber-800 bg-amber-600  -4  w-[150px] flex items-center justify-center h-[50px] rounded-full">
              <p className="font-bold text-amber-950">Rp. {totalHarga}</p>
            </div>
            <div
              onClick={handleClickBayar}
              className="rounded-full cursor-pointer  -amber-800 bg-amber-600  -4  w-[150px] flex items-center justify-center h-[50px] "
            >
              <p className="font-bold text-amber-950 text-2xl">Bayar</p>
            </div>
          </div>
          {/* </Link> */}
        </div>
      </LayoutUtama>
    </>
  );
}
