import { useEffect, useMemo, useRef, useState } from "react";
import "./FluidSlideshow.css";

export default function FluidSlideshow({
  images = [],
  intervalMs = 2600,
  className = "",
}) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const [viewerOpen, setViewerOpen] = useState(false);

  useEffect(() => {
    if (!safeImages.length) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % safeImages.length);
    }, intervalMs);

    return () => clearInterval(timerRef.current);
  }, [safeImages.length, intervalMs]);

  useEffect(() => {
    const onKey = (e) => {
      if (!viewerOpen) return;
      if (e.key === "Escape") setViewerOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % safeImages.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewerOpen, safeImages.length]);

  if (!safeImages.length) return null;
  const current = safeImages[index];

  const prev = () => setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  const next = () => setIndex((i) => (i + 1) % safeImages.length);

  return (
    <>
      <div className={`fluidWrap ${className}`}>
        {/* ✅ show ORIGINAL ratio: no fixed height, no crop */}
        <div className="ratioStage">
          <img
            className="ratioImg"
            src={current}
            alt="Project"
            onClick={() => setViewerOpen(true)}
            title="Click to open fullscreen"
          />

          <button className="stageBtn left" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="stageBtn right" onClick={next} aria-label="Next">
            ›
          </button>

          <button
            className="fullBtn"
            onClick={() => setViewerOpen(true)}
            aria-label="Fullscreen"
            title="Fullscreen"
          >
            ⤢
          </button>
        </div>

        <div className="fluidDots">
          {safeImages.slice(0, 20).map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ✅ Fullscreen Viewer */}
      {viewerOpen && (
        <div className="viewerOverlay" onMouseDown={() => setViewerOpen(false)}>
          <div className="viewerCard" onMouseDown={(e) => e.stopPropagation()}>
            <button className="viewerClose" onClick={() => setViewerOpen(false)} aria-label="Close">
              ✕
            </button>

            <button className="viewerNav left" onClick={prev} aria-label="Previous">
              ‹
            </button>
            <button className="viewerNav right" onClick={next} aria-label="Next">
              ›
            </button>

            <img className="viewerImg" src={current} alt="Fullscreen" />
          </div>
        </div>
      )}
    </>
  );
}
