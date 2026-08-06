import { aboutPage } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";

/**
 * Studio evidence — dominant photo + compact collaboration list.
 */
export function StudioEvidence() {
  return (
    <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-6">
      <div className="relative overflow-hidden bg-[#0d0d0d] lg:col-span-8">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[480px]">
          <AssetImage
            alt="FormX studio — coordination before issue"
            slot="about/studio-cover.jpg"
            kind="studio"
            fit="cover"
            aspect="auto"
            objectPosition="center"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="font-label text-[10px] uppercase tracking-[0.28em] text-x-red">
              Studio practice
            </p>
            <p className="mt-2 max-w-[22ch] font-display text-2xl font-extrabold leading-[1.1] tracking-tight text-white md:text-[1.75rem]">
              Reviews, coordination, and issue — held in one room.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#111111] p-6 text-white md:p-7 lg:col-span-4">
        <p className="font-label text-[10px] uppercase tracking-[0.28em] text-x-red">
          How the studio works
        </p>
        <h2
          className="mt-3 font-display font-extrabold tracking-tight"
          style={{ fontSize: "clamp(1.35rem, 2vw, 1.65rem)" }}
        >
          Coordination that survives construction
        </h2>
        <ul className="mt-8 flex flex-1 flex-col">
          {aboutPage.collaborationPoints.map((point, i) => (
            <li
              key={point}
              className="flex items-start gap-3 border-t border-white/10 py-4 text-[14px] leading-[1.55] text-white/70"
            >
              <span className="mt-0.5 font-label text-[10px] tracking-[0.18em] text-x-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** @deprecated Use StudioEvidence */
export const HumanValuesPanel = StudioEvidence;
