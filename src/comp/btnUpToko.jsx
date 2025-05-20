"use client";
import { useRef } from "react";

export default function ShinyButton() {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    buttonRef.current.style.setProperty("--x", `${x}px`);
    buttonRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      className="w-36 h-36 rounded-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-orange-500 shadow-lg flex items-center justify-center border-[8px] border-orange-400 shine-effect"
    >
      <div className="absolute inset-1 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 flex items-center justify-center font-bold text-lg text-amber-900 text-center">
        Upgrade <br />
        Toko
      </div>
    </div>
  );
}
