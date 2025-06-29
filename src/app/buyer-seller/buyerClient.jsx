"use client";

import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useMoney } from "../../context/moneyContext";

export default function BuyerClient() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const [etalaseTerbuka, setEtalaseTerbuka] = useState(false);
  const { money, setMoney } = useMoney();

  const [disabledEtalase, setDisabledEtalase] = useState(false);

  const DELAY_MS = 1500; // 1.5 detik delay

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

  useEffect(() => {
    const status = localStorage.getItem("etalase-roti-terbuka");
    if (status === "true") {
      setEtalaseTerbuka(true);
    }
  }, []);

  const handleBukaEtalaseRoti = () => {
    if (disabledEtalase) return; // Cegah klik berulang cepat
    setDisabledEtalase(true); // Nonaktifkan tombol sementara

    const hargaEtalase = 20000;
    if (money >= hargaEtalase) {
      setMoney(money - hargaEtalase);
      setEtalaseTerbuka(true);
      localStorage.setItem("etalase-roti-terbuka", "true");

      playAudio();
    } else {
      alert("Saldo tidak cukup untuk membuka etalase!");
      playAudio();
    }

    setTimeout(() => setDisabledEtalase(false), DELAY_MS); // Aktifkan lagi setelah delay
  };

  const handleTutupEtalaseRoti = () => {
    if (disabledEtalase) return;
    setDisabledEtalase(true);

    setMoney(money + 20000);
    setEtalaseTerbuka(false);
    localStorage.setItem("etalase-roti-terbuka", "false");

    playAudio();

    setTimeout(() => setDisabledEtalase(false), DELAY_MS);
  };

  return (
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
        {/* debug error  */}
        <Link onClick={playAudio} href={"/menu"}>
          <Image
            alt="button"
            src={"/button/23.png"}
            width={100}
            height={100}
            className="absolute left-12 top-32  bottom-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
          />
        </Link>

        {role == "seller" ? (
          <Link
            onClick={playAudio}
            href={"/buyer-seller?role=buyer"}
            className="absolute right-5 bottom-42"
          >
            <Image
              alt="button"
              src={"/button/buyer.png"}
              width={120}
              height={120}
              className=" translate-y-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 rounded-md"
            />
          </Link>
        ) : (
          <Link
            onClick={playAudio}
            href={"/seller"}
            className="absolute right-5 bottom-42"
          >
            <Image
              alt="button"
              src={"/button/seller.png"}
              width={120}
              height={120}
              className=" translate-y-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 rounded-md"
            />
          </Link>
        )}

        {/* Etalase toko */}
        <div className="flex items-center absolute left-[140px] bottom-[100px]">
          {role == "seller" ? (
            <>
              <div className="w-[300px] h-[300px]">
                <Image
                  alt="Etalase sayur"
                  src={"/etalase/etalase-putih-sayur.png"}
                  width={300}
                  height={340}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="-ml-6 w-[300px] h-[300px]">
                <Image
                  alt="Etalase roti"
                  src={"/etalase/etalase-putih-roti.png"}
                  width={300}
                  height={340}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <Link onClick={playAudio} href={"/pembelian-buah"}>
                <div className="w-[300px] h-[300px]">
                  <Image
                    alt="Etalase sayur"
                    src={"/etalase/etalase-putih-sayur.png"}
                    width={200}
                    height={340}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
              <Link onClick={playAudio} href={"/pembelian-roti"}>
                <div className="-ml-6 w-[300px] h-[300px]">
                  <Image
                    alt="Etalase roti"
                    src={"/etalase/etalase-putih-roti.png"}
                    width={200}
                    height={340}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </>
          )}

          <div
            className={`${
              etalaseTerbuka ? "hidden" : "flex"
            } bg-transparent w-[290px] h-[280px] border absolute right-0 bottom-[0px] items-center justify-center`}
          >
            <Image
              src={"/bahan/lock.png"}
              height={100}
              width={100}
              alt="kunci"
            />
            {role == "seller" && !etalaseTerbuka ? (
              <div
                onClick={handleBukaEtalaseRoti}
                className="border absolute z-10 px-4 py-2 bg-red-500 text-white bottom-10 cursor-pointer rounded-md"
              >
                buka etalase
              </div>
            ) : null}
          </div>

          {etalaseTerbuka && role === "seller" && (
            <div
              onClick={handleTutupEtalaseRoti}
              className="absolute z-10 bottom-[-45px] left-[370px] bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              tutup etalase
            </div>
          )}
        </div>
      </div>
    </LayoutUtama>
  );
}
