import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { pathOptions, type PathKey } from '@/data';

const optionKeys: PathKey[] = ['doctoral', 'executive', 'explore'];

export default function PathFinder() {
  const [selected, setSelected] = useState<PathKey>('doctoral');
  const option = pathOptions[selected];

  return (
    <section id="path-finder" className="bg-[#e9f1f4] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div>
          <p className="eyebrow text-[#3c718d]">Find Your Path</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,8vw,3.75rem)] leading-[.98] tracking-[-.06em]">
            What are you <em>looking for?</em>
          </h2>
          <p className="mt-6 max-w-[400px] text-sm leading-6 text-[#5e6a73]">
            A simple starting point for a more considered conversation about what comes next. This is a product
            demonstration — no personal data is stored.
          </p>

          <div className="mt-8 flex flex-col gap-2">
            {optionKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                className={`path-option ${selected === key ? 'path-option-active' : ''}`}
                aria-pressed={selected === key}
              >
                <span>{pathOptions[key].label}</span>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[340px] rounded-[26px] bg-[#11151b] p-7 text-white shadow-xl shadow-[#98abb5]/25 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[.15em] text-[#8fd6ff]">
                Your starting point
              </p>
              <h3 className="mt-4 max-w-[540px] font-display text-4xl leading-[.98] tracking-[-.06em] sm:text-5xl">
                {option.title}
              </h3>
              <p className="mt-6 max-w-[520px] text-sm leading-6 text-[#b9c7d7]">{option.description}</p>
              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-2 border-b border-[#69c4f4] pb-2 text-sm font-bold text-[#8fd6ff] transition hover:text-white"
              >
                {option.action} <ArrowRight size={16} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
