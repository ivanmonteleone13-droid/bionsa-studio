import { business } from "@/lib/business";

export default function Hero() {
  const heroImage = "heroImage" in business ? business.heroImage : null;

  return (
    <section id="hem" className="relative min-h-[92vh] overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative order-2 min-h-[360px] lg:order-1 lg:min-h-full">
          {heroImage ? (
            <>
              <img
                src={heroImage}
                alt={`${business.name} — studio på ${business.address.street}, ${business.address.city}`}
                className="absolute inset-0 h-full w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--background)]" aria-hidden />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/30" aria-hidden />
          )}
        </div>
        <div className="relative order-1 flex items-center bg-[var(--background)] px-6 py-20 lg:order-2 lg:px-12 lg:py-28">
          <div className="max-w-lg">
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              <span aria-hidden>★</span>
              {business.rating} · K-beauty studio
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/60">
              Uppsala
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-medium leading-snug text-[var(--foreground)] sm:text-5xl">
              Korean lashlift
              <span className="block text-[var(--secondary)]">&amp; brow studio</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--foreground)]/75">{business.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--foreground)]/70">
              <span className="rounded-full bg-[var(--primary)]/10 px-4 py-2">Lashlift från 595 kr</span>
              <span className="rounded-full bg-[var(--primary)]/10 px-4 py-2">Browlift från 550 kr</span>
            </div>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
            >
              <span aria-hidden>🌸</span>
              Boka behandling
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
