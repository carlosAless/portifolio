import type { ReactElement } from "react";
import miniaturaJatahyMobi from "../../assets/miniaturajatahymobi.png";

type ProjectType = "publico" | "privado";

interface Project {
  image: string;
  name: string;
  description: string;
  acess: string;
  type: ProjectType;
  stack?: string[];
}

export const Projects = (): ReactElement => {
  const projects: Project[] = [
    {
      image: miniaturaJatahyMobi,
      name: "Jatahy Mobi",
      acess: "https://www.jatahymobi.com.br",
      description:
        "Landing page desenvolvida para uma empresa de mobilidade urbana. A solução foi feita tendo responsividade, apresentação dos serviços e com SEO para pesquisas.",
      type: "privado",
      stack: ["ReactJS", "TailwindCSS", "TypeScript"],
    },
  ];

  return (
    <section
      id="projetos"
      className="w-full py-16 flex flex-col items-center justify-center"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white text-center">
          &lt;<span className="text-blue-500">Projetos</span>/&gt;
        </h2>

        <p className="mt-3 max-w-2xl text-gray-400">
          Alguns dos projetos que desenvolvi utilizando diferentes tecnologias e
          ferramentas.
        </p>
      </div>

      <div className="flex flex-row gap-8">
        {projects.map((project) => (
          <article
            key={project.name}
            className="
              overflow-hidden
              group
              rounded-2xl
              border
              border-[#30363d]
              bg-[#090A0B]
              shadow-xl
             max-w-[500px]
             h-[550px]
            "
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                title={project.name}
                alt={`Capa do projeto ${project.name}`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {project.type === "privado" && (
                <span
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    border
                    border-white/10
                    bg-black/70
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-gray-200
                    backdrop-blur-md
                  "
                >
                  Código privado
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {project.name}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
                {project.description}
              </p>

              {project.stack && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-md
                        bg-[#15181b]
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-gray-300
                        ring-1
                        ring-white/5
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6">
                <a
                  href={project.acess}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-blue-600
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-colors
                    duration-200
                    hover:bg-blue-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:ring-offset-2
                    focus:ring-offset-[#090A0B]
                  "
                >
                  Ver projeto
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
