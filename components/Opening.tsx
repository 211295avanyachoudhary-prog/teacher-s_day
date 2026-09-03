"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSite } from "./SiteContext";
import { teacherData } from "./data";

export default function Opening() {
  const { hasBegun, begin } = useSite();

  return (
    <AnimatePresence>
      {!hasBegun && (
        <motion.div
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(6px)",
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal px-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-paper" />
          <div className="relative flex max-w-xl flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1.6, delay: 0.4 }}
              className="font-serif2 italic text-lg sm:text-xl text-parchment/70"
            >
              A little something...
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 1.6, delay: 2.2 }}
              className="mt-3 font-serif2 italic text-lg sm:text-xl text-parchment/70"
            >
              ...for someone who taught me the power of words.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 4.2 }}
              className="mt-8 font-display text-3xl sm:text-5xl text-goldsoft"
            >
              {teacherData.teacherName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 5.2 }}
              className="mt-5 font-serif2 text-base sm:text-lg leading-relaxed text-parchment/80"
            >
              An English teacher.
              <br />A mentor.
              <br />And a part of one student&rsquo;s story.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 6.4 }}
              className="mt-6 font-display text-xl sm:text-2xl text-rose"
            >
              Happy Teacher&rsquo;s Day 🌷
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 7.3 }}
              onClick={begin}
              className="focus-ring group mt-12 flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3 font-body text-sm tracking-wide text-goldsoft transition-colors hover:bg-gold/10"
            >
              Begin the story
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
