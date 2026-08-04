import { motion } from 'framer-motion'
import { Award, Lock, Zap, Sparkles } from 'lucide-react'
import Badge from '../components/ui/Badge'

const PILLARS = [
  {
    icon: Award,
    title: 'Servicios Profesionales',
    description: 'Estándares de calidad y atención al detalle en cada entrega.',
  },
  {
    icon: Lock,
    title: 'Soluciones Seguras',
    description: 'Privacidad y seguridad como prioridad en todas nuestras plataformas.',
  },
  {
    icon: Zap,
    title: 'Soporte Rápido',
    description: 'Equipo disponible para resolver tus dudas con agilidad.',
  },
  {
    icon: Sparkles,
    title: 'Innovación Constante',
    description: 'Actualizamos nuestros servicios para adaptarnos al futuro.',
  },
]

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-24 md:px-10">
      <div className="absolute inset-0 blueprint-grid" />
      <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/95 to-navy/70" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>¿Por qué elegirnos?</Badge>

            <h2 className="mt-5 text-3xl font-medium leading-tight text-white md:text-4xl">
              Construido sobre pilares{' '}
              <span className="text-accent">sólidos</span>.
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 md:text-lg">
              Cada servicio que ofrecemos está respaldado por principios que
              garantizan calidad, seguridad y crecimiento real para tu
              negocio.
            </p>
          </motion.div>

          {/* Grid de pilares */}
          <div className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-navy">
                  <pillar.icon size={18} />
                </span>

                <h3 className="mt-4 text-base font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}