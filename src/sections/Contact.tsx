import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { CONTACT_INFO, SOCIAL_LINKS } from '../lib/constants'

// lucide-react ya no exporta íconos de marca (Facebook, Instagram, LinkedIn, etc.),
// así que los definimos como SVGs propios, livianos y sin dependencias extra.
function FacebookIcon({ size = 16 }: { size?: number }): React.ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.24 4.32 15.36 4.25 14.33 4.25c-2.15 0-3.62 1.31-3.62 3.72V10.5h-2.5v3h2.5V21h3Z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }): React.ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }): React.ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H4.11V20h2.83V8.5ZM5.53 4c-.97 0-1.6.65-1.6 1.5 0 .84.61 1.5 1.56 1.5h.02c.99 0 1.6-.66 1.6-1.5C7.09 4.65 6.5 4 5.53 4ZM20 13.28V20h-2.83v-6.36c0-1.6-.57-2.68-2-2.68-1.09 0-1.74.73-2.02 1.44-.1.25-.13.6-.13.96V20H10.2s.04-10.53 0-11.5h2.82v1.63c.37-.58 1.05-1.4 2.55-1.4 1.86 0 3.26 1.22 3.26 3.85 0 .24-.02-.29 0 0Z" />
    </svg>
  )
}

const SOCIAL_ICONS: Record<string, (props: { size?: number }) => React.ReactElement> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
}

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: CONTACT_INFO.email,
    hint: 'Respondemos en menos de 24 h',
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: CONTACT_INFO.phone,
    hint: 'Lunes a viernes, 9 am – 6 pm',
    href: `tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`,
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-16 md:py-24">
      {/* Luz decorativa, consistente con Hero / About */}
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand/5 blur-[150px]" />
      <div className="absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-brand/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Encabezado a todo el ancho, para no desperdiciar la franja superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <Badge dark={false}>Contacto</Badge>
          <h2 className="mt-5 text-2xl font-medium leading-tight text-navy sm:text-3xl md:text-4xl">
            Estamos aquí para <span className="text-brand">ayudarte</span>.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate sm:mt-6 md:text-lg">
            Contáctanos por el canal que prefieras. Respondemos rápido y con
            la atención que mereces.
          </p>
        </motion.div>

        {/* Grid principal: WhatsApp destacado a la izquierda ocupando toda la altura,
            correo + teléfono en columna derecha, y redes/horario abajo a todo el ancho */}
        <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3">
          {/* Tarjeta destacada de WhatsApp, ocupa 1 columna pero toda la altura del bloque derecho */}
          <motion.a
            href={CONTACT_INFO.whatsappLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-brand p-5 text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/25 sm:p-6 md:row-span-2"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 sm:-right-8 sm:-top-8 sm:h-32 sm:w-32" />
            <div className="relative min-w-0">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 sm:h-12 sm:w-12">
                <MessageCircle size={20} />
              </span>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-white/70 sm:mt-6">
                WhatsApp
              </p>
              <p className="mt-1 break-words text-lg font-semibold sm:text-xl">
                {CONTACT_INFO.whatsapp}
              </p>
              <p className="mt-2 text-sm text-white/70">Respuesta más rápida</p>
            </div>
            <div className="relative mt-8 flex items-center gap-1.5 text-sm font-medium">
              Enviar un mensaje
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-45"
              />
            </div>
          </motion.a>

          {/* Correo y teléfono, lado a lado, aprovechando las 2 columnas restantes */}
          {CONTACT_CARDS.map((card, index) => (
            <motion.a
              key={card.label}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.08 }}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md sm:gap-4 sm:p-5"
            >
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand sm:h-11 sm:w-11">
                  <card.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate">
                    {card.label}
                  </p>
                  <p className="mt-0.5 break-words font-semibold text-navy">{card.value}</p>
                  <p className="mt-0.5 text-xs text-slate">{card.hint}</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-45 group-hover:text-brand"
              />
            </motion.a>
          ))}

          {/* Horario + redes, ocupa las 2 columnas junto a WhatsApp para llenar el bloque inferior */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:col-span-2 md:flex-row md:items-center md:justify-between md:gap-6"
          >
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand sm:h-11 sm:w-11">
                <Clock size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-slate">
                  Horario de atención
                </p>
                <p className="mt-0.5 break-words font-semibold text-navy">
                  Lunes a viernes, 9 am – 6 pm
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                Síguenos
              </p>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.name] ?? FacebookIcon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-md sm:h-10 sm:w-10"
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8">
          <Button
            variant="secondary"
            href={CONTACT_INFO.whatsappLink}
            icon={<ArrowRight size={16} />}
          >
            Enviar un mensaje
          </Button>
        </div>
      </div>
    </section>
  )
}