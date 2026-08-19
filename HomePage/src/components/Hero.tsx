import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pathways = [
  { id: '01', name: 'Doctoral Programs', note: 'Go deeper in your field' },
  { id: '02', name: 'Executive Education', note: 'Learn around working life' },
  { id: '03', name: 'Universities & Programs', note: 'See what may fit next' },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1500px] px-4 pt-10 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[.15em] text-[#68727a]">
            AcdyOn — academic pathways
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-5 max-w-[16ch] font-display text-[clamp(2.35rem,7vw,5.2rem)] font-medium leading-[0.96] tracking-[-.055em]"
          >
            Advance your expertise. Earn credentials that <em>matter.</em>
          </motion.h1>

          <p className="mt-6 max-w-[480px] text-base leading-7 text-[#424c54] sm:text-lg">
            Executive education and doctoral pathways for professionals ready for their next chapter.
          </p>

          <a
            href="#path-finder"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#11151b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#3e505d] sm:w-auto"
          >
            Find your path <ArrowRight size={16} />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="overflow-hidden rounded-[22px] border border-[#11151b]/12 bg-[#11151b] shadow-[0_24px_80px_rgba(17,21,27,0.18)]"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#6ee7b7]/80" />
            <span className="ml-2 text-[11px] font-semibold uppercase tracking-[.14em] text-white/55">
              AcdyOn Pathways
            </span>
          </div>

          <div className="p-4 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[.15em] text-[#8fd6ff]">Your next step</p>
            <p className="mt-3 font-display text-[1.7rem] leading-tight tracking-[-.04em] text-white sm:text-[2rem]">
              Choose a pathway. Then talk it through.
            </p>
            <ul className="mt-5 space-y-2">
              {pathways.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white transition hover:border-[#8fd6ff]/50 hover:bg-white/[0.08]"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-white/45">{item.id}</p>
                    <p className="truncate text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-white/55">{item.note}</p>
                  </div>
                  <ArrowRight size={16} className="shrink-0 text-[#8fd6ff]" />
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-white/45">
              A product preview — not a personalized recommendation, and no data is stored.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
