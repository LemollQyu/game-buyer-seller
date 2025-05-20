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
    audio.volume = 1;
    audio.play().catch(() => {
      console.log("Autoplay ditolak oleh browser");
    });
  }, []);

  const toggleAudio = () => {
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
      <audio ref={audioRef} src="/musik/lamunan.mp3" autoPlay loop />
      {children}
    </AudioContext.Provider>
  );
}
