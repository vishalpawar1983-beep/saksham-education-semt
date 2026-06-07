import { partners } from '../../data/content';

export default function TrustedBy() {
  const loop = [...partners, ...partners];
  return (
    <section className="border-y border-line bg-white py-10">
      <div className="container">
        <p className="mb-7 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Trusted by 5,000+ students &amp; leading hiring partners
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {loop.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2 text-xl font-extrabold text-slate-400 transition-colors hover:text-primary"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-sm text-slate-500">
                  {name.slice(0, 2).toUpperCase()}
                </span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
