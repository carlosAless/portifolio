import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  console.log(menuOpen);
  return (
    <>
      <nav className=" bg-[#18283A] z-99 fixed inset-x-0 top-0 h-[50px] text-white">
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4">
          <h1 className="text-lg font-bold tracking-tight">
            &lt;<span className="text-blue-500">Dev</span>/&gt;
          </h1>

          <ol className="hidden lg:flex flex-row items-center gap-8 text-sm text-white/70">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group relative transition-colors hover:text-white"
                >
                  {label}

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ol>

          <button
            type="button"
            onClick={toggleMenu}
            className="cursor-pointer lg:hidden"
            aria-label="Abrir menu"
          >
            <IoMenu size={35} />
          </button>
        </div>
      </nav>

      <div
        className={`
           xl:hidden
           fixed
    top-[50px]
    right-0
     h-[calc(100vh-60px)]
    w-full
    md:w-[400px]
    bg-[#18283A]
    shadow-lg
    overflow-hidden
    z-50
    transition-transform
          duration-300
          ease-in-out00
          lg:hidden

          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ol className="flex flex-col items-center justify-center gap-10 p-10">
          {links.map(({ label, href }) => (
            <li key={href} className="cursor-pointer">
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className=" text-white/70 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
