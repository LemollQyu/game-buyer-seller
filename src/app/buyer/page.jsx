import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";

export default function Buyer() {
  return (
    <>
      <LayoutUtama>
        <div
          className=" overflow-hidden"
          style={{
            backgroundImage: "url(/tampilan/6.png)",
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

          <div className="absolute flex gap-8 items-center right-14 top-8">
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
          </div>

          <Link href={"/seller"} className="absolute right-5 bottom-42">
            <Image
              alt="button"
              src={"/button/seller.png"}
              width={120}
              height={120}
              className=" translate-y-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 rounded-md"
            />
          </Link>

          {/* unutk etalase tokonya */}
          <div className="flex justify-between gap-2 items-center border absolute bottom-0">
            <Link href={"/pembelian-buah"}>
              <div className="  w-[200px] h-[300px] border"></div>
            </Link>
            <Link href={"/pembelian-roti"}>
              <div className="  w-[200px] h-[300px] border"></div>
            </Link>
            <Link href={"/pembelian-sembako"}>
              <div className="  w-[200px] h-[300px] border"></div>
            </Link>
          </div>
        </div>
      </LayoutUtama>
    </>
  );
}
