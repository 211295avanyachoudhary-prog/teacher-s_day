"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Feather } from "lucide-react";
import { navItems } from "./data";
import { useSite } from "./SiteContext";

export default function Navigation() {
  const { hasBegun } = useSite();
  const [open, setOpen] = useState(false);

  if (!hasBegun) return null;

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:flex"
        aria-label="Chapter navigation"
      >
        <div className="flex items-center gap-1 rounded-full border border-gold/20 bg-charcoal/70 backdrop-blur-md px-2 py-1.5 shadow-lg shadow-black/20">
          <Feather size={13} className="text-gold/60 mx-2" aria-hidden="true" />
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="focus-ring rounded-full px-3 py-1.5 text-[12px] font-body tracking-wide text-parchment/70 transition-colors hover:text-gold hover:bg-gold/10"
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-charcoal/80 backdrop-blur-md text-gold shadow-lg shadow-black/30"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex flex-col gap-0.5 rounded-2xl border border-gold/20 bg-charcoal/95 backdrop-blur-md p-2 shadow-xl shadow-black/40"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="focus-ring rounded-lg px-3 py-2 text-left text-sm font-body text-parchment/80 hover:bg-gold/10 hover:text-gold"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
