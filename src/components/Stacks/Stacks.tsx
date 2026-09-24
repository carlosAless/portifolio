import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiNpm,
  SiReacthookform,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";

type Stack = {
  nome: string;
  Icone: IconType;
  cor: string;
};

const stacks: Stack[] = [
  { nome: "JavaScript", Icone: SiJavascript, cor: "#F7DF1E" },
  { nome: "TypeScript", Icone: SiTypescript, cor: "#3178C6" },
  { nome: "React", Icone: SiReact, cor: "#61DAFB" },
  { nome: "React Hook Form", Icone: SiReacthookform, cor: "#EC5990" },
  { nome: "Tailwind CSS", Icone: SiTailwindcss, cor: "#38BDF8" },
  { nome: "Node.js", Icone: SiNodedotjs, cor: "#5FA04E" },
  { nome: "Express", Icone: SiExpress, cor: "#E2E8F0" },
  { nome: "PostgreSQL", Icone: SiPostgresql, cor: "#4169E1" },
  { nome: "npm", Icone: SiNpm, cor: "#CB3837" },
  { nome: "Git", Icone: SiGit, cor: "#F05032" },
  { nome: "GitHub", Icone: SiGithub, cor: "#E2E8F0" },
];

export const Stacks = () => {
  return (
    <section className="py-20 text-white w-full">
      <style>{`
       

        .stack-icon-3d {
          background: linear-gradient(155deg, #3a3f4b 0%, #23262e 55%, #191b21 100%);
          box-shadow:
            0 14px 24px -10px rgba(0, 0, 0, 0.55),
            0 2px 0 0 rgba(255, 255, 255, 0.06) inset,
            0 -10px 16px -6px rgba(0, 0, 0, 0.5) inset,
            0 1px 1px 0 rgba(255, 255, 255, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .stack-icon-3d::before {
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

        
      `}</style>

      <h2 className="text-center text-3xl font-bold">
        &lt;<span className="text-blue-500">Stack</span>/&gt;
      </h2>

      <div
        className="relative mt-12  flex w-[calc(100vw-7px)] min-w-0 overflow-x-hidden left-1/2 right-1/2 -mx-[50vw]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <ul className="flex gap-7 animate-infinite-scroll">
          {[...stacks, ...stacks, ...stacks, ...stacks].map((stack, i) => (
            <li
              key={`${stack.nome}-${i}`}
              aria-hidden={i >= stacks.length}
              className="flex shrink-0 flex-col items-center gap-4"
            >
              <div className="stack-icon-3d relative flex h-16 w-16 items-center justify-center rounded-2xl">
                <stack.Icone
                  size={30}
                  color={stack.cor}
                  aria-hidden
                  style={{
                    filter: `drop-shadow(0 2px 3px rgba(0,0,0,0.5)) drop-shadow(0 0 10px ${stack.cor}55)`,
                  }}
                />
              </div>
              <span className="whitespace-nowrap text-xs text-slate-400">
                {stack.nome}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
