"use client";

import { useSite } from "./SiteContext";

export default function HiddenWord({
  word,
  className = "",
}: {
  word: string;
  className?: string;
}) {
  const { discoverWord, foundWords } = useSite();
  const found = foundWords.has(word);

  return (
    <button
      type="button"
      onClick={() => discoverWord(word)}
      aria-label={found ? `Found word: ${word}` : "A quiet word, easy to miss"}
      className={`inline-block cursor-default select-none rounded-sm px-0.5 transition-colors duration-700 focus-ring ${
        found
          ? "text-gold underline decoration-gold/50 decoration-dotted underline-offset-4"
          : "text-transparent hover:text-gold/20"
      } ${className}`}
      style={{ WebkitTextFillColor: found ? undefined : "transparent" }}
    >
      {word}
    </button>
  );
}
