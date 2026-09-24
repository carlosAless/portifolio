const trajetoria = [
  {
    periodo: "Atual",
    cargo: "Desenvolvedor Freelancer",
    local: null,
    ativo: true,
  },
  {
    periodo: "Abr 2024 — Jul 2026",
    cargo: "Técnico em Informática",
    local: "Prime Tecnologia Jataí",
  },
  {
    periodo: "2020 — 2024",
    cargo: "Bacharel em Ciência da Computação",
    local: "UFJ",
  },
  {
    periodo: "2017 — 2019",
    cargo: "Técnico em Manutenção e Suporte em Informática",
    local: "IFG Jataí",
  },
];

export const About = () => {
  return (
    <section id="sobre" className="text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center">
        &lt;<span className="text-blue-500">Sobre mim</span>/&gt;
      </h2>

      <ol className="relative mx-auto mt-14 max-w-2xl">
        {/* trilho */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent"
        />

        {trajetoria.map((item) => (
          <li key={item.periodo} className="relative pl-10 pb-10 last:pb-0">
            {/* marcador */}
            <span
              aria-hidden
              className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full ring-4 ring-slate-950 ${
                item.ativo ? "bg-blue-500" : "bg-slate-600"
              }`}
            >
              {item.ativo && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60 motion-reduce:hidden" />
              )}
            </span>

            <p
              className={`font-mono text-xs tracking-wide ${
                item.ativo ? "text-blue-400" : "text-slate-400"
              }`}
            >
              {item.periodo}
            </p>

            <h3 className="mt-1.5 text-lg font-semibold leading-snug text-slate-50">
              {item.cargo}
            </h3>

            {item.local && (
              <p className="mt-0.5 text-sm text-slate-400">{item.local}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
