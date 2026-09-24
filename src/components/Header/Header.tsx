export const Header = () => {
  return (
    <header className="text-white relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16">
      <div className="min-w-0 w-full  flex-1 max-w-xl text-center lg:text-left">
        <h1 className="min-w-0 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Desenvolvedor na World Wide
          <span className="text-yellow-400">{" {Web}"}</span>
        </h1>

        <p className="text-[#8b949e] text-lg leading-relaxed mb-8">
          Crio interfaces modernas, rápidas e com atenção aos detalhes.
          Apaixonado por código limpo e design minimalista.
        </p>

        <div className="flex gap-4 justify-center lg:justify-start">
          <a
            href="#projetos"
            className="px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-medium hover:bg-[#79b8ff] transition"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-6 py-3 rounded-lg border border-[#30363d] text-[#e6edf3] font-medium hover:border-[#58a6ff] transition"
          >
            Contato
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center relative w-full">
        <div className="absolute inset-0 bg-[#58a6ff]/20 blur-[80px]"></div>

        <div className="relative w-full max-w-xl rounded-xl overflow-hidden bg-[#161b22] shadow-2xl ring-1 ring-[#30363d]">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#21262d] border-b border-[#30363d]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="code-font text-xs text-[#8b949e] mx-auto">
              index.html
            </span>
          </div>

          <div className="code-font text-sm leading-relaxed p-6 overflow-x-auto">
            <pre className="text-[#c9d1d9] m-0">
              <code>
                <span className="text-[#ff7b72]">&lt;!</span>
                <span className="text-[#7ee787]">DOCTYPE</span>{" "}
                <span className="text-[#79c0ff]">html</span>
                <span className="text-[#ff7b72]">&gt;</span>
                {"\n"}
                <span className="text-[#ff7b72]">&lt;</span>
                <span className="text-[#7ee787]">html</span>{" "}
                <span className="text-[#79c0ff]">lang</span>=
                <span className="text-[#a5d6ff]">"pt-BR"</span>
                <span className="text-[#ff7b72]">&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-[#ff7b72]">&lt;</span>
                <span className="text-[#7ee787]">head</span>
                <span className="text-[#ff7b72]">&gt;</span>
                {"\n"}
                {"    "}
                <span className="text-[#ff7b72]">&lt;</span>
                <span className="text-[#7ee787]">title</span>
                <span className="text-[#ff7b72]">&gt;</span>Meu Portfólio
                <span className="text-[#ff7b72]">&lt;/</span>
                <span className="text-[#7ee787]">title</span>
                <span className="text-[#ff7b72]">&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-[#ff7b72]">&lt;/</span>
                <span className="text-[#7ee787]">head</span>
                <span className="text-[#ff7b72]">&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-[#ff7b72]">&lt;</span>
                <span className="text-[#7ee787]">body</span>
                <span className="text-[#ff7b72]">&gt;</span>
                {"\n"}
                {"    "}
                <span className="text-[#ff7b72]">&lt;</span>
                <span className="text-[#7ee787]">h1</span>
                <span className="text-[#ff7b72]">&gt;</span>Hello, World!
                <span className="text-[#ff7b72]">&lt;/</span>
                <span className="text-[#7ee787]">h1</span>
                <span className="text-[#ff7b72]">&gt;</span>
                {"\n"}
                {"  "}
                <span className="text-[#ff7b72]">&lt;/</span>
                <span className="text-[#7ee787]">body</span>
                <span className="text-[#ff7b72]">&gt;</span>
                {"\n"}
                <span className="text-[#ff7b72]">&lt;/</span>
                <span className="text-[#7ee787]">html</span>
                <span className="text-[#ff7b72]">&gt;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </header>
  );
};
