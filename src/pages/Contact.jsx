import me from "../assets/me.png";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container contactGrid">
        {/* Left: Profile + details */}
        <div className="glass profileCard">
          <div className="profileRing sm">
            <img className="profileImg" src={me} alt="Ashinshana Kawshal" />
          </div>

          <h1 className="title">Contact</h1>
          <p className="muted">
            Feel free to reach out for collaborations, freelance work, or any creative/technical project.
          </p>

          <div className="info">
            <div><span>Email:</span> kawshals258@gmail.com</div>
            <div><span>Phone:</span> 0740532502</div>
            <div><span>Phone:</span> 0714367530</div>
            <div><span>WhatsApp:</span> 0740532502</div>
            <div><span>GitHub:</span> kawshal43</div>
          </div>

          <div className="social">
            <a className="btn primary" href="mailto:kawshals258@gmail.com">Email Me</a>

            <a
              className="btn"
              href="https://wa.me/94740532502"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              className="btn"
              href="https://github.com/kawshal43"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="btn"
              href="https://web.facebook.com/ashinshana.kawshal.2025"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Right: CTA block */}
        <div className="glass contactCta">
          <h2>Let’s build something premium.</h2>
          <p className="muted">
            I work across 3D animation, AI-assisted software development, and photography.
            If you have a project idea, message me and we’ll plan the best approach.
          </p>

          <div className="ctaBtns">
            <a className="btn primary" href="mailto:kawshals258@gmail.com">
              Send Email
            </a>
            <a
              className="btn"
              href="https://wa.me/94740532502"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
