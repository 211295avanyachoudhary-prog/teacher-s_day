"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { secretBookPages, teacherData } from "./data";

export default function SecretBook({ onClose }: { onClose: () => void }) {
  const [started, setStarted] = useState(false);
  const [page, setPage] = useState(0);
  const isLast = page === secretBookPages.length - 1;
  const isThankYouPage = page === secretBookPages.length; // extra final beat

  const next = () => setPage((p) => Math.min(p + 1, secretBookPages.length));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/97 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Lessons Between the Lines"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close book"
        className="focus-ring absolute right-4 top-4 sm:right-8 sm:top-8 flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-gold/70 hover:bg-gold/10"
      >
        <X size={18} />
      </button>

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, rotateY: -40 }}
            transition={{ duration: 0.6 }}
            className="flex w-full max-w-md flex-col items-center rounded-sm border border-gold/25 bg-espresso/60 px-8 py-16 text-center shadow-2xl"
          >
            <p className="chapter-label text-[11px] uppercase text-gold/60 mb-6">
              A little collection of words, memories &amp; gratitude
            </p>
            <h2 className="font-display text-2xl sm:text-3xl text-goldsoft leading-snug">
              LESSONS BETWEEN THE LINES
            </h2>
            <div className="mt-10 space-y-1 font-serif2 text-sm text-parchment/70">
              <p>Written by</p>
              <p className="font-hand text-2xl text-parchment/90">
                {teacherData.studentName}
              </p>
            </div>
            <div className="mt-6 space-y-1 font-serif2 text-sm text-parchment/70">
              <p>Dedicated to</p>
              <p className="font-display text-lg text-goldsoft">
                {teacherData.teacherName}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStarted(true)}
              className="focus-ring mt-12 rounded-full border border-gold/40 px-6 py-2.5 font-body text-sm text-goldsoft hover:bg-gold/10"
            >
              Open the book
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={page}
            initial={{ opacity: 0, rotateY: 40, x: 30 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={{ opacity: 0, rotateY: -40, x: -30 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            style={{ transformPerspective: 1200 }}
            className="flex w-full max-w-md flex-col items-center rounded-sm border border-gold/20 bg-ivory px-8 py-14 sm:py-16 text-center text-ink shadow-2xl min-h-[380px] justify-center"
          >
            {!isThankYouPage ? (
              <>
                <p className="font-serif2 italic text-sm text-ink/50">
                  {secretBookPages[page].chapter}
                </p>
                <h3 className="mt-2 font-display text-xl sm:text-2xl text-espresso">
                  {secretBookPages[page].title}
                </h3>
                <p className="mt-6 whitespace-pre-line font-serif2 text-[15px] leading-relaxed text-ink/80">
                  {secretBookPages[page].text}
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="font-serif2 text-sm text-ink/50 italic">
                  But this one is simple.
                </p>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl text-espresso">
                  Thank you, Ma&rsquo;am.
                </h3>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {started && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button
            type="button"
            onClick={prev}
            disabled={page === 0}
            aria-label="Previous page"
            className="focus-ring text-gold/60 hover:text-gold disabled:opacity-20"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-body text-xs text-parchment/40">
            {Math.min(page + 1, secretBookPages.length)} / {secretBookPages.length}
          </span>
          <button
            type="button"
            onClick={next}
            disabled={isThankYouPage}
            aria-label="Next page"
            className="focus-ring text-gold/60 hover:text-gold disabled:opacity-20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </motion.div>
  );
}
