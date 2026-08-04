import { motion } from 'framer-motion'
import { ShoppingCart, Activity, Clock, ArrowRight } from 'lucide-react'
import Badge from '../components/ui/Badge'

// TODO: reemplazar por imágenes propias o definitivas
const SERVICES = [
  {
    id: 'tienda',
    status: 'active' as const,
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    icon: ShoppingCart,
    title: 'Tienda en Línea',
    description:
      'Navega y adquiere nuestros productos a través de nuestra plataforma de compras en línea. Catálogo completo, pago seguro y entrega eficiente.',
    linkLabel: 'Visitar Tienda',
    href: '#',
  },
  {
    id: 'marketing',
    status: 'active' as const,
    image:
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
    icon: Activity,
    title: 'Marketing Digital',
    description:
      'Soluciones profesionales de marketing: branding, redes sociales, publicidad digital, diseño gráfico y presencia web para hacer crecer tu negocio.',
    linkLabel: 'Conocer más',
    href: '#contacto',
  },
  {
    id: 'proximo-1',
    status: 'coming-soon' as const,
    title: 'Próximo Servicio',
    description:
      'Estamos desarrollando nuevas soluciones digitales para ampliar nuestro portafolio.',
  },
  {
    id: 'proximo-2',
    status: 'coming-soon' as const,
    title: 'Próximo Servicio',
    description:
      'Nuevas herramientas y servicios profesionales en camino para potenciar tu crecimiento.',
  },
]

const ACTIVE_SERVICES = SERVICES.filter((s) => s.status === 'active')
const COMING_SOON_SERVICES = SERVICES.filter((s) => s.status === 'coming-soon')

export default function Services() {
  return (
    <section id="servicios" className="bg-bone px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <Badge dark={false}>Nuestros Servicios</Badge>
          <h2 className="mt-5 text-3xl font-medium leading-tight text-navy md:text-4xl">
            Todo lo que necesitas para crecer en{' '}
            <span className="text-brand">digital</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">
            Un ecosistema de servicios diseñado para escalar contigo. Dos
            soluciones activas hoy, con más en camino.
          </p>
        </motion.div>

        {/* =======================================================
            SERVICIOS ACTIVOS
        ======================================================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {ACTIVE_SERVICES.map((service, index) => (
            <motion.a
              key={service.id}
              href={service.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block h-[380px] overflow-hidden rounded-3xl shadow-lg md:h-[440px]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent transition-opacity duration-300 group-hover:from-navy/95" />

              <span className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                <service.icon size={20} />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-3">
                  {service.linkLabel}
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* =======================================================
            PRÓXIMAMENTE
        ======================================================= */}

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {COMING_SOON_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white/50 p-6"
            >
              <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-xl bg-slate-200 opacity-40" />
                <Clock size={18} className="relative" />
              </span>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-500">
                    {service.title}
                  </h3>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Próximamente
                  </span>
                </div>

                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}