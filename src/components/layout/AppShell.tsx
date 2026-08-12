"use client";

import { MobileChrome, useMenuOpen } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { ConsultationProvider } from "@/context/ConsultationContext";

function WhatsAppGate() {
  const menuOpen = useMenuOpen();
  return <WhatsAppFloat menuOpen={menuOpen} />;
}

/** Client shell: shared menu state for header + WhatsApp + smooth scroll + consultation modal */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ConsultationProvider>
      <SmoothScroll>
        <MobileChrome>
          {children}
          <WhatsAppGate />
        </MobileChrome>
      </SmoothScroll>
    </ConsultationProvider>
  );
}

