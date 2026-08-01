export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8 prose-measure">
      <div className="mb-3.5 flex items-center gap-3">
        <span className="h-px w-8 bg-x-red" />
        <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.24em] text-x-red">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink md:text-3xl lg:text-4xl leading-[1.12]">
        {title}
      </h2>
    </div>
  );
}
