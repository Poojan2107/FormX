import { aboutPage } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";

/**
 * Studio evidence band — photo + collaboration points.
 * Founder portrait lives only in the dedicated Hiren chapter below.
 */
export function StudioEvidence() {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
      <div className="relative overflow-hidden border border-ink/[0.08] bg-[#111] p-3 lg:col-span-7">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[420px]">
          <AssetImage
            alt="FormX studio — coordination before issue"
            slot="about/studio-cover.jpg"
            kind="studio"
            fit="cover"
            aspect="auto"
            objectPosition="center"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="font-label text-[10px] uppercase tracking-[0.28em] text-x-red">
              Studio practice
            </p>
            <p className="mt-2 max-w-md font-display text-xl font-extrabold leading-snug tracking-tight text-white md:text-2xl">
              Reviews, coordination, and issue — held in one room.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center border border-ink/[0.08] bg-white p-6 md:p-8 lg:col-span-5">
        <p className="font-label text-[10px] uppercase tracking-[0.28em] text-x-red">
          How the studio works
        </p>
        <h2
          className="mt-3 font-display font-extrabold tracking-tight text-ink"
          style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
        >
          Coordination that survives construction
        </h2>
        <ul className="mt-8 flex flex-1 flex-col gap-0 border-t border-ink/[0.08]">
          {aboutPage.collaborationPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 border-b border-ink/[0.08] py-4 text-[14.5px] font-medium leading-[1.55] text-ink/78"
            >
              <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rotate-45 bg-x-red" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** @deprecated Use StudioEvidence — kept as alias during About rebuild. */
export const HumanValuesPanel = StudioEvidence;
