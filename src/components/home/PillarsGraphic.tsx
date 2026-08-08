"use client";

import { Reveal } from "@/components/ui/Reveal";

export function PillarsGraphic() {
  const pillarsLeft = [
    {
      title: "Structural Integrity",
      body: "Design safe, reliable Structural systems",
    },
    {
      title: "Technical Expertise",
      body: "Apply engineering principles and best practices",
    },
  ];

  const pillarsRight = [
    {
      title: "Functional Design",
      body: "Create spaces that meet user needs",
    },
    {
      title: "Collaborative Insight",
      body: "Integrate architecture and practical feedback",
    },
  ];

  return (
    <div className="my-10 w-full py-6 text-white">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
        {/* Left 2 Pillars */}
        <div className="space-y-8 lg:col-span-3 lg:space-y-12">
          {pillarsLeft.map((p, idx) => (
            <Reveal key={p.title} delay={0.06 * idx}>
              <div className="group text-center lg:text-right">
                <div className="mb-2 h-[2.5px] w-16 bg-x-red transition-all duration-300 group-hover:w-24 lg:ml-auto" />
                <h4 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-x-red md:text-2xl">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Center 4 Columns Temple Structural Graphic */}
        <div className="flex justify-center lg:col-span-6">
          <Reveal delay={0.1}>
            <div className="relative w-full max-w-[460px] px-2">
              <svg
                viewBox="0 0 440 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full filter drop-shadow-[0_12px_30px_rgba(224,49,40,0.35)]"
              >
                {/* Triangular Pediment / Roof Line */}
                <path
                  d="M20 60L220 15L420 60H20Z"
                  fill="#e03128"
                  stroke="#b81f18"
                  strokeWidth="2"
                />
                <rect x="15" y="60" width="410" height="10" fill="#c4261d" />

                {/* 4 Structural Columns with Cohesive FormX Red Palette */}
                {/* Column 1 - Structural Integrity */}
                <g className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  <rect x="45" y="75" width="65" height="140" fill="#a31913" />
                  <rect x="40" y="72" width="75" height="7" fill="#7a100b" />
                  <rect x="40" y="215" width="75" height="8" fill="#7a100b" />
                  <line x1="57" y1="79" x2="57" y2="211" stroke="#7a100b" strokeWidth="2" />
                  <line x1="77" y1="79" x2="77" y2="211" stroke="#7a100b" strokeWidth="2" />
                  <line x1="97" y1="79" x2="97" y2="211" stroke="#7a100b" strokeWidth="2" />
                  {/* Column Icon 1: Classical Column / Pillar Icon */}
                  <circle cx="77.5" cy="145" r="17" fill="#ffffff" stroke="#7a100b" strokeWidth="2" />
                  <path d="M66 137H89" stroke="#e03128" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M68 141C68 139 70 139 71 141C71 143 69 144 68 144H87C86 144 84 143 84 141C85 139 87 139 87 141" stroke="#e03128" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M71 144V153M77.5 144V153M84 144V153" stroke="#e03128" strokeWidth="2" strokeLinecap="round" />
                  <path d="M68 153H87" stroke="#e03128" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Column 2 - Technical Expertise */}
                <g className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  <rect x="140" y="75" width="65" height="140" fill="#c4261d" />
                  <rect x="135" y="72" width="75" height="7" fill="#991711" />
                  <rect x="135" y="215" width="75" height="8" fill="#991711" />
                  <line x1="152" y1="79" x2="152" y2="211" stroke="#991711" strokeWidth="2" />
                  <line x1="172" y1="79" x2="172" y2="211" stroke="#991711" strokeWidth="2" />
                  <line x1="192" y1="79" x2="192" y2="211" stroke="#991711" strokeWidth="2" />
                  {/* Column Icon 2: Drafting Table & Engineer */}
                  <circle cx="172.5" cy="145" r="17" fill="#ffffff" stroke="#991711" strokeWidth="2" />
                  <circle cx="166" cy="138" r="2.5" fill="#e03128" />
                  <path d="M162 147C162 144 164 142 166 142C168 142 171 144 171 147" stroke="#e03128" strokeWidth="1.8" fill="none" />
                  <path d="M164 148L179 137" stroke="#e03128" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M166 151L181 140" stroke="#e03128" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M177 144V153" stroke="#e03128" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Column 3 - Functional Design */}
                <g className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  <rect x="235" y="75" width="65" height="140" fill="#d92c24" />
                  <rect x="230" y="72" width="75" height="7" fill="#b01f18" />
                  <rect x="230" y="215" width="75" height="8" fill="#b01f18" />
                  <line x1="247" y1="79" x2="247" y2="211" stroke="#b01f18" strokeWidth="2" />
                  <line x1="267" y1="79" x2="267" y2="211" stroke="#b01f18" strokeWidth="2" />
                  <line x1="287" y1="79" x2="287" y2="211" stroke="#b01f18" strokeWidth="2" />
                  {/* Column Icon 3: Computer Monitor & Grid */}
                  <circle cx="267.5" cy="145" r="17" fill="#ffffff" stroke="#b01f18" strokeWidth="2" />
                  <rect x="258" y="136" width="19" height="13" rx="1.5" stroke="#e03128" strokeWidth="2" fill="none" />
                  <path d="M264 149V153M271 149V153M261 153H274" stroke="#e03128" strokeWidth="2" strokeLinecap="round" />
                  <path d="M261 140H274M266 140V146" stroke="#e03128" strokeWidth="1.6" strokeLinecap="round" />
                </g>

                {/* Column 4 - Collaborative Insight */}
                <g className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                  <rect x="330" y="75" width="65" height="140" fill="#e03128" />
                  <rect x="325" y="72" width="75" height="7" fill="#c4261d" />
                  <rect x="325" y="215" width="75" height="8" fill="#c4261d" />
                  <line x1="342" y1="79" x2="342" y2="211" stroke="#c4261d" strokeWidth="2" />
                  <line x1="362" y1="79" x2="362" y2="211" stroke="#c4261d" strokeWidth="2" />
                  <line x1="382" y1="79" x2="382" y2="211" stroke="#c4261d" strokeWidth="2" />
                  {/* Column Icon 4: 2 Team Members Collaborating */}
                  <circle cx="362.5" cy="145" r="17" fill="#ffffff" stroke="#c4261d" strokeWidth="2" />
                  <circle cx="357" cy="139" r="2.8" fill="#e03128" />
                  <path d="M351 152C351 146.5 354 144 357 144C360 144 363 146.5 363 152" stroke="#e03128" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <circle cx="368" cy="139" r="2.8" fill="#e03128" />
                  <path d="M362 152C362 146.5 365 144 368 144C371 144 374 146.5 374 152" stroke="#e03128" strokeWidth="2" strokeLinecap="round" fill="none" />
                </g>

                {/* Base Foundation Beam */}
                <rect x="10" y="223" width="420" height="12" fill="#e03128" rx="2" />
              </svg>
            </div>
          </Reveal>
        </div>

        {/* Right 2 Pillars */}
        <div className="space-y-8 lg:col-span-3 lg:space-y-12">
          {pillarsRight.map((p, idx) => (
            <Reveal key={p.title} delay={0.06 * (idx + 2)}>
              <div className="group text-center lg:text-left">
                <div className="mb-2 h-[2.5px] w-16 bg-x-red transition-all duration-300 group-hover:w-24 lg:mr-auto" />
                <h4 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-x-red md:text-2xl">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
