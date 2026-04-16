import { useEffect, useRef } from "react";

interface FloatingRocksProps {
  count?: number;
}

const FloatingRocks = ({ count = 25 }: FloatingRocksProps) => {
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

    interface Rock {
      x: number; y: number; size: number; rotation: number;
      rotSpeed: number; vx: number; vy: number; opacity: number; shape: number[];
    }

    const rocks: Rock[] = [];
    for (let i = 0; i < count; i++) {
      const vertices = 5 + Math.floor(Math.random() * 4);
      const shape: number[] = [];
      for (let v = 0; v < vertices; v++) shape.push(0.4 + Math.random() * 0.6);
      rocks.push({
        x: Math.random() * w(), y: Math.random() * h(),
        size: 1 + Math.random() * 5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.15,
        opacity: 0.1 + Math.random() * 0.25,
        shape,
      });
    }

    let time = 0;
    let lastDraw = 0;
    const targetInterval = 1000 / 30; // Cap at 30fps

    const drawRock = (rock: Rock) => {
      ctx.save();
      ctx.translate(rock.x, rock.y);
      ctx.rotate(rock.rotation);
      ctx.beginPath();
      const verts = rock.shape.length;
      for (let i = 0; i <= verts; i++) {
        const angle = (i / verts) * Math.PI * 2;
        const r = rock.size * rock.shape[i % verts];
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(180, 170, 155, ${rock.opacity})`;
      ctx.fill();
      ctx.restore();
    };

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

      for (const rock of rocks) {
        rock.x += rock.vx;
        rock.y += rock.vy;
        rock.rotation += rock.rotSpeed;
        if (rock.x < -10) rock.x = w() + 10;
        if (rock.x > w() + 10) rock.x = -10;
        if (rock.y < -10) rock.y = h() + 10;
        if (rock.y > h() + 10) rock.y = -10;
        drawRock(rock);
      }
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisChange);
    };
  }, [count]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
  );
};

export default FloatingRocks;
