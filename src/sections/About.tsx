import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Badge from "../components/ui/Badge";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop";

const FEATURES = [
  {
    icon: <ShieldCheck size={18} />,
    title: "Profesionalismo",
    description:
      "Trabajamos con altos estándares de calidad en cada proyecto.",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Innovación",
    description:
      "Aplicamos soluciones tecnológicas modernas para cada cliente.",
  },
  {
    icon: <Users size={18} />,
    title: "Compromiso",
    description:
      "Creamos relaciones duraderas basadas en confianza y resultados.",
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden py-28"
    >
      {/* Fondo */}

      <div className="absolute inset-0 bg-gradient-to-b from-bone via-white to-bone" />

      {/* Luz */}

      <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-brand/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* =======================================================
              COLUMNA IZQUIERDA - IMAGEN
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* Imagen */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
              relative
              overflow-hidden
              rounded-[32px]
              shadow-2xl
              transition-shadow
              duration-400
              hover:shadow-[0_35px_80px_rgba(15,23,42,.25)]
            ">

              <motion.img
                src={ABOUT_IMG}
                alt="Equipo de Max Multiservicios trabajando"
                initial={{
                  scale: 1.1,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                }}
                className="
                h-[420px]
                w-full
                object-cover
                md:h-[520px]
                transition
                duration-700
                hover:scale-105"
              />

              {/* Overlay */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-navy/50
                via-transparent
                to-transparent"
              />

            </motion.div>


            {/* Tarjeta experiencia */}

            <motion.div
              initial={{
                opacity:0,
                y:30,
              }}
              whileInView={{
                opacity:1,
                y:0,
              }}
              viewport={{
                once:true,
              }}
              transition={{
                delay:.3,
              }}
              className="
              absolute
              -bottom-8
              left-6
              md:left-8"
            >

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
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-xl"
              >

                <p className="
                  text-4xl
                  font-semibold
                  text-brand
                ">
                  5+
                </p>


                <p className="
                  mt-1
                  max-w-[140px]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-slate
                ">
                  Años creando soluciones digitales
                </p>

              </motion.div>

            </motion.div>


          </motion.div>
                    {/* =======================================================
              COLUMNA DERECHA - CONTENIDO
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Badge>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand" />

                  Sobre Nosotros
                </span>
              </Badge>
            </motion.div>


            {/* Título */}

            <h2
              className="
              mt-6
              max-w-xl
              text-3xl
              font-semibold
              leading-tight
              text-navy
              md:text-5xl"
            >

              Una empresa que une{" "}

              <span className="text-brand">
                tecnología
              </span>

              , comercio y crecimiento.

            </h2>


            {/* Texto */}

            <p
              className="
              mt-6
              max-w-xl
              text-base
              leading-8
              text-slate
              md:text-lg"
            >

              En{" "}
              <strong className="text-navy">
                Max Multiservicios
              </strong>
              creamos soluciones integrales para personas,
              emprendedores y empresas, combinando servicios
              digitales, comercio electrónico y tecnología.

            </p>


            <p
              className="
              mt-4
              max-w-xl
              text-base
              leading-8
              text-slate
              md:text-lg"
            >

              Nuestro objetivo es facilitar herramientas modernas
              que ayuden a nuestros clientes a crecer, mejorar su
              presencia digital y alcanzar nuevos objetivos.

            </p>


            {/* Características */}

            <div
              className="
              mt-8
              grid
              gap-4
              sm:grid-cols-3"
            >

              {FEATURES.map((feature, index) => (

                <motion.div
                  key={feature.title}
                  initial={{
                    opacity:0,
                    y:20,
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                  }}
                  viewport={{
                    once:true,
                  }}
                  transition={{
                    delay:index * .1,
                  }}
                  className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg"
                >

                  <div
                    className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-brand/10
                    text-brand
                    transition
                    group-hover:bg-brand
                    group-hover:text-white"
                  >

                    {feature.icon}

                  </div>


                  <h3
                    className="
                    mt-4
                    font-semibold
                    text-navy"
                  >
                    {feature.title}
                  </h3>


                  <p
                    className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate"
                  >
                    {feature.description}
                  </p>

                </motion.div>

              ))}

            </div>


          </motion.div>
                  </div>

      </div>

    </section>
  );
}