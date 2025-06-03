"use client";

import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useCoin } from "@/context/coinContext";
import { useMoney } from "@/context/moneyContext"; // ← import context money

export default function Pembelian() {
  const kata = "Hollaworldeld";

  const audioRef = useRef(null);
  const audioMoneyRef = useRef(null); // untuk suara "money"

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     audioRef.current = new Audio("/musik/press-sound.mp3");
  //   }
  // }, []);

  const playAudio = () => {
    audioRef.current
      ?.play()
      .catch((e) => console.error("Gagal memutar audio:", e));
  };

  // Menyusun kata yang diulang sebanyak 12.100 kali
  let result = "";

  for (let i = 0; i < 12100; i++) {
    result += kata + " "; // Menambahkan kata dan spasi ke dalam result
  }

  // Tampilkan hasil di console
  console.log(result);

  const { coinBuyer, setCoinBuyer, tambahCoin } = useCoin();
  const { setMoney, money } = useMoney();

  const arrayBuah = [
    ["apel", 5000],
    ["jeruk", 2500],
    ["pear", 5000],
    ["leci", 3000],
    ["terong", 2000],
    ["sawi", 3000],
    ["lemon", 5000][("pisang", 4000)],
    ["kentang", 2500],
    ["semangka", 12000],
    ["waloh", 10000],
    ["tomat", 2000],
  ];

  const [totalHarga, setTotalHarga] = useState(0);
  const [namaBuah, setNamaBuah] = useState("");

  console.log(totalHarga);

  const handleReset = () => {
    setTotalHarga(0);
    setNamaBuah("");
    playAudio();
  };

  useEffect(() => {
    audioRef.current = new Audio("/musik/press-sound.mp3");
    audioMoneyRef.current = new Audio("/musik/money-sound.mp3");
  }, []);

  const playAudioMoney = () => {
    audioMoneyRef.current
      ?.play()
      .catch((e) => console.error("Gagal memutar audio:", e));
  };

  const handleClickBayar = () => {
    if (coinBuyer >= totalHarga) {
      // Reset waktu dan mainkan ulang dari awal
      playAudioMoney();

      setCoinBuyer(coinBuyer - totalHarga);
      setMoney((prev) => prev + totalHarga); // Tambah ke money
      console.log("Bayar berhasil. Sisa koin: ", coinBuyer - totalHarga);
      console.log("Uang sekarang: ", money + totalHarga);
      setTotalHarga(0); // Reset total belanja
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
                  playAudio();
                  setTotalHarga(totalHarga + 2500);
                  setNamaBuah("Jeruk");
                }}
              >
                <Image
                  src={"/buah/jeruk.png"}
                  height={70}
                  width={70}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  playAudio();
                  setNamaBuah("Apel");
                  setTotalHarga(totalHarga + 5000);
                }}
              >
                <Image
                  src={"/buah/apel.png"}
                  height={70}
                  width={70}
                  alt="Apel"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 2500);
                  setNamaBuah("Jeruk");
                }}
              >
                <Image
                  src={"/buah/jeruk.png"}
                  height={70}
                  width={70}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 5000);
                  setNamaBuah("Pear");
                }}
              >
                <Image
                  src={"/buah/pear.png"}
                  height={70}
                  width={70}
                  alt="Pear"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 3000);
                  setNamaBuah("Leci");
                }}
              >
                <Image
                  src={"/buah/leci.png"}
                  height={70}
                  width={70}
                  alt="Leci"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* rak kedua */}
            <div className="flex items-center justify-evenly mt-2  -2 w-[352px] mx-auto h-[70px]  -blue-600">
              <div
                className="w-[80px] h-full "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 5000);
                  setNamaBuah("Pear");
                }}
              >
                <Image
                  src={"/buah/pear.png"}
                  height={70}
                  width={100}
                  alt="Pear"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[80px] h-full"
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 2000);
                  setNamaBuah("Terong");
                }}
              >
                <Image
                  src={"/buah/terong.png"}
                  height={70}
                  width={100}
                  alt="Terong"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[80px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 3000);
                  setNamaBuah("Kol");
                }}
              >
                <Image
                  src={"/buah/kol.png"}
                  height={70}
                  width={100}
                  alt="Kol"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[60px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 5000);
                  setNamaBuah("Kol");
                }}
              >
                <Image
                  src={"/buah/apel.png"}
                  height={70}
                  width={70}
                  alt="Apel"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* rak ketiga */}
            <div className="flex items-center gap-2  -2 mt-2 w-[352px] mx-auto h-[62px]  -blue-600">
              <div
                className="w-[70px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 4000);
                  setNamaBuah("Kol");
                }}
              >
                <Image
                  src={"/buah/pisang.png"}
                  height={100}
                  width={200}
                  alt="Pisang"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[70px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 5000);
                  setNamaBuah("Lemon");
                }}
              >
                <Image
                  src={"/buah/lemon.png"}
                  height={120}
                  width={200}
                  alt="Lemon"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[70px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 5000);
                  setNamaBuah("Pear");
                }}
              >
                <Image
                  src={"/buah/pear.png"}
                  height={120}
                  width={200}
                  alt="Pear"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[70px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 2500);
                  setNamaBuah("Kentang");
                }}
              >
                <Image
                  src={"/buah/kentang.png"}
                  height={120}
                  width={200}
                  alt="Kentang"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[70px] h-full"
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 3000);
                  setNamaBuah("Leci");
                }}
              >
                <Image
                  src={"/buah/leci.png"}
                  height={120}
                  width={200}
                  alt="Leci"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* rak keempat */}
            <div className="flex items-center justify-between   -2 mt-3 w-[382px] mx-auto h-[85px]  -blue-600">
              <div
                className="w-[90px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 12000);
                  setNamaBuah("Semangka");
                }}
              >
                <Image
                  src={"/buah/semongko.png"}
                  height={70}
                  width={70}
                  alt="Semangka"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[90px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 10000);
                  setNamaBuah("Labu");
                }}
              >
                <Image
                  src={"/buah/waloh.png"}
                  height={70}
                  width={70}
                  alt="Labu"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                className="w-[90px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 3000);
                  setNamaBuah("Tomat");
                }}
              >
                <Image
                  src={"/buah/tomat.png"}
                  height={70}
                  width={70}
                  alt="Tomat"
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="w-[90px] h-full  "
                onClick={() => {
                  playAudio();
                  setTotalHarga(totalHarga + 12000);
                  setNamaBuah("Semangka");
                }}
              >
                <Image
                  src={"/buah/semongko.png"}
                  height={70}
                  width={70}
                  alt="Semongko"
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
              <p className="font-bold text-amber-950">Beli : {namaBuah}</p>
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
