"use client";

import { forwardRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teacherData } from "./data";

const FinalPage = forwardRef<HTMLElement>(function FinalPage(_, ref) {
  const [showPS, setShowPS] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPS(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="final-page"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-charcoal px-6 py-24 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-paper" />

      <p className="chapter-label relative z-10 text-xs uppercase text-gold/50">
        Chapter VII — The Final Page
      </p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-6 font-display text-2xl sm:text-4xl text-goldsoft"
      >
        Every good story has a final page.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 mt-6 max-w-md font-serif2 italic text-lg text-parchment/75"
      >
        But some people become part of the story long after the page is
        turned.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.8 }}
        className="relative z-10 mt-10 font-display text-2xl sm:text-3xl text-gold"
      >
        Thank you, Ma&rsquo;am.
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2.5 }}
        className="relative z-10 mt-4"
      >
        <p className="font-serif2 text-lg text-parchment/75">
          Happy Teacher&rsquo;s Day
        </p>
        <p className="mt-1 font-display text-xl sm:text-2xl text-rose">
          {teacherData.teacherName} 🌷
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 3.2 }}
        className="relative z-10 mt-10 max-w-md font-serif2 text-[15px] leading-relaxed text-parchment/60"
      >
        Thank you for every lesson, every explanation, every correction,
        every question, every little classroom moment, and every word that
        stayed.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 3.9 }}
        className="relative z-10 mt-8"
      >
        <p className="font-serif2 text-sm text-parchment/60">
          With gratitude,
        </p>
        <p className="font-hand text-3xl mt-1 text-goldsoft">
          {teacherData.studentName}
        </p>
        <p className="text-xs italic text-parchment/40">Your student</p>
      </motion.div>

      <AnimatePresence>
        {showPS && !showSurprise && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 mt-14"
          >
            <p className="font-serif2 italic text-sm text-parchment/40">
              P.S.
            </p>
            <p className="mt-2 font-serif2 text-parchment/65">
              You thought that was the end?
            </p>
            <button
              type="button"
              onClick={() => setShowSurprise(true)}
              className="focus-ring group mt-6 flex items-center gap-2 mx-auto rounded-full border border-gold/30 px-6 py-2.5 font-body text-sm text-goldsoft hover:bg-gold/10"
            >
              One last surprise
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSurprise && <LastSurprise onClose={() => setShowSurprise(false)} />}
      </AnimatePresence>
    </section>
  );
});

export default FinalPage;

function LastSurprise({ onClose }: { onClose: () => void }) {
  const petals = [
    { left: "10%", delay: 0 },
    { left: "30%", delay: 1.2 },
    { left: "52%", delay: 0.5 },
    { left: "70%", delay: 1.8 },
    { left: "88%", delay: 0.9 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#F3EBDA] px-6 text-center text-espresso"
      role="dialog"
      aria-modal="true"
    >
      {petals.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute top-[-5%] h-2.5 w-2.5 rounded-full bg-rose/30 animate-drift"
          style={{
            left: p.left,
            animationDelay: `${p.delay}s`,
            animationDuration: `${9 + p.delay}s`,
          }}
        />
      ))}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="focus-ring absolute right-4 top-4 sm:right-8 sm:top-8 flex h-10 w-10 items-center justify-center rounded-full border border-espresso/20 text-espresso/60 hover:bg-espresso/5"
      >
        ✕
      </button>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative z-10 max-w-md"
      >
        <h3 className="font-display text-2xl sm:text-3xl">Dear Ma&rsquo;am,</h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-6 font-serif2 italic text-lg leading-relaxed text-espresso/85"
        >
          If I ever look back at this chapter of my life, I hope I remember
          not only what I learned, but also the people who made learning
          meaningful.
        </motion.p>

        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="mt-7 font-display text-xl sm:text-2xl text-rose"
        >
          You are one of those people.
        </motion.h4>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-8 font-serif2 text-espresso/80"
        >
          Thank you for being my English teacher.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.7 }}
          className="mt-2 font-display text-lg text-espresso"
        >
          Happy Teacher&rsquo;s Day, Ma&rsquo;am. ❤️
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.4 }}
          className="mt-6 font-hand text-3xl text-espresso/90"
        >
          — Avanya
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
