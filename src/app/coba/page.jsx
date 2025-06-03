"use client";
import { useState } from "react";

export default function ComponentCounter() {
  const [counter, setCounter] = useState(0);
  console.log("ini coba console log");

  function handleIncreament() {
    setCounter((prev) => prev + 1);
  }
  return (
    <div>
      <button onClick={handleIncreament}>tambah</button>
      <div>{counter}</div>
    </div>
  );
}
