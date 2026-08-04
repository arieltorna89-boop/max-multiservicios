import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Megaphone,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

const HERO_BG =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop";

const SERVICES = [
  {
    icon: <Megaphone size={18} />,
    title: "Marketing Digital",
    description: "Publicidad, redes sociales y crecimiento de marcas.",
  },
  {
    icon: <ShoppingBag size={18} />,
    title: "Tienda Online",
    description: "Productos al por mayor y al detalle.",
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy pt-36 pb-24 lg:pt-44 lg:pb-32"
    >
      {/* =============================
          FONDO
      ============================== */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url(${HERO_BG})`,
          }}
        />
      </motion.div>

      {/* Blueprint */}

      <div className="absolute inset-0 blueprint-grid opacity-80" />

      {/* Gradientes */}

      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

      {/* Luces */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/20 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-accent/10 blur-[170px]" />

      {/* =============================
          CONTENIDO
      ============================== */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* =======================================================
              COLUMNA IZQUIERDA
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <Badge>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>

                  Soluciones integrales para personas y empresas
                </span>
              </Badge>
            </motion.div>

            {/* Título */}

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="
              mt-8
              max-w-3xl
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-semibold
              leading-[1.05]
              text-white"
            >
              Todo lo que necesitas para impulsar tu{" "}

              <span className="text-accent">
                negocio
              </span>

              <br />

              desde un solo lugar.
            </motion.h1>

            {/* Descripción */}

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="
              mt-8
              max-w-xl
              text-base
              md:text-lg
              leading-8
              text-white/70"
            >
              <strong className="text-white">
                Max Multiservicios
              </strong>{" "}
              integra soluciones comerciales y digitales en una sola
              empresa. Desde comercio electrónico y marketing digital
              hasta desarrollo web y servicios tecnológicos para
              personas, emprendedores y empresas.
            </motion.p>

            {/* Botones */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
              className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-4"
            >
              <Button
                href="#servicios"
                variant="primary"
                icon={<ArrowRight size={18} />}
              >
                Explorar servicios
              </Button>

              <Button
                href="#nosotros"
                variant="outline"
              >
                Conocer la empresa
              </Button>
            </motion.div>

            {/* Scroll */}

            <motion.a
              href="#servicios"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
              hidden
              lg:inline-flex
              items-center
              gap-2
              mt-12
              text-white/50
              hover:text-white
              transition"
            >
              <ChevronDown size={18} />

              Descubre más
            </motion.a>
          </motion.div>
                    {/* =======================================================
              COLUMNA DERECHA
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Halo */}

            <div className="absolute h-[540px] w-[540px] rounded-full bg-brand/10 blur-[140px]" />

            {/* Tarjeta principal */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/10
              backdrop-blur-xl
              shadow-[0_25px_70px_rgba(0,0,0,.35)]"
            >
              {/* Header */}

              <div className="border-b border-white/10 p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                    MAX MULTISERVICIOS
                  </span>

                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                </div>

                <h2 className="mt-6 text-3xl font-semibold leading-tight text-white">
                  Soluciones integrales para crecer.
                </h2>

                <p className="mt-4 leading-7 text-white/60">
                  Reunimos diferentes áreas de negocio para ofrecer una experiencia completa desde un mismo lugar.
                </p>
              </div>

              {/* Servicios */}

              <div className="space-y-4 p-6">
                {SERVICES.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{
                      opacity: 0,
                      x: 18,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.3 + index * 0.08,
                    }}
                    className="
                    group
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-accent/40
                    hover:bg-white/10"
                  >
                    <div
                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand/20
                      text-accent
                      transition
                      group-hover:bg-brand
                      group-hover:text-white"
                    >
                      {service.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {service.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-white/55">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Teaser: más servicios en camino */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 18,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.3 + SERVICES.length * 0.08,
                  }}
                  className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-dashed
                  border-white/20
                  p-5
                  text-white/50"
                >
                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                    text-white/50"
                  >
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white/70">
                      Más servicios próximamente
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/45">
                      Seguimos ampliando lo que podemos hacer por ti.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}

              <div className="flex flex-col items-center gap-2 border-t border-white/10 px-8 py-6 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Nuestro compromiso
                </p>

                <p className="text-lg font-semibold text-white">
                  Calidad • Innovación • Confianza
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}