"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import ChapterLabel from "./ChapterLabel";
import { paperWallNotes } from "./data";

const rotations = [-2, 1.5, -1, 2, -1.5, 1, -2.2, 1.8];

export default function PaperWall({
  onFindFinalPage,
}: {
  onFindFinalPage: () => void;
}) {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <ChapterLabel>Chapter V — Things I Should Have Said More Often</ChapterLabel>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
        {paperWallNotes.map((note, i) => (
          <motion.div
            key={note}
            initial={{ opacity: 0, y: 16, rotate: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: rotations[i % rotations.length],
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-[2px] border border-ink/10 bg-ivory px-3 py-5 text-center shadow-md shadow-black/30"
          >
            <p className="font-hand text-lg leading-snug text-espresso">
              {note}
            </p>
          </motion.div>
        ))}

        {/* Surprise 5 - tiny secret envelope hidden among the notes */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={() => setEnvelopeOpen(true)}
          aria-label="A small hidden envelope"
          className="focus-ring flex items-center justify-center rounded-[2px] border border-dashed border-gold/15 py-5 text-gold/25 transition-colors hover:text-gold/60 hover:border-gold/40"
        >
          <Mail size={16} />
        </motion.button>
      </div>

      <AnimatePresence>
        {envelopeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 px-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-sm rounded-sm border border-gold/20 bg-ivory px-8 py-10 text-center text-ink shadow-2xl"
            >
              <p className="chapter-label text-[11px] uppercase text-espresso/50">
                One more thing...
              </p>
              <p className="mt-5 font-serif2 leading-relaxed text-ink/80">
                If you found this, you&rsquo;re officially exploring the
                website better than expected.
              </p>
              <p className="mt-4 font-serif2 italic text-ink/70">
                But I saved one last page for you.
              </p>
              <button
                type="button"
                onClick={() => {
                  setEnvelopeOpen(false);
                  onFindFinalPage();
                }}
                className="focus-ring group mt-8 flex items-center gap-2 mx-auto rounded-full border border-espresso/30 px-5 py-2.5 font-body text-sm text-espresso hover:bg-espresso/5"
              >
                Find the final page
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
