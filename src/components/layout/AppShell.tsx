"use client";

import { MobileChrome, useMenuOpen } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";

function WhatsAppGate() {
  const menuOpen = useMenuOpen();
  return <WhatsAppFloat menuOpen={menuOpen} />;
}

/** Client shell: shared menu state for header + WhatsApp + smooth scroll */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <MobileChrome>
        {children}
        <WhatsAppGate />
      </MobileChrome>
    </SmoothScroll>
  );
}

