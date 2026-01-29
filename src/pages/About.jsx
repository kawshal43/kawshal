import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import me from "../assets/me.png";
import "./About.css";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="about">
      <div className="container aboutTop glass">
        {/* LEFT: Round glow photo */}
        <div className="aboutPhotoCol">
          <button
            type="button"
            className="photoRingBtn"
            onClick={() => setOpen(true)}
            aria-label="Open profile photo"
          >
            <div className="profileRing sm">
              <img className="profileImg" src={me} alt="Ashinshana Kawshal" />
            </div>
          </button>
          <div className="photoHint">Click to view full photo</div>
        </div>

        {/* RIGHT: Text */}
        <div className="aboutInfo">
          <div className="kicker">ABOUT ME</div>
          <h1 className="title">I'm Ashinshana Kawshal</h1>
          <div className="subtitle">
            Creative Technologist | AI-Assisted Software Developer | 3D Animator
          </div>

          <p className="desc">
            I blend 3D animation, AI-assisted software development, and visual storytelling
            to build high-quality creative and technical solutions. I use AI to learn and
            implement faster — and I validate, refine, and deliver professional results.
          </p>

          <div className="aboutActions">
            <a className="btn primary" href="https://drive.google.com/file/d/1RCb3vMdrxQQvrr7t8VDWwdJllBDcP4FZ/view?usp=sharing" target="_blank" rel="noreferrer">
              Download CV
            </a>
            <Link className="btn" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container timeline glass">
        <h2 className="sectionTitle">Timeline</h2>

        <div className="timelineItem">
          <div className="year">2024</div>
          <div className="line" />
          <div className="content">
            <h3>Boomerang Global Ventures (Pvt) Ltd</h3>
            <p className="muted">3D Animator (5 months)</p>
            <p>Character and scene animation, video editing, VFX and SFX integration.</p>
          </div>
        </div>

        <div className="timelineItem">
          <div className="year">2019+</div>
          <div className="line" />
          <div className="content">
            <h3>Freelancer</h3>
            <p className="muted">5+ years</p>
            <p>3D work, design and development projects with premium delivery.</p>
          </div>
        </div>

        <div className="timelineItem">
          <div className="year">2022</div>
          <div className="line" />
          <div className="content">
            <h3>The Open University of Sri Lanka</h3>
            <p className="muted">BSE (UG)</p>
            <p>Software Engineering pathway with modern full-stack interests.</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="container skillGrid">
        <div className="glass skillCard">
          <h3>Creative</h3>
          <p>3D Animation, VFX/SFX, editing, storytelling.</p>
          <div className="chips">
            <span className="chip">Blender</span>
            <span className="chip">Premiere</span>
            <span className="chip">DaVinci</span>
          </div>
        </div>

        <div className="glass skillCard">
          <h3>Development</h3>
          <p>Front-end + backend-ready apps with clean architecture.</p>
          <div className="chips">
            <span className="chip">React</span>
            <span className="chip">Java</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">SQL</span>
          </div>
        </div>

        <div className="glass skillCard">
          <h3>AI Workflow</h3>
          <p>Rapid prototyping + debugging with AI, then refining manually.</p>
          <div className="chips">
            <span className="chip">Prompting</span>
            <span className="chip">Validation</span>
            <span className="chip">Refactor</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container cta glass">
        <h2>Have a project in mind?</h2>
        <p className="muted">Let’s collaborate to turn your idea into a high-quality result.</p>
        <Link className="btn primary" to="/contact">Contact Me</Link>
      </div>

      {/* ✅ Modal rendered to document.body (Portal) */}
      {open && (
        <PhotoModal
          src={me}
          alt="Ashinshana Kawshal"
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}

function PhotoModal({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    // prevent background scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div className="modalOverlay" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="modalCard" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <img className="modalImg" src={src} alt={alt} />
      </div>
    </div>,
    document.body
  );
}
