import { useEffect, useRef } from "react";

interface HeroSceneProps {
  starCount?: number;
}

const HeroScene = ({ starCount = 40 }: HeroSceneProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;

    const resize = () => {
      canvas.width = canvas.offsetWidth * Math.min(devicePixelRatio, 1.5);
      canvas.height = canvas.offsetHeight * Math.min(devicePixelRatio, 1.5);
      ctx.setTransform(Math.min(devicePixelRatio, 1.5), 0, 0, Math.min(devicePixelRatio, 1.5), 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onVisChange = () => { isVisible = !document.hidden; };
    document.addEventListener("visibilitychange", onVisChange);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    interface Star {
      x: number; y: number; vx: number; vy: number;
      o: number; r: number; ts: number; to: number;
    }
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * w(), y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
        o: Math.random() * 0.7 + 0.1, r: Math.random() * 1.5 + 0.3,
        ts: 0.5 + Math.random() * 2, to: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let lastDraw = 0;
    const targetInterval = 1000 / 30;

    const draw = (now: number) => {
      if (!isVisible) {
        animId = requestAnimationFrame(draw);
        return;
      }
      if (now - lastDraw < targetInterval) {
        animId = requestAnimationFrame(draw);
        return;
      }
      lastDraw = now;
      ctx.clearRect(0, 0, w(), h());
      time += 0.016;

      for (const s of stars) {
        s.x += s.vx; s.y += s.vy;
        if (s.x < 0) s.x = w(); if (s.x > w()) s.x = 0;
        if (s.y < 0) s.y = h(); if (s.y > h()) s.y = 0;
        const tw = 0.3 + 0.7 * ((Math.sin(time * s.ts + s.to) + 1) / 2);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.o * tw})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisChange);
    };
  }, [starCount]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none", zIndex: 1 }} />
  );
};

export default HeroScene;
