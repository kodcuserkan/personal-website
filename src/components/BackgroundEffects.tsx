import { useEffect, useRef, useState, useCallback } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
}

interface StarNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  sat: number;
  light: number;
  glow: number;
  phase: number;
  driftAngle: number;
  rays: number;
  rayLength: number;
  rayWidth: number;
  trail: TrailPoint[];
}

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<StarNode[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setIsMobile(window.innerWidth < 768);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => {
      mq.removeEventListener('change', handler);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleMouse = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    const neonPalettes = [
      { hue: 185, sat: 100, light: 55, weight: 0.25 },
      { hue: 300, sat: 100, light: 60, weight: 0.2 },
      { hue: 260, sat: 100, light: 60, weight: 0.2 },
      { hue: 210, sat: 100, light: 55, weight: 0.15 },
      { hue: 330, sat: 100, light: 58, weight: 0.1 },
      { hue: 130, sat: 100, light: 50, weight: 0.1 },
    ];

    function pickPalette() {
      const r = Math.random();
      let acc = 0;
      for (const p of neonPalettes) {
        acc += p.weight;
        if (r <= acc) return p;
      }
      return neonPalettes[0];
    }

    const nodeCount = isMobile ? 25 : 50;
    const maxTrail = isMobile ? 12 : 25;
    const nodes: StarNode[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const pal = pickPalette();
      const rayOptions = [4, 6, 8];
      const rays = rayOptions[Math.floor(Math.random() * rayOptions.length)];
      nodes.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 3 + Math.random() * 6,
        hue: pal.hue + (Math.random() - 0.5) * 15,
        sat: pal.sat,
        light: pal.light + (Math.random() - 0.5) * 10,
        glow: 0.4 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        driftAngle: Math.random() * Math.PI * 2,
        rays,
        rayLength: 1.8 + Math.random() * 3.5,
        rayWidth: 0.15 + Math.random() * 0.35,
        trail: [],
      });
    }
    nodesRef.current = nodes;

    document.addEventListener('mousemove', handleMouse);

    const connectionDist = isMobile ? 180 : 260;

    // Draw a real sky star — sharp pointed rays from a bright center
    function drawSkyStar(ctx: CanvasRenderingContext2D, n: StarNode) {
      const s = n.size;
      const numRays = n.rays;
      const rayLen = s * n.rayLength;
      const halfW = s * n.rayWidth;

      for (let i = 0; i < numRays; i++) {
        const angle = (Math.PI * 2 / numRays) * i;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const tipX = cos * rayLen;
        const tipY = sin * rayLen;
        const perpX = -sin;
        const perpY = cos;
        ctx.beginPath();
        ctx.moveTo(perpX * halfW, perpY * halfW);
        ctx.lineTo(tipX, tipY);
        ctx.lineTo(-perpX * halfW, -perpY * halfW);
        ctx.closePath();
      }
    }

    // Draw a simplified star (just center glow + rays) for trail ghosts
    function drawStarGhost(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      n: StarNode,
      alpha: number,
    ) {
      const s = n.size * 0.7;
      const numRays = n.rays;
      const rayLen = s * n.rayLength * 0.6;
      const halfW = s * n.rayWidth * 0.5;

      // Soft glow
      const glowR = s * 3;
      const glow = ctx.createRadialGradient(x, y, 0, x, y, glowR);
      glow.addColorStop(0, `hsla(${n.hue}, 100%, 85%, ${alpha * 0.3})`);
      glow.addColorStop(1, `hsla(${n.hue}, 100%, ${n.light}%, 0)`);
      ctx.beginPath();
      ctx.arc(x, y, glowR, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Rays
      ctx.save();
      ctx.translate(x, y);
      for (let i = 0; i < numRays; i++) {
        const angle = (Math.PI * 2 / numRays) * i;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const tipX = cos * rayLen;
        const tipY = sin * rayLen;
        const perpX = -sin;
        const perpY = cos;
        ctx.beginPath();
        ctx.moveTo(perpX * halfW, perpY * halfW);
        ctx.lineTo(tipX, tipY);
        ctx.lineTo(-perpX * halfW, -perpY * halfW);
        ctx.closePath();
      }
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, rayLen);
      grad.addColorStop(0, `hsla(${n.hue}, 100%, 90%, ${alpha * 0.5})`);
      grad.addColorStop(1, `hsla(${n.hue}, 100%, ${n.light}%, 0)`);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      // Center dot
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${n.hue}, 100%, 95%, ${alpha * 0.6})`;
      ctx.fill();
    }

    const draw = () => {
      const t = reducedMotion ? 0 : timeRef.current;
      if (!reducedMotion) timeRef.current += 0.005;

      ctx.clearRect(0, 0, W(), H());
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // Update positions and record trails
      if (!reducedMotion) {
        for (const n of nodes) {
          n.driftAngle += (Math.random() - 0.5) * 0.08;
          n.vx += Math.cos(n.driftAngle) * 0.003;
          n.vy += Math.sin(n.driftAngle) * 0.003;
          n.vx *= 0.99;
          n.vy *= 0.99;
          n.x += n.vx;
          n.y += n.vy;

          const margin = 120;
          if (n.x < -margin) n.x = W() + margin;
          if (n.x > W() + margin) n.x = -margin;
          if (n.y < -margin) n.y = H() + margin;
          if (n.y > H() + margin) n.y = -margin;

          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 300 && dist > 0) {
            const force = ((300 - dist) / 300) * 0.8;
            n.vx -= (dx / dist) * force;
            n.vy -= (dy / dist) * force;
          }

          n.phase += 0.01;

          // Record trail position every few frames
          if (timeRef.current % 3 < 0.01) {
            n.trail.unshift({ x: n.x, y: n.y, alpha: 0.6 });
            if (n.trail.length > maxTrail) n.trail.pop();
          }

          // Fade trail points
          for (const tp of n.trail) {
            tp.alpha *= 0.97;
          }
          // Remove faded points
          while (n.trail.length > 0 && n.trail[n.trail.length - 1].alpha < 0.01) {
            n.trail.pop();
          }
        }
      }

      // Draw trails first (behind everything)
      for (const n of nodes) {
        for (let i = n.trail.length - 1; i >= 0; i--) {
          const tp = n.trail[i];
          if (tp.alpha < 0.01) continue;
          drawStarGhost(ctx, tp.x, tp.y, n, tp.alpha);
        }
      }

      // Connections — multi-line nets
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const progress = 1 - dist / connectionDist;
            const breathe = reducedMotion ? 1 : 0.5 + 0.5 * Math.sin(t * 2.5 + i * 0.4 + j * 0.25);

            const numLines = progress > 0.6 ? 3 : progress > 0.3 ? 2 : 1;
            const perpX = -dy / dist;
            const perpY = dx / dist;
            const spread = 4 + progress * 8;

            for (let l = 0; l < numLines; l++) {
              const offset = (l - (numLines - 1) / 2) * spread;
              const lineAlpha = progress * 0.1 * breathe * (1 - Math.abs(l - (numLines - 1) / 2) * 0.25);

              const grad = ctx.createLinearGradient(
                a.x + perpX * offset, a.y + perpY * offset,
                b.x + perpX * offset, b.y + perpY * offset
              );
              grad.addColorStop(0, `hsla(${a.hue}, 100%, ${a.light}%, ${lineAlpha})`);
              grad.addColorStop(0.5, `hsla(${(a.hue + b.hue) / 2}, 100%, 70%, ${lineAlpha * 1.4})`);
              grad.addColorStop(1, `hsla(${b.hue}, 100%, ${b.light}%, ${lineAlpha})`);

              ctx.save();
              ctx.shadowColor = `hsla(${(a.hue + b.hue) / 2}, 100%, 65%, ${lineAlpha * 0.5})`;
              ctx.shadowBlur = 6;
              ctx.beginPath();
              ctx.moveTo(a.x + perpX * offset, a.y + perpY * offset);
              ctx.lineTo(b.x + perpX * offset, b.y + perpY * offset);
              ctx.strokeStyle = grad;
              ctx.lineWidth = (1 - Math.abs(l - (numLines - 1) / 2) * 0.3) * progress * 1;
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      }

      // Stars — real sky star look with sharp points
      for (const n of nodes) {
        const breathe = reducedMotion ? 1 : 0.7 + 0.3 * Math.sin(n.phase);
        const s = n.size * breathe;
        const pulse = reducedMotion ? 1 : 0.6 + 0.4 * Math.sin(n.phase * 2 + t * 4);

        // Large soft bloom (star halo)
        const bloomR = s * 8;
        const bloom = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, bloomR);
        bloom.addColorStop(0, `hsla(${n.hue}, 100%, 90%, ${0.15 * pulse * n.glow})`);
        bloom.addColorStop(0.15, `hsla(${n.hue}, 100%, ${n.light}%, ${0.12 * pulse * n.glow})`);
        bloom.addColorStop(0.5, `hsla(${n.hue}, 100%, ${n.light}%, ${0.04 * pulse * n.glow})`);
        bloom.addColorStop(1, `hsla(${n.hue}, 100%, ${n.light}%, 0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, bloomR, 0, Math.PI * 2);
        ctx.fillStyle = bloom;
        ctx.fill();

        // Sharp star rays
        ctx.save();
        ctx.translate(n.x, n.y);
        const rot = reducedMotion ? 0 : t * 0.08;
        ctx.rotate(rot);
        ctx.shadowColor = `hsla(${n.hue}, 100%, 70%, ${0.6 * pulse})`;
        ctx.shadowBlur = 12 * pulse;

        // Gradient fill for rays
        drawSkyStar(ctx, { ...n, size: s });
        const starGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, s * n.rayLength);
        starGrad.addColorStop(0, `hsla(${n.hue}, 100%, 95%, ${0.85 * pulse})`);
        starGrad.addColorStop(0.3, `hsla(${n.hue}, 100%, ${n.light + 10}%, ${0.5 * pulse})`);
        starGrad.addColorStop(1, `hsla(${n.hue}, 100%, ${n.light}%, 0)`);
        ctx.fillStyle = starGrad;
        ctx.fill();

        // Sharp neon stroke on each ray
        drawSkyStar(ctx, { ...n, size: s });
        ctx.strokeStyle = `hsla(${n.hue}, 100%, 85%, ${0.45 * pulse})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.restore();

        // Bright white-hot center
        const coreGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, s * 1.5);
        coreGrad.addColorStop(0, `hsla(${n.hue}, 100%, 98%, ${0.95 * pulse})`);
        coreGrad.addColorStop(0.3, `hsla(${n.hue}, 100%, 85%, ${0.5 * pulse})`);
        coreGrad.addColorStop(1, `hsla(${n.hue}, 100%, ${n.light}%, 0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, s * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad;
        ctx.fill();

        // Tiny white center dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.2 * breathe, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * pulse})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', handleMouse);
    };
  }, [reducedMotion, isMobile, handleMouse]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#05050a]"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: isMobile ? 0.55 : 0.75 }}
      />
    </div>
  );
}