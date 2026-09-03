"use client";

import { motion } from "framer-motion";
import ChapterLabel from "./ChapterLabel";
import { bookCoverInfo } from "./data";

const rows: [string, string][] = [
  ["Genre", bookCoverInfo.genre],
  ["Author", bookCoverInfo.author],
  ["Editor", bookCoverInfo.editor],
  ["Pages", bookCoverInfo.pages],
  ["Theme", bookCoverInfo.theme],
  ["Characters", bookCoverInfo.characters],
  ["Ending", bookCoverInfo.ending],
];

export default function BookCover() {
  return (
    <section
      id="book-cover"
      className="relative px-6 py-24 sm:py-32 bg-[#241d17]"
    >
      <div className="mx-auto max-w-2xl text-center">
        <ChapterLabel>Chapter VI — If Our Class Were a Book</ChapterLabel>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-10 max-w-md rounded-sm border border-gold/25 bg-espresso/50 px-8 py-12 shadow-2xl shadow-black/40"
      >
        <h2 className="text-center font-display text-2xl sm:text-3xl text-goldsoft leading-snug">
          {bookCoverInfo.title}
        </h2>

        <div className="mt-9 space-y-3.5 border-t border-gold/15 pt-7">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-4 font-body text-[13px]"
            >
              <span className="shrink-0 tracking-wide text-parchment/40">
                {label}
              </span>
              <span className="text-right font-serif2 text-[15px] text-parchment/85">
                {value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto mt-10 max-w-md text-center font-serif2 italic text-parchment/65"
      >
        <p>Because every school year is a chapter.</p>
        <p>And every chapter eventually turns into a memory.</p>
      </motion.div>
    </section>
  );
}
