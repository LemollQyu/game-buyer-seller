import Image from "next/image";
import LayoutUtama from "./layout/utama";
import Link from "next/link";

export default function Home() {
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
          <Link href={"/menu"}>
            <Image
              alt="button"
              src={"/bahan/button/6.png"}
              width={120}
              height={120}
              className="absolute left-1/2 -translate-x-[45%] bottom-8 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
            />
          </Link>
        </div>
      </LayoutUtama>
    </>
  );
}
