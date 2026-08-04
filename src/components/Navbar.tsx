import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../lib/constants";

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Cierra con la tecla Esc
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Bloquea el scroll del body mientras está abierto, compensando el ancho
  // del scrollbar para que el contenido no "salte" al abrir/cerrar.
  useEffect(() => {
    if (!open) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPadding = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
    };
  }, [open]);

  // Si la pantalla pasa a tamaño desktop mientras está abierto, se cierra solo
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mql.matches) onClose();
    };

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="md:hidden fixed inset-0 z-[90] bg-navy/50 backdrop-blur-sm"
          onClick={onClose}
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
          inset-y-0
          right-0
          z-[100]
          h-full
          w-[78%]
          max-w-xs
          bg-white
          shadow-2xl
          flex
          flex-col"
        >
          <div className="flex items-center justify-between px-6 h-[74px] border-b border-slate-100 shrink-0">
            <img src="/logomax.png" alt="MAX Multiservicios" className="h-11 w-auto" />

            <button
              type="button"
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
              onClick={onClose}
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
                onClick={onClose}
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
    </AnimatePresence>,
    document.body
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((o) => !o), []);

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
            type="button"
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
            onClick={toggle}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <MobileMenu open={open} onClose={close} />
    </header>
  );
}