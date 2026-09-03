"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  PenLine,
  NotebookText,
  Bookmark,
  Clock,
  Lamp,
} from "lucide-react";
import ChapterLabel from "./ChapterLabel";
import SecretBook from "./SecretBook";
import { deskObjects } from "./data";

const icons: Record<string, React.ElementType> = {
  book: BookOpen,
  pen: PenLine,
  notebook: NotebookText,
  bookmark: Bookmark,
  clock: Clock,
  lamp: Lamp,
};

export default function Classroom() {
  const [active, setActive] = useState<string | null>(null);
  const [bookOpen, setBookOpen] = useState(false);

  const handleClick = (id: string) => {
    if (id === "book") {
      setBookOpen(true);
      return;
    }
    setActive((prev) => (prev === id ? null : id));
  };

  const activeItem = deskObjects.find((o) => o.id === active);

  return (
    <section
      id="classroom"
      className="relative px-6 py-24 sm:py-32 bg-[#241d17]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <ChapterLabel>Chapter IV — The Classroom</ChapterLabel>
        <h2 className="font-display text-2xl sm:text-4xl text-goldsoft">
          A quiet desk, still full of stories.
        </h2>
        <p className="mt-3 font-serif2 italic text-parchment/60">
          Touch what catches your eye.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6">
        {deskObjects.map((obj) => {
          const Icon = icons[obj.id];
          return (
            <button
              key={obj.id}
              type="button"
              onClick={() => handleClick(obj.id)}
              aria-pressed={active === obj.id}
              className="focus-ring group flex flex-col items-center gap-2.5 rounded-sm border border-gold/10 bg-espresso/30 py-7 transition-colors hover:border-gold/30 hover:bg-espresso/50"
            >
              <Icon
                size={22}
                className="text-gold/70 transition-transform group-hover:scale-110"
              />
              <span className="font-body text-[11px] tracking-wide text-parchment/50">
                {obj.label}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-10 max-w-md rounded-sm border border-gold/15 bg-ivory/95 px-6 py-7 text-center text-ink shadow-xl"
          >
            <h3 className="font-display text-lg text-espresso">
              {activeItem.title}
            </h3>
            <p className="mt-3 whitespace-pre-line font-serif2 text-[15px] leading-relaxed text-ink/80">
              {activeItem.text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {bookOpen && <SecretBook onClose={() => setBookOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
