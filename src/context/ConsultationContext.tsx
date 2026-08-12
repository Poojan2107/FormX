"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ConsultationModal } from "@/components/shared/ConsultationModal";

interface ConsultationContextType {
  isOpen: boolean;
  openConsultation: () => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType>({
  isOpen: false,
  openConsultation: () => {},
  closeConsultation: () => {},
});

export function useConsultation() {
  return useContext(ConsultationContext);
}

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultation = () => setIsOpen(true);
  const closeConsultation = () => setIsOpen(false);

  useEffect(() => {
    const handleCustomOpen = () => setIsOpen(true);
    window.addEventListener("formx:open-consultation", handleCustomOpen);

    // Global listener for links/buttons targeting #contact or data-open-consultation
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        'a[href="#contact"], a[href="/contact"], button[data-open-consultation="true"]',
      );
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("formx:open-consultation", handleCustomOpen);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <ConsultationContext.Provider
      value={{ isOpen, openConsultation, closeConsultation }}
    >
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeConsultation} />
    </ConsultationContext.Provider>
  );
}
