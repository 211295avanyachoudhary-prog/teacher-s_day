"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import ChapterLabel from "./ChapterLabel";
import { letterText, teacherData } from "./data";

export default function Letter() {
  const [opened, setOpened] = useState(false);
  const [noteRevealed, setNoteRevealed] = useState(false);

  return (
    <section
      id="letter"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24"
    >
      <ChapterLabel>Chapter II — The Letter</ChapterLabel>

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="font-serif2 italic text-lg text-parchment/80 mb-8">
              A letter for you.
            </p>
            <motion.button
              type="button"
              onClick={() => setOpened(true)}
              whileHover={{ y: -4 }}
              className="focus-ring group relative flex h-40 w-56 sm:h-48 sm:w-64 flex-col items-center justify-center rounded-sm border border-gold/30 bg-gradient-to-b from-[#4A3626] to-[#3A2A1E] shadow-xl shadow-black/40"
              aria-label="Open the letter"
            >
              <span
                className="absolute inset-x-0 top-0 h-1/2 border-b border-gold/20"
                style={{
                  clipPath: "polygon(0 0, 50% 62%, 100% 0)",
                  background:
                    "linear-gradient(160deg, #5b4530, #3A2A1E 70%)",
                }}
                aria-hidden="true"
              />
              <Mail
                size={26}
                className="relative z-10 mb-2 text-gold/70 transition-transform group-hover:scale-110"
              />
              <span className="relative z-10 font-body text-xs tracking-wide text-goldsoft/90">
                Open it
              </span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="paper"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-sm border border-gold/15 bg-ivory/95 px-6 py-10 sm:px-12 sm:py-14 text-ink shadow-2xl shadow-black/50"
          >
            <div className="space-y-4 font-serif2 text-[15px] sm:text-base leading-relaxed">
              {letterText.map((line, i) => {
                const isBold = line.startsWith("__") && line.endsWith("__");
                const clean = isBold ? line.slice(2, -2) : line;
                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                    className={isBold ? "font-display text-lg sm:text-xl text-espresso mt-2" : ""}
                  >
                    {clean}
                  </motion.p>
                );
              })}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: letterText.length * 0.12 + 0.5 }}
                className="pt-4"
              >
                <p>With gratitude,</p>
                <p className="font-hand text-3xl mt-1 text-espresso">
                  {teacherData.studentName}
                </p>
                <p className="text-sm italic text-ink/60">Your student</p>
              </motion.div>
            </div>

            {/* Surprise 1 - hidden annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: letterText.length * 0.12 + 1.6 }}
              className="mt-8 border-t border-ink/10 pt-4"
            >
              {!noteRevealed ? (
                <button
                  type="button"
                  onClick={() => setNoteRevealed(true)}
                  className="focus-ring font-hand text-xl text-rose/70 hover:text-rose transition-colors"
                >
                  Psst... this isn&rsquo;t the whole story.
                </button>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-hand text-xl text-rose"
                >
                  Then keep reading.
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
