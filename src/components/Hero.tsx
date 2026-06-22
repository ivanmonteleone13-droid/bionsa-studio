import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section id="hem" className="bg-[var(--background)] px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 h-1 w-12 rounded-full bg-[var(--secondary)]" />
        <p className="text-sm text-[var(--foreground)]/50">K-beauty studio · Uppsala</p>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-medium leading-snug text-[var(--foreground)] sm:text-5xl">
          Korean lashlift
        </h1>
        <h2 className="mt-1 text-2xl text-[var(--secondary)]">& brow studio</h2>
        <p className="mt-8 text-base leading-relaxed text-[var(--foreground)]/70">{business.description}</p>
        <div className="mt-10 flex items-center gap-6">
          <span className="text-3xl" aria-hidden>🌸</span>
          <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-[var(--foreground)] px-8 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90">
            Boka behandling
          </a>
        </div>
      </div>
    </section>
  );
}
