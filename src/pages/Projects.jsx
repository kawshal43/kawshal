import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./Projects.css";

const FILTERS = ["All", "3D Animation", "Software", "Design", "Photography"];

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
            {FILTERS.map((f) => (
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
          {list.map((p) => (
            <article key={p.slug} className="projectCard glass">
              {/* Image cover */}
              <div
                className="projectThumb"
                style={{ backgroundImage: `url(${p.thumbnail})` }}
              >
                <div className="projectShade" />
                <div className="projectTopRow">
                  <span className="badge">{p.category}</span>
                  <div className="miniTags">
                    {p.tags.slice(0, 2).map((t) => (
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
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                <div className="projectActions">
                  <Link className="btn primary" to={`/projects/${p.slug}`}>
                    {p.type === "youtube" ? "Watch" : "View"}
                  </Link>
                  <Link className="btn" to={`/projects/${p.slug}`}>
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projectsCta glass">
          <h2>Need a creative expert for your next project?</h2>
          <p className="muted">
            Let’s collaborate to bring your ideas to life.
          </p>
          <Link className="btn primary" to="/contact">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
