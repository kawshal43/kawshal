import { useEffect, useRef } from "react";
import "./BackgroundOrbs.css";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function BackgroundOrbs() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let w = 0, h = 0, dpr = 1;
    let raf = 0;

    const orbCount = window.innerWidth < 700 ? 10 : 16;

    const orbs = Array.from({ length: orbCount }).map(() => ({
      x: rand(0, 1),
      y: rand(0, 1),
      r: rand(40, window.innerWidth < 700 ? 90 : 140),
      vx: rand(-0.00018, 0.00018),
      vy: rand(-0.00014, 0.00014),
      stretch: rand(0.75, 1.35), // oval factor
      baseGlow: rand(0.08, 0.18),
    }));

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.floor(window.innerWidth);
      h = Math.floor(window.innerHeight);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawOrb(o) {
      const x = o.x * w;
      const y = o.y * h;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const dx = x - mx;
      const dy = y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Glow increases when mouse is near (proximity glow)
      const near = Math.max(0, 1 - dist / 220);
      const glow = o.baseGlow + near * 0.22;

      // Cyan/blue blended glow
      const alpha = Math.min(0.38, glow);

      ctx.save();
      ctx.translate(x, y);
      ctx.scale(o.stretch, 1);

      // soft blur orb
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, o.r);
      grad.addColorStop(0, `rgba(79, 209, 255, ${alpha})`);
      grad.addColorStop(0.5, `rgba(45, 124, 255, ${alpha * 0.55})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, o.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);

      // faint star dust
      ctx.fillStyle = "rgba(255,255,255,0.03)";
      for (let i = 0; i < 60; i++) {
        ctx.fillRect(rand(0, w), rand(0, h), 1, 1);
      }

      for (const o of orbs) {
        o.x += o.vx;
        o.y += o.vy;

        // wrap around edges for infinite drift
        if (o.x < -0.1) o.x = 1.1;
        if (o.x > 1.1) o.x = -0.1;
        if (o.y < -0.1) o.y = 1.1;
        if (o.y > 1.1) o.y = -0.1;

        drawOrb(o);
      }

      raf = requestAnimationFrame(tick);
    }

    function onMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    resize();
    tick();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="orbs" aria-hidden="true" />;
}
