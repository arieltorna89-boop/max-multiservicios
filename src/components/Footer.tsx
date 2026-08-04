import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { NAV_LINKS, SOCIAL_LINKS } from "../lib/constants";

function SocialIcon({ name }: { name: string }) {
  const social = name.toLowerCase();

  if (social.includes("instagram")) return <FaInstagram />;

  return <FaFacebookF />;
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center font-bold text-lg">
                M
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  MAX
                </h3>

                <p className="font-serif italic text-accent">
                  Multiservicios
                </p>
              </div>

            </div>

            <p className="mt-6 text-slate-300 leading-7">
              Soluciones integrales para personas y empresas.
              Tecnología, comercio electrónico y marketing
              digital en un solo lugar.
            </p>
          </div>

          {/* Navegación */}

          <div>

            <h4 className="font-semibold mb-5">
              Navegación
            </h4>

            <div className="flex flex-col gap-3">

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}

            </div>

          </div>

          {/* Servicios */}

          <div>

            <h4 className="font-semibold mb-5">
              Servicios
            </h4>

            <div className="space-y-3 text-slate-300">

              <p>Marketing Digital</p>

              <p>Tienda Online</p>


            </div>

          </div>

          {/* Contacto */}

          <div>

            <h4 className="font-semibold mb-5">
              Contacto
            </h4>

            <div className="space-y-4 text-slate-300">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <span>info@maxmultiservicios.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent" />
                <span>+53 XXX XXX XXX</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent" />
                <span>Cuba</span>
              </div>

              <div className="flex gap-4 pt-3">

                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-slate-600
                    flex
                    items-center
                    justify-center
                    hover:bg-brand
                    hover:border-brand
                    transition"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} MAX Multiservicios. Todos los derechos reservados.
          </p>

          <p>
            Innovación • Tecnología • Soluciones
          </p>
        </div>
      </div>
    </footer>
  );
}