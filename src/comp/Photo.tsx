"use client";
import Image from "next/image";

export default function Photo({ src, nama, jabatan, kalimat }) {
  return (
    <div className="group relative h-[380px] px-4 flex flex-col justify-end py-4 gap-4  w-[300px]">
      <div
        className="w-[300px] h-[300px] absolute top-0
          left-0 group-hover:-top-28 transition-all duration-500 overflow-hidden rounded-lg"
      >
        <Image src={src} height={300} width={300} alt={nama} />
      </div>

      <div>
        <p className="font-light">{kalimat}</p>
      </div>
      <div>
        <h2 className="font-medium text-xl">{nama}</h2>
        <p className="text-lg">{jabatan}</p>
      </div>
    </div>
  );
}
