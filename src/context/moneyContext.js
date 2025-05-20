"use client";
import { createContext, useContext, useState } from "react";

// Buat Context
const MoneyContext = createContext();

// Provider
export const MoneyProvider = ({ children }) => {
  const [money, setMoney] = useState(0); // default 20.000

  return (
    <MoneyContext.Provider value={{ money, setMoney }}>
      {children}
    </MoneyContext.Provider>
  );
};

// Hook custom
export const useMoney = () => useContext(MoneyContext);
