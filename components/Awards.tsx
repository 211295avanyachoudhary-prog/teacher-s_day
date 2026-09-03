"use client";

import { motion } from "framer-motion";
import { awards } from "./data";

export default function Awards() {
  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-goldsoft">
          Awards You Didn&rsquo;t Know You Won
        </h2>
      </div>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
        {awards.map((award, i) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex items-start gap-4 rounded-sm border border-gold/12 bg-espresso/30 px-5 py-4"
          >
            <span className="text-xl leading-none" aria-hidden="true">
              🏆
            </span>
            <div>
              <p className="font-display text-sm sm:text-base text-goldsoft">
                {award.title}
              </p>
              <p className="mt-1.5 font-serif2 text-[14px] sm:text-[15px] leading-relaxed text-parchment/70">
                {award.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
