"use client";

import { motion } from "framer-motion";
import ChapterLabel from "./ChapterLabel";
import { teacherData } from "./data";

const petals = [
  { left: "8%", delay: 0, size: 10 },
  { left: "22%", delay: 1.4, size: 7 },
  { left: "48%", delay: 0.6, size: 9 },
  { left: "67%", delay: 2.1, size: 6 },
  { left: "83%", delay: 0.9, size: 8 },
  { left: "92%", delay: 1.8, size: 5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-paper" />
      {petals.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute top-[-5%] rounded-full bg-gold/25 animate-drift"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${8 + p.delay}s`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-2xl"
      >
        <ChapterLabel>Chapter I — The Beginning</ChapterLabel>
        <h1 className="font-display text-3xl sm:text-5xl leading-tight text-goldsoft">
          For {teacherData.teacherName}
        </h1>
        <p className="mt-4 font-serif2 italic text-lg sm:text-xl text-parchment/75">
          A little story written by one of your students.
        </p>

        <div className="mt-10 space-y-2 font-serif2 text-lg sm:text-xl leading-relaxed text-parchment/85">
          <p>Some teachers teach lessons that appear in exams.</p>
          <p>And some leave behind lessons that never do.</p>
        </div>

        <button
          type="button"
          onClick={() =>
            document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" })
          }
          className="focus-ring group mt-14 flex items-center gap-2 mx-auto rounded-full border border-gold/30 px-6 py-2.5 font-body text-sm tracking-wide text-goldsoft/90 transition-colors hover:bg-gold/10"
        >
          Turn the page
          <span className="transition-transform group-hover:translate-y-0.5">
            ↓
          </span>
        </button>
      </motion.div>
    </section>
  );
}
