import { useMemo } from "react";

export type PerformanceTier = "low" | "mid" | "high";

/** Detect device capability — returns "low", "mid", or "high" */
export function getPerformanceTier(): PerformanceTier {
  if (typeof window === "undefined") return "mid";

  const cores = navigator.hardwareConcurrency || 2;
  const memory = (navigator as any).deviceMemory || 4; // GB
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const dpr = window.devicePixelRatio || 1;

  // Check WebGL capability
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
  if (isMobile) score -= 2;
  if (dpr > 2) score -= 1;

  if (score >= 6) return "high";
  if (score >= 3) return "mid";
  return "low";
}

/** Performance config based on tier */
export function getPerformanceConfig(tier: PerformanceTier) {
  switch (tier) {
    case "low":
      return {
        enableSplashCursor: false,
        enableFloatingRocks: false,
        enableAnimatedPlanet: false,
        enableNoiseOverlay: false,
        ringRockCount: 0,
        dustCount: 0,
        fallingStarCount: 0,
        heroStarCount: 15,
        floatingRockCount: 0,
        planetSphereDetail: 64,
        pixelRatio: 1,
      };
    case "mid":
      return {
        enableSplashCursor: false,
        enableFloatingRocks: true,
        enableAnimatedPlanet: true,
        enableNoiseOverlay: true,
        ringRockCount: 500,
        dustCount: 500,
        fallingStarCount: 10,
        heroStarCount: 30,
        floatingRockCount: 15,
        planetSphereDetail: 128,
        pixelRatio: Math.min(window.devicePixelRatio, 1.5),
      };
    case "high":
      return {
        enableSplashCursor: true,
        enableFloatingRocks: true,
        enableAnimatedPlanet: true,
        enableNoiseOverlay: true,
        ringRockCount: 1500,
        dustCount: 1000,
        fallingStarCount: 20,
        heroStarCount: 60,
        floatingRockCount: 25,
        planetSphereDetail: 256,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
      };
  }
}

export function usePerformanceTier() {
  const tier = useMemo(() => getPerformanceTier(), []);
  const config = useMemo(() => getPerformanceConfig(tier), [tier]);
  return { tier, config };
}
