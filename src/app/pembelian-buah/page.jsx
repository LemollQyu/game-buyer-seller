import LayoutUtama from "../layout/utama";
import Link from "next/link";
import Image from "next/image";

export default function Pembelian() {
  const handleClickBayar = () => {
    console.log("Ini pembayaran");
  };
  return (
    <>
      <LayoutUtama>
        <div
          className=" overflow-hidden"
          style={{
            // backgroundImage: "url(/tampilan/9.png)",
            width: "100%",
            height: "700px",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
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

          {/* etalse pembelian buah */}

          <div className="w-[560px] border-3 z-10 absolute top-30 left-56 h-[550px]">
            <Image
              src={"/etalase/3.png"}
              height={800}
              width={800}
              alt="etalase-buah"
              className="object-cover border w-full h-full"
            />
          </div>

          {/* layout unutk buah buah dengan catatan  z-20 */}
          <div className="z-20 border-2 border-amber-200 pt-[107px]  w-[560px] absolute top-30 left-56 h-[550px]">
            {/* rak pertama */}
            <div className="flex items-center justify-evenly gap-2 border-2 w-[352px] mx-auto h-[62px] border-blue-600">
              {/*  */}
              <div className="w-[60px] h-full border">
                <Image
                  src={"/buah/jeruk.png"}
                  height={70}
                  width={70}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[60px] h-full border">
                <Image
                  src={"/buah/apel.png"}
                  height={70}
                  width={70}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[60px] h-full border">
                <Image
                  src={"/buah/jeruk.png"}
                  height={70}
                  width={70}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[60px] h-full border">
                <Image
                  src={"/buah/pear.png"}
                  height={70}
                  width={70}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[60px] h-full border">
                <Image
                  src={"/buah/leci.png"}
                  height={70}
                  width={70}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* rak kedua */}
            <div className="flex items-center gap-2 mt-2 border-2 w-[352px] mx-auto h-[62px] border-blue-600">
              <div className="w-[150px] h-full border">
                <Image
                  src={"/buah/pear.png"}
                  height={70}
                  width={100}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[150px] h-full border">
                <Image
                  src={"/buah/terong.png"}
                  height={70}
                  width={100}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-[150px] h-full border">
                <Image
                  src={"/buah/kol.png"}
                  height={70}
                  width={100}
                  alt="Jeruk"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* rak ketiga */}
            <div className="flex items-center gap-2 border-2 mt-2 w-[352px] mx-auto h-[62px] border-blue-600"></div>

            {/* rak keempat */}
            <div className="flex items-center gap-2 border-2 mt-5 w-[382px] mx-auto h-[85px] border-blue-600"></div>
          </div>

          {/* <Link href={"/bayar"}> */}
          <div className="rounded-full absolute bottom-10 left-14 flex flex-col gap-2">
            <div className="border-amber-800 bg-amber-600 border-4  w-[150px] flex items-center justify-center h-[50px] rounded-full">
              <p className="font-bold text-amber-950">Rp. 20.000</p>
            </div>
            <div
              // onClick={handleClickBayar}
              className="rounded-full border-amber-800 bg-amber-600 border-4  w-[150px] flex items-center justify-center h-[50px] "
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
