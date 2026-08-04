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

  // Bloquea el scroll del body mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            <img
              src="/logomax.png"
              alt="MAX Multiservicios"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
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
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Menú móvil tipo sidebar: overlay + panel deslizante desde la derecha */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed inset-0 z-40 bg-navy/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}

        {open && (
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
            md:hidden
            fixed
            top-0
            right-0
            z-50
            h-full
            w-[78%]
            max-w-xs
            bg-white
            shadow-2xl
            flex
            flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[74px] border-b border-slate-100">
              <img
                src="/logomax.png"
                alt="MAX Multiservicios"
                className="h-11 w-auto"
              />

              <button
                className="
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
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col divide-y divide-slate-100 overflow-y-auto">
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