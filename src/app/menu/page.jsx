import LayoutUtama from "../layout/utama";
export default function Menu() {
  return (
    <>
      <LayoutUtama>
        <div
          className=" overflow-hidden"
          style={{
            backgroundImage: "url(/bahan/desain-page/2.png)",
            width: "100%",
            height: "700px",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="flex border items-center gap-14 absolute bottom-0">
            <div>buyer</div>
            <div>seller</div>
          </div>
        </div>
      </LayoutUtama>
    </>
  );
}
