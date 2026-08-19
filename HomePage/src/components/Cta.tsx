import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Cta() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="mx-auto flex max-w-[1500px] flex-col justify-between gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:px-10 lg:py-28"
    >
      <div className="max-w-[720px]">
        <p className="eyebrow">Begin here</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4.4rem)] tracking-[-.07em]">
          Make your next move <em>intentional.</em>
        </h2>
        <p className="mt-5 max-w-[520px] text-sm leading-6 text-[#5e6a73] sm:text-base">
          Explore a pathway first. If you want a conversation after that, leave a note here — this form is a
          front-end demo and does not send or store anything.
        </p>
      </div>

      <form
        className="w-full max-w-[420px] rounded-2xl border border-[#11151b]/15 bg-white/50 p-5 sm:p-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        {submitted ? (
          <p className="text-sm leading-6 text-[#3c4a52]">
            Thanks. Nothing was sent — this page is a product demonstration. Use Find Your Path to keep exploring.
          </p>
        ) : (
          <>
            <label className="block text-xs font-semibold uppercase tracking-[.12em] text-[#68727a]" htmlFor="note">
              What are you considering?
            </label>
            <textarea
              id="note"
              name="note"
              rows={3}
              required
              className="mt-3 w-full resize-none rounded-xl border border-[#11151b]/20 bg-white px-3 py-3 text-sm outline-none ring-[#4d98bf] focus:ring-2"
              placeholder="Doctoral, executive, or still deciding…"
            />
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#11151b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#3e505d]"
            >
              Book a Consultation <ArrowRight size={16} />
            </button>
          </>
        )}
      </form>
    </section>
  );
}
