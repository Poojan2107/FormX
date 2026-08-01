import { Container } from "@/components/ui/Container";
import { ShieldCheck, Award, Layers, CheckCircle2 } from "lucide-react";

export function ProofStrip() {
  return (
    <div className="border-y border-line bg-[#fafafa] py-6">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-x-red shrink-0" />
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-tight text-ink">
                IS &amp; NBC Code Compliant
              </p>
              <p className="text-[10px] text-ink-muted">IS 456, 800 &amp; 1893 Certified</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="size-5 text-x-red shrink-0" />
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-tight text-ink">
                25+ Delivered Projects
              </p>
              <p className="text-[10px] text-ink-muted">Turnkey &amp; Greenfield</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Layers className="size-5 text-x-red shrink-0" />
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-tight text-ink">
                10 Integrated Disciplines
              </p>
              <p className="text-[10px] text-ink-muted">Single-Window Delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-5 text-x-red shrink-0" />
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-tight text-ink">
                100% GFC Construction Ready
              </p>
              <p className="text-[10px] text-ink-muted">Zero-Clash Coordination</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
