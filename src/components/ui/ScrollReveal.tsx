import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  /** Elemento HTML que envuelve el contenido. Por defecto "div". */
  as?: "div" | "section";
  /** Retraso en segundos antes de iniciar la animación. Útil para escalonar elementos. */
  delay?: number;
  /** Desplazamiento vertical inicial en px. 0 = solo fade, sin movimiento. */
  distance?: number;
  /** Duración de la transición en segundos. */
  duration?: number;
  className?: string;
};

/**
 * Envuelve cualquier sección para que aparezca con un fade (+ leve desplazamiento)
 * al entrar en el viewport, y se desvanezca otra vez al salir — tanto bajando
 * como subiendo en el scroll. Es la pieza global de transición entre secciones.
 *
 * Uso:
 *   <ScrollReveal><Hero /></ScrollReveal>
 *   <ScrollReveal delay={0.1}><About /></ScrollReveal>
 */
export default function ScrollReveal({
  children,
  as = "div",
  delay = 0,
  distance = 32,
  duration = 0.6,
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = as === "section" ? motion.section : motion.div;

  // Si el usuario prefiere menos movimiento, dejamos solo el fade, sin desplazamiento.
  const yOffset = prefersReducedMotion ? 0 : distance;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}