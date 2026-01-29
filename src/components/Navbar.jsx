import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="nav-wrap">
        <div className="nav container glass">
          <div className="brand">
            <span className="brand-dot" />
            <span className="brand-name">Kawshal</span>
          </div>

          {/* Desktop links */}
          <nav className="links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </nav>

          <div className="right">
            {/* Mobile menu button */}
            <button
              type="button"
              className={`menuBtn ${open ? "open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>

            {/* Icons */}
            <div className="icons">
              <a
                href="https://github.com/kawshal43"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="icon"
                title="GitHub"
              >
                GH
              </a>
              <a href="#" aria-label="LinkedIn (add later)" className="icon" title="LinkedIn">
                in
              </a>
              <a href="https://www.youtube.com/@AshinshanaKawshal" aria-label="YouTube (add later)" className="icon" title="YouTube">
                ▶
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Mobile overlay OUTSIDE the header so clicks always work */}
      {open && (
        <div className="mobilePanel" role="dialog" aria-modal="true">
          <div className="mobileBackdrop" onMouseDown={() => setOpen(false)} />

          <div className="mobileMenu glass" onMouseDown={(e) => e.stopPropagation()}>
            <div className="mobileTop">
              <div className="mobileTitle">Menu</div>
              <button
                className="mobileClose"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "mitem active" : "mitem")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "mitem active" : "mitem")}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "mitem active" : "mitem")}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "mitem active" : "mitem")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
