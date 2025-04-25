import Link from "next/link";
import LayoutUtama from "../layout/utama";

export default function Seller() {
  return (
    <>
      <LayoutUtama>
        <h1>Hello Seller</h1>
        <Link href={"/buyer-seller?role=seller"}>
          <div className="border rounded-lg w-10 flex justify-center items-center">
            Upgrade Toko
          </div>
        </Link>
      </LayoutUtama>
    </>
  );
}
