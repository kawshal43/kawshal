import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import FluidSlideshow from "../components/FluidSlideshow";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="container">
        <div className="glass pd">
          <h1 className="title">Project not found</h1>
          <Link className="btn primary" to="/projects">Back to Projects</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="details">
      <div className="container">
        <div className="glass pd">
          <div className="pdTop">
            <span className="badge">{project.category}</span>
            <h1 className="pdTitle">{project.title}</h1>
            <p className="muted">{project.description}</p>
          </div>

          {project.type === "youtube" && (
            <div className="contentBox">
              {project.youtubeId ? (
                <div className="videoFrame">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="glass placeholder">
                  <h3>YouTube preview coming soon</h3>
                  <p className="muted">
                    {/* TODO: Add YouTube ID in src/data/projects.js for this project */}
                    Add YouTube ID later in <code>src/data/projects.js</code>.
                  </p>
                </div>
              )}
            </div>
          )}

          {project.type === "slideshow" && (
            <div className="contentBox">
              <FluidSlideshow images={project.images} />
            </div>
          )}

          {project.type === "software" && (
            <div className="contentBox glass inner">
              <h3>Project Overview</h3>
              <p className="muted">
                This is a software project. You can add screenshots, features, and demo links anytime.
              </p>

              <h4 className="subTitle">Tech / Tags</h4>
              <div className="tags">
                {project.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              {project.links?.github && (
                <div style={{ marginTop: 14 }}>
                  <a
                    className="btn primary"
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          )}

          <div className="pdTags">
            {project.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          <div className="pdNav">
            <Link className="btn" to="/projects">Back</Link>
            <Link className="btn primary" to="/contact">Hire Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
