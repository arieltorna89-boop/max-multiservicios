import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`max-w-7xl mx-auto h-[74px]
        rounded-2xl
        border
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg border-slate-200 shadow-xl"
            : "bg-white/70 backdrop-blur-md border-white/40 shadow-lg"
        }`}
      >
        <div className="h-full px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div
              className="
              w-12
              h-12
              rounded-xl
              bg-gradient-to-br
              from-brand
              to-accent
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-lg
              shadow-md
              transition-transform
              duration-300
              group-hover:scale-105"
            >
              M
            </div>

            <div className="leading-tight">
              <h1 className="font-bold text-lg text-navy tracking-wide">
                MAX
              </h1>

              <p className="text-brand text-sm font-medium tracking-wide">
                Multiservicios
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                relative
                font-medium
                text-slate
                transition-colors
                duration-300
                hover:text-brand
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-accent
                after:transition-all
                after:duration-300
                hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="
            md:hidden
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-xl
            text-navy
            transition-colors
            duration-300
            hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
            md:hidden
            mt-3
            rounded-2xl
            bg-white
            shadow-2xl
            border
            border-slate-200
            overflow-hidden"
          >
            <div className="flex flex-col divide-y divide-slate-100">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                  group
                  relative
                  flex
                  items-center
                  px-6
                  py-4
                  font-medium
                  text-navy
                  transition-colors
                  duration-300
                  hover:text-brand
                  hover:bg-slate-50"
                >
                  <span
                    className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    scale-y-0
                    bg-accent
                    transition-transform
                    duration-300
                    group-hover:scale-y-100"
                  />

                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}