"use client";
import { useEffect, useRef } from "react";

import Image from "next/image";
const LayoutUtama = ({ children }) => {
  // const audioRef = useRef(null);

  // useEffect(() => {
  //   const audio = audioRef.current;

  //   if (audio) {
  //     const playAudio = () => {
  //       audio.play().catch((e) => {
  //         console.log("Autoplay blocked:", e);
  //       });
  //       document.removeEventListener("click", playAudio);
  //     };

  //     document.addEventListener("click", playAudio);
  //   }
  // }, []);
  return (
    <>
      <div className="border w-[1200px] h-[700px] mx-auto mt-5 rounded-md relative">
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
        {children}
      </div>
      {/* <audio ref={audioRef} src="/song.mp3" loop hidden /> */}
    </>
  );
};

export default LayoutUtama;
