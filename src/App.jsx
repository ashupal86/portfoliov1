import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import { Analytics } from "@vercel/analytics/react"


export default function App() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';
  
  return (
    <div>
      <Navbar />
      <main className={isProjectsPage ? "container projects-container" : "container"}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© Ashish Pal 2025</p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
