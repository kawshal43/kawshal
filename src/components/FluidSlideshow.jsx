import { useEffect, useMemo, useRef, useState } from "react";
import "./FluidSlideshow.css";

export default function FluidSlideshow({ images = [], intervalMs = 2600 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef(null);

  const safeImages = useMemo(() => (Array.isArray(images) ? images : []), [images]);
  const total = safeImages.length;

  const goNext = () => {
    if (!total) return;
    setIndex((i) => (i + 1) % total);
  };

  const goPrev = () => {
    if (!total) return;
    setIndex((i) => (i - 1 + total) % total);
  };

  const toggleFullscreen = async () => {
    const el = wrapRef.current;
    if (!el) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen();
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (!total) return;
    if (paused) return;

    const t = setInterval(goNext, intervalMs);
    return () => clearInterval(t);
  }, [paused, intervalMs, total]);

  useEffect(() => {
    const onKey = (e) => {
      if (!total) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  if (!total) {
    return (
      <div className="fsEmpty glass">
        <h3>No images</h3>
        <p className="muted">This project gallery is empty.</p>
      </div>
    );
  }

  return (
    <div
      className="fsWrap"
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="fsStage">
        <img className="fsImg" src={safeImages[index]} alt={`Slide ${index + 1}`} />
      </div>

      <button className="fsBtn fsPrev" onClick={goPrev} aria-label="Previous image">
        ‹
      </button>
      <button className="fsBtn fsNext" onClick={goNext} aria-label="Next image">
        ›
      </button>

      <div className="fsBar">
        <div className="fsDots">
          {safeImages.slice(0, Math.min(total, 12)).map((_, i) => (
            <span key={i} className={`fsDot ${i === index ? "on" : ""}`} />
          ))}
          {total > 12 && <span className="fsDotMore">+{total - 12}</span>}
        </div>

        <div className="fsMeta">
          <span className="fsCount">
            {index + 1}/{total}
          </span>
          <button className="fsFull" onClick={toggleFullscreen}>
            Fullscreen
          </button>
        </div>
      </div>
    </div>
  );
}
