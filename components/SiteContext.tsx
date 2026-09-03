"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { hiddenWordsList } from "./data";

type SiteContextValue = {
  hasBegun: boolean;
  begin: () => void;
  isPlaying: boolean;
  toggleMusic: () => void;
  audioAvailable: boolean;
  setAudioAvailable: (v: boolean) => void;
  foundWords: Set<string>;
  discoverWord: (word: string) => void;
  allWordsFound: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [hasBegun, setHasBegun] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const audioRef = useRef<HTMLAudioElement>(null);

  const begin = useCallback(() => {
    setHasBegun(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.28;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
          setAudioAvailable(false);
        });
    }
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audioAvailable) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setAudioAvailable(false));
    }
  }, [isPlaying, audioAvailable]);

  const discoverWord = useCallback((word: string) => {
    setFoundWords((prev) => {
      if (prev.has(word)) return prev;
      const next = new Set(prev);
      next.add(word);
      return next;
    });
  }, []);

  const allWordsFound = useMemo(
    () => hiddenWordsList.every((w) => foundWords.has(w)),
    [foundWords]
  );

  const value: SiteContextValue = {
    hasBegun,
    begin,
    isPlaying,
    toggleMusic,
    audioAvailable,
    setAudioAvailable,
    foundWords,
    discoverWord,
    allWordsFound,
    audioRef,
  };

  return (
    <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
