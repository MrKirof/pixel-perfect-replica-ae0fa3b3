import { useMemo } from "react";

export type PerformanceTier = "low" | "mid" | "high";

/** Detect device capability — returns "low", "mid", or "high" */
export function getPerformanceTier(): PerformanceTier {
  if (typeof window === "undefined") return "mid";

  const cores = navigator.hardwareConcurrency || 2;
  const memory = (navigator as any).deviceMemory || 4;
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const dpr = window.devicePixelRatio || 1;
  const screenWidth = window.innerWidth || 1280;

  let maxTextureSize = 0;
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
    if (gl) {
      maxTextureSize = (gl as WebGLRenderingContext).getParameter(
        (gl as WebGLRenderingContext).MAX_TEXTURE_SIZE
      );
    }
  } catch {}

  let score = 0;
  score += cores >= 8 ? 3 : cores >= 4 ? 2 : 0;
  score += memory >= 8 ? 3 : memory >= 4 ? 2 : 0;
  score += maxTextureSize >= 8192 ? 2 : maxTextureSize >= 4096 ? 1 : 0;
  if (isMobile) score -= 3;
  if (screenWidth < 768) score -= 2;
  if (dpr > 2) score -= 1;

  if (score >= 6) return "high";
  if (score >= 3) return "mid";
  return "low";
}

/** Performance config based on tier */
export function getPerformanceConfig(tier: PerformanceTier) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  switch (tier) {
    case "low":
      return {
        enableSplashCursor: false,
        enableFloatingRocks: false,
        enableAnimatedPlanet: false,
        enableNoiseOverlay: false,
        enableFooterVortex: false,
        enableTextScramble: false,
        ringRockCount: 0,
        dustCount: 0,
        fallingStarCount: 0,
        heroStarCount: 10,
        floatingRockCount: 0,
        planetSphereDetail: 48,
        pixelRatio: 1,
      };
    case "mid":
      return {
        enableSplashCursor: false,
        enableFloatingRocks: !isMobile,
        enableAnimatedPlanet: !isMobile,
        enableNoiseOverlay: !isMobile,
        enableFooterVortex: !isMobile,
        enableTextScramble: !isMobile,
        ringRockCount: isMobile ? 0 : 1400,
        dustCount: isMobile ? 0 : 500,
        fallingStarCount: isMobile ? 0 : 10,
        heroStarCount: isMobile ? 16 : 28,
        floatingRockCount: isMobile ? 0 : 12,
        planetSphereDetail: isMobile ? 64 : 128,
        pixelRatio: isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5),
      };
    case "high":
      return {
        enableSplashCursor: !isMobile,
        enableFloatingRocks: !isMobile,
        enableAnimatedPlanet: !isMobile,
        enableNoiseOverlay: !isMobile,
        enableFooterVortex: !isMobile,
        enableTextScramble: !isMobile,
        ringRockCount: isMobile ? 0 : 3500,
        dustCount: isMobile ? 0 : 1500,
        fallingStarCount: isMobile ? 0 : 25,
        heroStarCount: isMobile ? 22 : 60,
        floatingRockCount: isMobile ? 0 : 25,
        planetSphereDetail: isMobile ? 72 : 256,
        pixelRatio: isMobile ? 1 : Math.min(window.devicePixelRatio, 2),
      };
  }
}

export function usePerformanceTier() {
  const tier = useMemo(() => getPerformanceTier(), []);
  const config = useMemo(() => getPerformanceConfig(tier), [tier]);
  return { tier, config };
}
