"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LayoutUtama from "./layout/utama";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    const audio = new Audio("/musik/press-sound.mp3");
    audio.play().catch((e) => console.error("Gagal memutar audio:", e));

    setTimeout(() => {
      router.push("/menu");
    }, 300); // Delay
  };

  return (
    <>
      <LayoutUtama>
        <div
          className="overflow-hidden"
          style={{
            backgroundImage: "url(/bahan/desain-page/1.png)",
            width: "100%",
            height: "700px",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div onClick={handleClick}>
            <Image
              alt="button"
              src={"/bahan/button/6.png"}
              width={120}
              height={120}
              className="absolute left-1/2 -translate-x-[45%] bottom-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
            />
          </div>
        </div>
      </LayoutUtama>
    </>
  );
}
