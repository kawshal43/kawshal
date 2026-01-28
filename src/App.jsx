import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundOrbs from "./components/BackgroundOrbs";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Contact from "./pages/Contact.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <BackgroundOrbs />
      <Navbar />

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />

          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
