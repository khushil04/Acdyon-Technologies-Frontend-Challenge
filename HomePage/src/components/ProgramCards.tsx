import { ArrowDownRight } from 'lucide-react';
import { programs } from '../data/programs';

export default function ProgramCards() {
  return (
    <section id="programs" className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="flex flex-col justify-between gap-6 border-b border-[#11151b]/20 pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Explore AcdyOn</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,5vw,3.75rem)] tracking-[-.06em]">
            Designed for where you are <em>going.</em>
          </h2>
        </div>
        <a href="#path-finder" className="inline-flex items-center gap-2 text-sm font-bold underline decoration-[#4d98bf] decoration-2 underline-offset-4">
          Find your path
        </a>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
        {programs.map((program) => (
          <a
            href="#path-finder"
            key={program.id}
            className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-[#11151b]/15 bg-white/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#11151b]/40 hover:bg-white sm:min-h-[280px] sm:p-7"
          >
            <div className="flex items-start justify-between text-xs font-mono text-[#73808a]">
              <span>{program.number}</span>
              <ArrowDownRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>
            <div>
              <p className="eyebrow">{program.category}</p>
              <h3 className="mt-3 font-display text-[1.85rem] leading-tight tracking-[-.05em]">{program.label}</h3>
              <p className="mt-3 max-w-[340px] text-sm leading-6 text-[#5e6a73]">{program.detail}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
