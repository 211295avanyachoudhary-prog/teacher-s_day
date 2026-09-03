"use client";

import { useSite } from "./SiteContext";

export default function AudioElement() {
  const { audioRef, setAudioAvailable } = useSite();

  return (
    <audio
      ref={audioRef}
      src="/audio/teacher-day.mp3"
      loop
      preload="none"
      onError={() => setAudioAvailable(false)}
      className="hidden"
    />
  );
}
