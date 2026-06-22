export default function KoreanMethod() {
  const steps = [
    { n: "01", title: "Konsultation", desc: "Vi analyserar dina fransar/bryn och önskemål." },
    { n: "02", title: "Förberedelse", desc: "Skonsam rengöring med K-beauty produkter." },
    { n: "03", title: "Behandling", desc: "Lashlift eller brow lift med koreansk teknik." },
    { n: "04", title: "Eftervård", desc: "Personliga tips för långvarigt resultat." },
  ];
  return (
    <section id="metod" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--foreground)]">
          Korean beauty-metoden
        </h2>
        <div className="mt-10 space-y-6">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-6 border-b border-[var(--secondary)]/30 pb-6">
              <span className="font-mono text-sm text-[var(--secondary)]">{s.n}</span>
              <div>
                <h3 className="font-medium text-[var(--foreground)]">{s.title}</h3>
                <p className="mt-1 text-sm text-[var(--foreground)]/60">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
