import { useEffect, useRef } from "react";

/**
 * Premium custom cursor — desktop only.
 * A neon purple dot + trailing ring, with hover/click states on interactive elements.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.classList.remove("cursor-hidden");
      ring.classList.remove("cursor-hidden");
    };
    const onLeave = () => {
      dot.classList.add("cursor-hidden");
      ring.classList.add("cursor-hidden");
    };
    const onDown = () => {
      dot.classList.add("cursor-click");
      ring.classList.add("cursor-click");
    };
    const onUp = () => {
      dot.classList.remove("cursor-click");
      ring.classList.remove("cursor-click");
    };

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="active"], .btn-primary, .btn-ghost, .btn-game';

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest?.(interactiveSelector)) {
        dot.classList.add("cursor-active");
        ring.classList.add("cursor-active");
      }
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest?.(interactiveSelector)) {
        dot.classList.remove("cursor-active");
        ring.classList.remove("cursor-active");
      }
    };

    const tick = () => {
      // Dot follows quickly; ring trails smoothly.
      dotX += (mouseX - dotX) * 0.55;
      dotY += (mouseY - dotY) * 0.55;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring cursor-hidden" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot cursor-hidden" aria-hidden="true" />
    </>
  );
}