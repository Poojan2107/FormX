import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPage } from "@/data/site";

const gallery = [
  {
    src: "/assets/services/architecture-02.jpg",
    label: "Architecture",
    caption: "Space locked to structure",
  },
  {
    src: "/assets/services/civil-03.jpg",
    label: "Structure",
    caption: "Forces carried cleanly",
  },
  {
    src: "/assets/services/site.jpg",
    label: "Infrastructure",
    caption: "Site made operable",
  },
] as const;

/** Full-bleed studio + discipline gallery — unique images only. */
export function AboutStudio() {
  return (
    <section className="relative">
      <div className="relative aspect-[16/10] min-h-[380px] overflow-hidden md:aspect-[2.2/1] md:min-h-[480px]">
        <Image
          src="/assets/about/studio-cover.jpg"
          alt="FormX studio — coordination before issue"
          fill
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        <span aria-hidden className="absolute left-0 top-0 z-10 h-[3px] w-28 bg-x-red" />

        <div className="absolute inset-0 z-10 flex items-end">
          <div className="mx-auto w-full max-w-[1480px] px-5 pb-11 sm:px-8 md:px-12 md:pb-14 lg:px-16">
            <Reveal>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-x-red">
                Studio
              </p>
              <h2
                className="mt-3 max-w-[14ch] font-display font-black leading-[1.0] tracking-[-0.045em] text-white"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
              >
                One room. Three disciplines.
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        {gallery.map((g, i) => (
          <Reveal key={g.label} delay={0.05 * i}>
            <div className="group relative aspect-[4/3] overflow-hidden bg-[#111] sm:aspect-[5/4]">
              <Image
                src={g.src}
                alt={g.caption}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="font-label text-[9.5px] tracking-[0.26em] text-x-red">{g.label}</p>
                <p className="mt-1.5 font-display text-[1.05rem] font-extrabold text-white">
                  {g.caption}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="border-b border-ink/[0.06] bg-white">
        <div className="mx-auto grid max-w-[1480px] gap-0 px-5 py-12 sm:grid-cols-2 sm:px-8 md:grid-cols-4 md:px-12 md:py-14 lg:px-16">
          {aboutPage.collaborationPoints.map((point, i) => (
            <Reveal key={point} delay={0.04 * i}>
              <div
                className={`py-5 md:px-6 md:py-0 ${
                  i > 0 ? "md:border-l md:border-ink/[0.07]" : "md:pl-0"
                }`}
              >
                <span className="font-label text-[10px] tracking-[0.22em] text-x-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3.5 font-display text-[1.08rem] font-extrabold leading-snug tracking-tight text-ink">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
