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
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-12">

        <div className="grid gap-10 lg:grid-cols-4 lg:gap-10">

          {/* Logo */}

          <div>
            <img
              src="/logomax.png"
              alt="MAX Multiservicios"
              className="h-14 w-auto md:h-16"
            />

            <p className="mt-4 text-sm text-slate-300 leading-6">
              Soluciones integrales para personas y empresas.
              Tecnología, comercio electrónico y marketing
              digital en un solo lugar.
            </p>
          </div>

          {/* Navegación */}

          <div>

            <h4 className="font-semibold text-sm mb-4">
              Navegación
            </h4>

            <div className="flex flex-col gap-2.5 text-sm">

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

            <h4 className="font-semibold text-sm mb-4">
              Servicios
            </h4>

            <div className="space-y-2.5 text-sm text-slate-300">

              <p>Marketing Digital</p>

              <p>Tienda Online</p>

            </div>

          </div>

          {/* Contacto */}

          <div>

            <h4 className="font-semibold text-sm mb-4">
              Contacto
            </h4>

            <div className="space-y-3 text-sm text-slate-300">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent shrink-0" />
                <span className="break-words">info@maxmultiservicios.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent shrink-0" />
                <span>+53 XXX XXX XXX</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent shrink-0" />
                <span>Cuba</span>
              </div>

              <div className="flex gap-3 pt-2">

                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="
                    w-9
                    h-9
                    rounded-full
                    border
                    border-slate-600
                    flex
                    items-center
                    justify-center
                    text-sm
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-400">
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