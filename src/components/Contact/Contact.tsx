import type { IconType } from "react-icons";
import { SiGithub } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";

type Contato = {
  nome: string;
  valor: string;
  href: string;
  Icone: IconType;
  cor: string;
  externo?: boolean;
};

const contatos: Contato[] = [
  {
    nome: "Email",
    valor: "carloaless1512@gmail.com",
    href: "mailto:carloaless1512@gmail.com",
    Icone: HiOutlineMail,
    cor: "#EA4335",
  },
  {
    nome: "Telefone",
    valor: "(64) 99956-4635",
    href: "tel:+5564999564635",
    Icone: FaPhone,
    cor: "#34D399",
  },
  {
    nome: "GitHub",
    valor: "@carlosAless",
    href: "https://github.com/carlosAless",
    Icone: SiGithub,
    cor: "#E2E8F0",
    externo: true,
  },
  {
    nome: "Localização",
    valor: "Jataí — GO",
    href: "https://maps.google.com/?q=Jataí,GO",
    Icone: HiOutlineLocationMarker,
    cor: "#38BDF8",
    externo: true,
  },
];

export const Contact = () => {
  return (
    <section id="contato" className="w-full py-20 text-white">
      <style>{`
        .contact-icon-3d {
          background: linear-gradient(155deg, #3a3f4b 0%, #23262e 55%, #191b21 100%);
          box-shadow:
            0 14px 24px -10px rgba(0, 0, 0, 0.55),
            0 2px 0 0 rgba(255, 255, 255, 0.06) inset,
            0 -10px 16px -6px rgba(0, 0, 0, 0.5) inset,
            0 1px 1px 0 rgba(255, 255, 255, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .contact-icon-3d::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            155deg,
            rgba(255, 255, 255, 0.35) 0%,
            rgba(255, 255, 255, 0.06) 30%,
            rgba(255, 255, 255, 0) 55%
          );
          pointer-events: none;
        }
        .contact-card:hover .contact-icon-3d {
          transform: translateY(-3px);
          box-shadow:
            0 20px 30px -12px rgba(0, 0, 0, 0.7),
            0 2px 0 0 rgba(255, 255, 255, 0.08) inset,
            0 -10px 16px -6px rgba(0, 0, 0, 0.5) inset,
            0 1px 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold">
          &lt;<span className="text-blue-500">Contato</span>/&gt;
        </h2>
        <p className="mt-4 text-center text-sm text-slate-400 md:text-base">
          Vamos conversar? Estou aberto a freelas, colaborações e oportunidades.
        </p>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {contatos.map(({ nome, valor, href, Icone, cor, externo }) => (
            <li key={nome}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 rounded-2xl p-1  "
              >
                <div className="contact-icon-3d relative flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Icone size={28} color={"white"} aria-hidden />
                </div>

                <div className="text-center">
                  <span className="block text-xs uppercase tracking-widest text-slate-500">
                    {nome}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-white/90 group-hover:text-white">
                    {valor}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
