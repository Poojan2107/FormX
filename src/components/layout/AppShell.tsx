"use client";

import { MobileChrome, useMenuOpen } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";

function WhatsAppGate() {
  const menuOpen = useMenuOpen();
  return <WhatsAppFloat menuOpen={menuOpen} />;
}

/** Client shell: shared menu state for header + WhatsApp */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <MobileChrome>
      {children}
      <WhatsAppGate />
    </MobileChrome>
  );
}
