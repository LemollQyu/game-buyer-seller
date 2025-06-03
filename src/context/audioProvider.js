"use client";
import { createContext, useContext, useRef, useEffect, useState } from "react";

const AudioContext = createContext();

export function useAudio() {
  return useContext(AudioContext);
}

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.3;
    audio.play().catch(() => {
      console.log("Autoplay ditolak oleh browser");
    });
  }, []);

  const toggleAudio = () => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/musik/press-sound.mp3");
      audio.play().catch((e) => console.error("Gagal memutar audio:", e));
    }

    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{ toggleAudio, isPlaying }}>
      <audio ref={audioRef} src="/musik/bg.mp3" autoPlay loop />
      {children}
    </AudioContext.Provider>
  );
}
