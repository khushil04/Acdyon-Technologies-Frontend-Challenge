const values = [
  {
    number: '01',
    title: 'Academic pathways',
    detail: 'Doctoral routes for professionals who want to go further in their field.',
  },
  {
    number: '02',
    title: 'Professional development',
    detail: 'Executive education designed around the decisions of working life.',
  },
  {
    number: '03',
    title: 'Guided consultation',
    detail: 'A conversation to help you understand which pathway may fit next.',
  },
  {
    number: '04',
    title: 'Program discovery',
    detail: 'A clearer starting point for exploring universities and programs.',
  },
];

export default function ValueSection() {
  return (
    <section id="about" className="bg-[#dcecf2] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-[820px]">
          <p className="eyebrow text-[#3c718d]">Why AcdyOn</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4.4rem)] leading-[1.02] tracking-[-.06em]">
            What we offer, explained <em>clearly.</em>
          </h2>
          <p className="mt-5 max-w-[560px] text-sm leading-6 text-[#3c4a52] sm:text-base">
            AcdyOn helps professionals explore academic and executive pathways with intention — without the noise of unverified claims.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#11151b]/10 bg-[#11151b]/10 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value.number} className="bg-[#dcecf2] p-6 sm:p-8">
              <p className="font-mono text-xs text-[#3c718d]">{value.number}</p>
              <h3 className="mt-5 font-display text-2xl tracking-[-.04em] sm:text-3xl">{value.title}</h3>
              <p className="mt-3 max-w-[360px] text-sm leading-6 text-[#3c4a52]">{value.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
