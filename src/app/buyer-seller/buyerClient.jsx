"use client";

import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useMoney } from "@/context/moneyContext";

export default function BuyerClient() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const [etalaseTerbuka, setEtalaseTerbuka] = useState(false);
  const { money, setMoney } = useMoney();

  useEffect(() => {
    const status = localStorage.getItem("etalase-roti-terbuka");
    if (status === "true") {
      setEtalaseTerbuka(true);
    }
  }, []);

  const handleBukaEtalaseRoti = () => {
    const hargaEtalase = 20000;
    if (money >= hargaEtalase) {
      setMoney(money - hargaEtalase);
      setEtalaseTerbuka(true);
      localStorage.setItem("etalase-roti-terbuka", "true");
    } else {
      alert("Saldo tidak cukup untuk membuka etalase!");
    }
  };

  const handleTutupEtalaseRoti = () => {
    const hargaEtalase = 20000;
    setMoney(money + hargaEtalase);
    setEtalaseTerbuka(false);
    localStorage.setItem("etalase-roti-terbuka", "false");
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
        <Link href={"/menu"}>
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
          <Link href={"/seller"} className="absolute right-5 bottom-42">
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
              <Link href={"/pembelian-buah"}>
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
              <Link href={"/pembelian-roti"}>
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
