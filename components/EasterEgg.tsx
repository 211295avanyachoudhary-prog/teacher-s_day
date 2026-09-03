"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EasterEgg() {
  const [count, setCount] = useState(0);
  const found = count >= 5;

  return (
    <footer className="relative flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <button
        type="button"
        onClick={() => setCount((c) => Math.min(c + 1, 5))}
        aria-label="A small decorative symbol"
        className="focus-ring text-gold/25 transition-colors hover:text-gold/60"
      >
        <span className="text-lg">✦</span>
      </button>

      <AnimatePresence>
        {found && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xs"
          >
            <p className="font-serif2 italic text-parchment/70">
              Okay Ma&rsquo;am, you found the secret. 😭
            </p>
            <p className="mt-2 font-display text-goldsoft">
              Happy Teacher&rsquo;s Day!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-4 font-body text-[11px] tracking-wide text-parchment/20">
        Made with care, one page at a time.
      </p>
    </footer>
  );
}
