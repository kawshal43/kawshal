import { Link } from "react-router-dom";
import me from "../assets/me.png";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="container homeGrid">
        {/* Profile */}
        <div className="homeLeft">
          <div className="profileRing pop" aria-label="Profile photo">
            <div className="profileInner">
              <img className="profileImg" src={me} alt="Ashinshana Kawshal" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="homeRight">
          <h1 className="homeName">ASHINSHANA KAWSHAL</h1>
          <div className="homeTitle">
            Creative Technologist | AI-Assisted Software Developer | 3D Animator
          </div>

          <p className="homeTagline">
            Turning ideas into reality through 3D animation, AI-assisted development,
            and creative technology.
          </p>

          <div className="homeActions">
            <Link className="btn primary" to="/projects">View Projects</Link>
            <a className="btn" href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>

          {/* Skill cards */}
          <div className="skillGrid">
            <div className="skillCard glass" style={{ backgroundImage: `url(${a})` }}>
              <div className="skillShade" />
              <div className="skillBody">
                <h3>3D Animation</h3>
                <p>
                  Crafting immersive, polished 3D animations using Blender, including
                  character design and VFX.
                </p>
                <div className="skillChips">
                  <span className="chip">Blender</span>
                  <span className="chip">VFX</span>
                </div>
              </div>
            </div>

            <div className="skillCard glass" style={{ backgroundImage: `url(${b})` }}>
              <div className="skillShade" />
              <div className="skillBody">
                <h3>AI-Assisted Development</h3>
                <p>
                  Building web & software solutions using AI assistance, rapidly prototyping
                  in React, Java and Spring.
                </p>
                <div className="skillChips">
                  <span className="chip">React</span>
                  <span className="chip">Java</span>
                  <span className="chip">Spring</span>
                </div>
              </div>
            </div>

            <div className="skillCard glass" style={{ backgroundImage: `url(${c})` }}>
              <div className="skillShade" />
              <div className="skillBody">
                <h3>Photography & Editing</h3>
                <p>
                  Specializing in color grading, high-end retouching, and visual enhancement
                  for professional quality.
                </p>
                <div className="skillChips">
                  <span className="chip">Photoshop</span>
                  <span className="chip">Lightroom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="recentBlock">
            <h2 className="sectionTitle">Recent Projects</h2>
            <div className="recentGrid">
              <div className="glass mini">
                <span className="badge">3D Animation</span>
                <h4>The Seed (Animation Film)</h4>
                <p className="muted">YouTube preview will be added after upload.</p>
                <div className="miniActions">
                  <Link className="btn primary" to="/projects/the-seed-animation">Watch</Link>
                  <Link className="btn" to="/projects/the-seed-animation">View Details</Link>
                </div>
              </div>

              <div className="glass mini">
                <span className="badge">Software</span>
                <h4>Blender Live Face Mocap Add-on</h4>
                <p className="muted">MediaPipe-based live facial capture for Blender.</p>
                <div className="miniActions">
                  <Link className="btn primary" to="/projects/blender-live-face-mocap-addon">View</Link>
                  <Link className="btn" to="/projects/blender-live-face-mocap-addon">View Details</Link>
                </div>
              </div>

              <div className="glass mini">
                <span className="badge">Photography</span>
                <h4>Graduation Shoot</h4>
                <p className="muted">Premium retouching + cinematic grading.</p>
                <div className="miniActions">
                  <Link className="btn primary" to="/projects/graduation-shoot">View</Link>
                  <Link className="btn" to="/projects/graduation-shoot">View Details</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
