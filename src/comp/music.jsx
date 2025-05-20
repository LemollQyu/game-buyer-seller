import { useRef } from "react";

export default function MusikManual() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <h2>Kontrol Musik Manual</h2>
      <audio ref={audioRef} src="/musik/lamunan.mp3" />
      <button onClick={handlePlay}>▶️ Play</button>
      <button onClick={handlePause}>⏸️ Pause</button>
    </div>
  );
}
