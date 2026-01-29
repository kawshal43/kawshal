import { Link, useParams } from "react-router-dom";
import { getProjectById, projects } from "../data/projects";
import FluidSlideshow from "../components/FluidSlideshow";
import "./ProjectDetails.css";

function toYoutubeEmbed(url) {
  if (!url) return null;

  // Handle youtu.be + watch?v=
  let embed = url
    .replace("watch?v=", "embed/")
    .replace("youtu.be/", "www.youtube.com/embed/");

  // Remove extra params after ID (optional)
  // Keep it simple: just append autoplay/mute
  const joiner = embed.includes("?") ? "&" : "?";
  embed = `${embed}${joiner}autoplay=1&mute=1&playsinline=1&rel=0`;

  return embed;
}

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <section className="container" style={{ paddingTop: 110 }}>
        <div className="glass pd">
          <h1 className="title">Project not found</h1>
          <Link className="btn primary" to="/projects">Back to Projects</Link>
        </div>
      </section>
    );
  }

  const idx = projects.findIndex((p) => p.id === project.id);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <section className="details">
      <div className="container">
        <div className="glass pd">
          <div className="pdTop">
            <span className="badge">{project.category}</span>
            <h1 className="pdTitle">{project.title}</h1>
            <p className="muted">{project.description}</p>
          </div>

          {/* ✅ VIDEO: autoplay muted */}
          {project.type === "video" && (
            <div className="contentBox">
              <div className="videoFrame">
                <iframe
                  src={toYoutubeEmbed(project.youtube)}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="hint">Video plays muted by default. User can enable sound from the YouTube player.</p>
            </div>
          )}

          {/* ✅ PHOTOS: auto slideshow inside details */}
          {project.type === "photos" && (
            <div className="contentBox">
              <h3 className="sectionTitle">Gallery</h3>
              <p className="muted">This project contains {project.gallery?.length || 0} images.</p>

              <div style={{ marginTop: 12 }}>
                <FluidSlideshow images={project.gallery || []} intervalMs={2600} />
              </div>
            </div>
          )}

          {/* ✅ LONG DETAILS */}
          {project.details?.long && (
            <div className="contentBox glass inner">
              <h3>Details</h3>
              <pre className="detailsText">{project.details.long}</pre>
            </div>
          )}

          {/* ✅ TAGS */}
          <div className="pdTags">
            {(project.tags || []).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          {/* ✅ LINKS */}
          {project.github && (
            <div style={{ marginTop: 12 }}>
              <a className="btn primary" href={project.github} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          )}

          {/* ✅ NAV */}
          <div className="pdNav">
            <Link className="btn" to="/projects">Back</Link>
            <Link className="btn primary" to="/contact">Hire Me</Link>
          </div>

          <div className="pdNav" style={{ justifyContent: "space-between" }}>
            {prev ? <Link className="btn" to={`/projects/${prev.id}`}>← Prev</Link> : <span />}
            {next ? <Link className="btn" to={`/projects/${next.id}`}>Next →</Link> : <span />}
          </div>
        </div>
      </div>
    </section>
  );
}
