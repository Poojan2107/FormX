export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-6 bg-x-red" />
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-x-red">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink md:text-2xl">
        {title}
      </h2>
    </div>
  );
}
