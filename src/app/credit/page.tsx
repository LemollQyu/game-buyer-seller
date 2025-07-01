"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Photo from "../../comp/Photo";

export default function Credit() {
  const audioRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0); // 0 = slide pertama
const slideWidth = 710;

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


  

const handleSlideNext = () => {
  // Maksimum slide index = 4 (karena ada 5 item dan index mulai dari 0)
  
 if (slideIndex < 4) {
    setSlideIndex((prev) => prev + 1);
  }
};

const handleSlidePrevious = () => {
  if (slideIndex > 0) {
    setSlideIndex((prev) => prev - 1);
  }
};



  return (
    <div
      className="border w-[1200px] h-[700px] mx-auto mt-5 overflow-hidden  rounded-md relative"
      style={{ backgroundImage: "url('/tampilan/8.png')" }}
    >
      <Link onClick={playAudio} href={"/menu"}>
        <Image
          alt="button"
          src={"/button/23.png"}
          width={100}
          height={100}
          className="absolute left-12 top-12 z-20  bottom-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
        />
      </Link>


      <div className="w-[1000px] relative  h-[1400px] overflow-hidden  -translate-x-1/2 left-1/2 -top-46">
                {" "}
                <Image
                  src={"/bahan/papan-tulis.png"}
                  alt="papan"
                  width={1500}
                  height={1500}
                  className="w-full h-full object-fill z-10"
                />
              
               
      </div>
       <Image
      onClick={() => {
  handleSlideNext();
  playAudio();
}}

                  alt="button"
                  src={"/button/86.png"}
                  width={80}
                  height={80}
                  className="absolute right-62 z-40   bottom-24 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                />
                <Image
        onClick={() => {
  handleSlidePrevious();
  playAudio();
}}
                  alt="button"
                  src={"/button/86.png"}
                  width={80}
                  height={80}
                  className="absolute right-82 z-40 -rotate-180   bottom-24 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                />
                <div className="z-50 absolute -translate-x-1/2 left-1/2 top-1/4">
  <div className="w-[710px] h-[317px] overflow-hidden "> {/* Ini adalah frame/viewport */}
    <div
      className="flex w-[3550px] h-[317px] transition-transform duration-500"
      style={{ transform: `translateX(-${slideIndex * slideWidth}px)` }}
    >
      <div className="w-[710px] h-[317px]  flex flex-col items-center p-4">
       <div className="rounded-full w-42 h-42 overflow-hidden">
        <Image alt="gambar" height={300} width={300} src={"https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-19/504649242_18412511419102063_1571973160681675812_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2QETbOHX0-q4wRH04sQwIAE2FFZiZhiAMU_1dc29gnqfz80sOrWbJxIom7FSdzMNmcc&_nc_ohc=u1k188lbChMQ7kNvwH_TLEA&_nc_gid=e7tYJ2U8T6XZIPFhbUbhcQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfPVHOdL0pCLcr56mtDbgg54OCCGTuS-w6YrPLyqn-44-Q&oe=686956CA&_nc_sid=8b3546"} className="w-full h-full object-cover"/>
       </div>
       <h1 className="text-xl font-medium mt-2">Muhammad Nur Haromain</h1>
       <h1 className="text-sm font-medium mt-1">22103041027</h1>
      </div>
      <div className="w-[710px] h-[317px]  flex flex-col items-center p-4">
        <div className="rounded-full w-42 h-42 overflow-hidden">
        <Image alt="gambar" height={300} width={300} src={"https://instagram.fsrg5-3.fna.fbcdn.net/v/t51.2885-19/486643912_1301606734254375_7410003231996132186_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fsrg5-3.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QGrAlTRIKAVSahdDQlfjhzBnMXiCZ1LlR1LJI_DfG1XCBJyKJnscQHNz8tXtwMHlm8&_nc_ohc=Y5eQUSHVk_EQ7kNvwFORRkC&_nc_gid=pphu5UmpfykhkVpq5HfW9w&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfOtC5gQG3art_f60sgD0Qj4mU0SPa_1YLlC7REz9dxZZg&oe=6866E37E&_nc_sid=8b3546"} className="w-full h-full object-cover"/>
       </div>
       <h1 className="text-xl font-medium mt-2">Dhimas Aditya Darmawan</h1>
       <h1 className="text-sm font-medium mt-1">22103041085</h1>
        
      </div>
      <div className="w-[710px] h-[317px]  flex flex-col items-center p-4">
       <div className="rounded-full w-42 h-42 overflow-hidden">
        <Image alt="gambar" height={300} width={300} src={"https://instagram.fsrg5-2.fna.fbcdn.net/v/t51.2885-19/496838726_18076124074875574_6662618378820573662_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fsrg5-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QEoeOWQwiqOpsnPqESvfVjgDqymQU69yU6dMnxVgOgrxeU0gGtIW6YoyapKSkmPL84&_nc_ohc=-a_LJuWGBF0Q7kNvwGT1Dn4&_nc_gid=Q4lcOyE_geqAIpZntoEZsA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfOUq0yk7pXocnrIr2oejCKZbBgrEVGw2SibXb2pophePw&oe=6866CB04&_nc_sid=8b3546"} className="w-full h-full object-cover"/>
       </div>
       <h1 className="text-xl font-medium mt-2">Himatul Mufiddah</h1>
       <h1 className="text-sm font-medium mt-1">221030410</h1>
      </div>
      <div className="w-[710px] h-[317px]  flex flex-col items-center p-4">
       <div className="rounded-full w-42 h-42 overflow-hidden">
        <Image alt="gambar" height={300} width={300} src={"https://instagram.fsrg5-2.fna.fbcdn.net/v/t51.2885-19/475794486_1298594837846567_1504009700852656608_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fsrg5-2.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QEq5MXz9ISI4JKQWIs9_AIVia9oGjq6_5c1ZJDCl8EZR5IHd-KwnReaJ2NZmzr7DtM&_nc_ohc=CkkLTxrmXN0Q7kNvwHIqUXe&_nc_gid=DtuX4_4XhWS0P9yZGUEfMw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfOubMMS6aYpH9rql_JVrFjARSQMARJJEbtJ3d7xdonj6A&oe=6866C968&_nc_sid=8b3546"} className="w-full h-full object-cover"/>
       </div>
       <h1 className="text-xl font-medium mt-2">Annas Aulia Rahman</h1>
       <h1 className="text-sm font-medium mt-1">22103041039</h1>
      </div>
      <div className="w-[710px] h-[317px]  flex flex-col items-center p-4">
       <div className="rounded-full w-42 h-42 overflow-hidden">
        <Image alt="gambar" height={300} width={300} src={"https://instagram.fsrg5-1.fna.fbcdn.net/v/t51.2885-19/416448146_262230650001816_4652334942471095710_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fsrg5-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QHsdaiqv5p8Ygn_5e4HJE0Oamtl8Xc7rFueuWMtpQiwRu11fsxeItPTIRJxWX4sdxI&_nc_ohc=16HRnl51RgsQ7kNvwEvHK5O&_nc_gid=b--2kUR6FQ5v3xSFOTpawg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfND5tIXSy72q01sVaQpic3R_WmB_cWxGESbgfBtM5PKVg&oe=6866BA8F&_nc_sid=8b3546"} className="w-full h-full object-cover"/>
       </div>
       <h1 className="text-xl font-medium mt-2">Arif Budi Laksono</h1>
       <h1 className="text-sm font-medium mt-1">221030410</h1>
      </div>
    </div>
  </div>
</div>


     
    </div>
  );
}
