"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChapterLabel from "./ChapterLabel";
import HiddenWord from "./HiddenWord";
import { cards } from "./data";
import { useSite } from "./SiteContext";

function Card({ card, index }: { card: (typeof cards)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      aria-expanded={open}
      className="focus-ring group relative flex min-h-[150px] flex-col justify-between rounded-sm border border-gold/15 bg-espresso/40 p-5 text-left transition-colors hover:border-gold/35 cursor-pointer"
    >
      <span className="font-display text-lg text-goldsoft">{card.title}</span>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.p
            key="text"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-3 whitespace-pre-line font-serif2 text-[15px] leading-relaxed text-parchment/80"
          >
            {card.text}
          </motion.p>
        ) : (
          <span className="mt-3 font-body text-xs tracking-wide text-parchment/40 group-hover:text-gold/60">
            tap to read
          </span>
        )}
      </AnimatePresence>

      {/* one of the five tiny hidden words lives quietly here */}
      <span
        className="mt-2 text-[11px]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <HiddenWord word={card.hiddenWord} />
      </span>
    </motion.div>
  );
}

export default function MoreThanEnglish() {
  const { allWordsFound, foundWords } = useSite();

  return (
    <section id="lessons" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <ChapterLabel>Chapter III — More Than English</ChapterLabel>
        <h2 className="font-display text-2xl sm:text-4xl text-goldsoft">
          You taught me more than English.
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Card key={card.title} card={card} index={i} />
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-3xl text-center">
        <p className="font-body text-[11px] tracking-wide text-parchment/25">
          {foundWords.size} of 5 found
        </p>
      </div>

      <AnimatePresence>
        {allWordsFound && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-10 max-w-lg text-center"
          >
            <h3 className="font-display text-2xl text-gold">
              You found them all.
            </h3>
            <p className="mt-3 font-serif2 italic text-parchment/75">
              Maybe that&rsquo;s what English teaches us too — sometimes you
              have to look a little closer to find what matters.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
