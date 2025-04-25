"use client";

import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Buyer() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const [ada, setAda] = useState("block");

  console.log("User sebagai role = ", role);

  const handleBukaEtalaseRoti = () => {
    console.log("seller membuka etalase roti");
    setAda("hidden");
  };

  return (
    <>
      <LayoutUtama>
        <div
          className=" overflow-hidden"
          style={{
            // backgroundImage: "url(/tampilan/6.png)",
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

          {/* <div className="absolute flex gap-8 items-center right-14 top-8">
            <div className="border-2 w-[160px] h-[50px] w- rounded-full relative">
              <Image
                alt="button"
                src={"/bahan/button/18.png"}
                width={60}
                height={60}
                className="absolute -left-10 -bottom-4"
              />
            </div>
            <div className="border-2 w-[160px] h-[50px] rounded-full relative">
              <Image
                alt="button"
                src={"/bahan/button/20.png"}
                width={70}
                height={70}
                className="absolute -left-10 -bottom-4"
              />
            </div>
          </div> */}

          {role == "seller" ? (
            <>
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
            </>
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

          {/* <Link href={"/seller"} className="absolute right-5 bottom-42">
            <Image
              alt="button"
              src={"/button/seller.png"}
              width={120}
              height={120}
              className=" translate-y-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 rounded-md"
            />
          </Link> */}

          {/* unutk etalase tokonya */}
          <div className="flex  items-center border  absolute left-[130px] bottom-[130px]">
            {/* ini use case unutk buyernya */}
            {role == "seller" ? (
              <>
                <div className="  w-[280px] h-[280px]">
                  <Image
                    alt="Etalase sayur"
                    src={"/etalase/etalase-putih-sayur.png"}
                    width={200}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="-ml-6  w-[280px] h-[280px]">
                  <Image
                    alt="Etalase roti"
                    src={"/etalase/etalase-putih-roti.png"}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                {" "}
                <Link href={"/pembelian-buah"}>
                  <div className="  w-[280px] h-[280px]">
                    <Image
                      alt="Etalase sayur"
                      src={"/etalase/etalase-putih-sayur.png"}
                      width={200}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Link>
                <Link href={"/pembelian-roti"}>
                  <div className="-ml-6  w-[280px] h-[280px]">
                    <Image
                      alt="Etalase roti"
                      src={"/etalase/etalase-putih-roti.png"}
                      width={200}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </>
            )}

            {/* ini hnaya aktif dirole seller */}
            {/* {role == "seller" ? (
              <div className="flex border-amber-200 w-[280px] h-[280px]  items-center border-2  absolute right-0 bottom-[0px]"></div>
            ) : null} */}

            <div
              className={`${ada} flex border-amber-200 w-[280px] h-[280px] border absolute right-0 bottom-[0px] items-center justify-center`}
            >
              {role == "seller" ? (
                <>
                  <div
                    onClick={handleBukaEtalaseRoti}
                    className="border absolute z-10 cursor-pointer rounded-md"
                  >
                    buka etalase
                  </div>
                </>
              ) : null}
            </div>

            {/* ini unutk use */}

            {/* <Link href={"/pembelian-sembako"}>
              <div className="  w-[200px] h-[300px] border"></div>
            </Link> */}
          </div>
        </div>
      </LayoutUtama>
    </>
  );
}
