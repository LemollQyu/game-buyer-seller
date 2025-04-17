"use client";
import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Menu() {
  const [coinBuyer, setCoinBuyer] = useState(50000);

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
          <Link href={"/"}>
            <Image
              alt="button"
              src={"/bahan/button/13.png"}
              width={100}
              height={100}
              className="absolute left-14 top-5  bottom-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
            />
          </Link>

          {/* button unutk  menaacari coin */}

          <div onClick={handleTambahCoinBuyer}>
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
            src={"/bahan/button/15.png"}
            width={80}
            height={80}
            className="absolute right-12 top-28   cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
          />

          <div className="flex  items-center  gap-3 absolute left-14 bottom-0">
            <Link href={"/buyer"} className="">
              <Image
                alt="button"
                src={"/button/buyer.png"}
                width={120}
                height={120}
                className=" translate-y-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 rounded-md"
              />
            </Link>
            <Link href={"/seller"} className="">
              <Image
                alt="button"
                src={"/button/seller.png"}
                width={120}
                height={120}
                className="cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 rounded-md"
              />
            </Link>
          </div>
        </div>
      </LayoutUtama>
    </>
  );
}
