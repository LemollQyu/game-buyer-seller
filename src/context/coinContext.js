"use client";
import { createContext, useContext, useState } from "react";

// Buat Context
const CoinContext = createContext();

// Provider
export const CoinProvider = ({ children }) => {
  const [coinBuyer, setCoinBuyer] = useState(50000);

  const tambahCoin = () => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/musik/press-sound.mp3");
      audio.play().catch((e) => console.error("Gagal memutar audio:", e));
    }
    setCoinBuyer((prev) => (prev < 0 ? 0 : prev + 50));
  };

  return (
    <CoinContext.Provider value={{ coinBuyer, setCoinBuyer, tambahCoin }}>
      {children}
    </CoinContext.Provider>
  );
};

// Hook custom
export const useCoin = () => useContext(CoinContext);
