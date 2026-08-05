export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 measure-studio">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-x-red" aria-hidden />
        <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-2xl font-extrabold uppercase leading-[1.1] tracking-tight text-ink md:text-3xl lg:text-4xl">
        {title}
      </h2>
    </div>
  );
}
