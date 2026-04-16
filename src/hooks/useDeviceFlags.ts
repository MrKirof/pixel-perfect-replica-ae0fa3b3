import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useDeviceFlags() {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      setIsReducedMotion(motionQuery.matches);
    };

    update();
    mobileQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      mobileQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return {
    isMobile,
    isReducedMotion,
    shouldReduceEffects: isMobile || isReducedMotion,
  };
}
