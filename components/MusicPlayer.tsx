"use client";

import { Pause, Play, Music2 } from "lucide-react";
import { useSite } from "./SiteContext";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const { hasBegun, isPlaying, toggleMusic, audioAvailable } = useSite();

  if (!hasBegun) return null;

  return (
    <>
    {process.env.NODE_ENV === "development" && !audioAvailable && (
      <div className="fixed bottom-20 right-4 sm:right-6 z-40 max-w-[220px] rounded-md border border-gold/20 bg-charcoal/90 px-3 py-2 text-[10px] leading-snug text-parchment/50">
        Add your track at <code className="text-gold/60">/public/audio/teacher-day.mp3</code> to enable background music.
      </div>
    )}
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
      >
        <button
          type="button"
          onClick={toggleMusic}
          disabled={!audioAvailable}
          aria-label={
            !audioAvailable
              ? "Music unavailable"
              : isPlaying
              ? "Pause music"
              : "Play music"
          }
          className="group flex items-center gap-2.5 rounded-full border border-gold/25 bg-charcoal/80 backdrop-blur-md px-3.5 py-2.5 shadow-lg shadow-black/30 transition-colors hover:border-gold/50 disabled:opacity-40 disabled:cursor-not-allowed focus-ring"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gold/10">
            {isPlaying && audioAvailable ? (
              <Pause size={13} className="text-gold" />
            ) : (
              <Play size={13} className="text-gold ml-0.5" />
            )}
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="text-[11px] font-body tracking-wide text-parchment/70">
              {audioAvailable
                ? isPlaying
                  ? "Playing a little something"
                  : "Paused"
                : "No music found"}
            </span>
            <span className="flex items-end gap-[2px] h-3" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`w-[2px] bg-gold/70 rounded-full ${
                    isPlaying && audioAvailable ? "animate-flicker" : ""
                  }`}
                  style={{
                    height: isPlaying && audioAvailable ? "100%" : "35%",
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </span>
          </span>
          <Music2
            size={13}
            className="sm:hidden text-gold/70"
            aria-hidden="true"
          />
        </button>
      </motion.div>
    </AnimatePresence>
    </>
  );
}
