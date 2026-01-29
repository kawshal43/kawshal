import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { categories, projects } from "../data/projects";
import "./Projects.css";

import fallbackThumb from "../assets/me.png";

function ytPreviewSrc(id) {
  // ✅ Autoplay + muted + inline + loop
  // loop needs playlist=ID
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&loop=1&playlist=${id}`;
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const list = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="projects">
      <div className="container">
        <div className="projectsHeader glass">
          <div>
            <div className="kicker">PROJECTS</div>
            <h1 className="projectsTitle">Projects</h1>
          </div>

          <div className="filters">
            {categories.map((f) => (
              <button
                key={f}
                className={`filter ${active === f ? "active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="projectsGrid">
          {list.map((p) => {
            const thumb = (p.gallery && p.gallery[0]) || p.thumbnail || fallbackThumb;

            return (
              <article key={p.id} className="projectCard glass">
                {/* ✅ TOP MEDIA AREA */}
                <div className="projectThumb">
                  {p.type === "video" && p.youtubeId ? (
                    <div className="thumbVideoWrap">
                      <iframe
                        className="thumbVideo"
                        src={ytPreviewSrc(p.youtubeId)}
                        title={`${p.title} preview`}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="projectShade" />
                    </div>
                  ) : (
                    <div
                      className="thumbImage"
                      style={{ backgroundImage: `url(${thumb})` }}
                    >
                      <div className="projectShade" />
                    </div>
                  )}

                  <div className="projectTopRow">
                    <span className="badge">{p.category}</span>
                    <div className="miniTags">
                      {(p.tags || []).slice(0, 2).map((t) => (
                        <span key={t} className="miniTag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="projectBody">
                  <h3 className="projectName">{p.title}</h3>
                  <p className="muted">{p.description}</p>

                  <div className="tags">
                    {(p.tags || []).slice(0, 3).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  <div className="projectActions">
                    <Link className="btn primary" to={`/projects/${p.id}`}>
                      {p.type === "video" ? "Watch" : "View"}
                    </Link>
                    <Link className="btn" to={`/projects/${p.id}`}>
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projectsCta glass">
          <h2>Need a creative expert for your next project?</h2>
          <p className="muted">Let’s collaborate to bring your ideas to life.</p>
          <Link className="btn primary" to="/contact">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}
