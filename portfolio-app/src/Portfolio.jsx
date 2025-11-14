// React + Tailwind Portfolio for Oni Adedeji Samuel
// File: src/App.jsx
// Description: Single-file React component you can drop into a Create React App / Vite React project.
// Tailwind: this markup uses Tailwind CSS classes. Make sure Tailwind is installed and configured.

import React from "react";

const SOCIAL = {
  whatsapp: "https://api.whatsapp.com/send/?phone=2349075225395&text&type=phone_number&app_absent=0", // replace with full phone number in international format
  instagram: "https://instagram.com/your_handle",
  linkedin: "https://www.linkedin.com/in/your-profile",
  twitter: "https://twitter.com/your_handle",
  github: "https://github.com/your_handle",
};

const skills = [
  { title: "Web Development", details: "React, Node.js, Express, FastAPI, REST, GraphQL" },
  { title: "AI / ML", details: "Prompt engineering, model integration, automation" },
  { title: "Fullstack", details: "Frontend, Backend, Databases, Deployment" },
  { title: "Music Production", details: "Beat making, mixing, mastering" },
  { title: "Videography & Photography", details: "Shooting, editing, color grading" },
  { title: "Marketing & Promotion", details: "Campaigns, events, industrial promotion" },
];

const projects = [
  {
    title: "Portfolio Website (this site)",
    desc: "A responsive React + Tailwind portfolio showcasing my work across music, video and web.",
    tags: ["React", "Tailwind", "Vercel"],
  },
  {
    title: "Music Platform (WIP)",
    desc: "A platform to publish beats and manage licensing — built with Node & Stripe.",
    tags: ["Node.js", "Stripe", "Postgres"],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* NAV */}
      <header className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-green-700">Oni Adedeji Samuel</h1>
            <p className="text-xs text-gray-500 -mt-1">Web & AI Developer • Music Producer • Videographer</p>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:text-green-600">About</a>
            <a href="#skills" className="hover:text-green-600">Skills</a>
            <a href="#journey" className="hover:text-green-600">Journey</a>
            <a href="#projects" className="hover:text-green-600">Projects</a>
            <a href="#contact" className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:opacity-95">Contact</a>
          </nav>

          <div className="md:hidden">
            <button aria-label="open menu" className="p-2 rounded-md bg-gray-100">☰</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="bg-gradient-to-r from-green-700 to-emerald-500 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Hi, I'm Oni Adedeji Samuel.</h2>
              <p className="mt-4 text-lg md:text-xl opacity-90">
                A multidisciplinary creator from Ibadan, Nigeria —
                music producer, videographer, photographer, industrial promoter, marketer,
                and a passionate Web & AI / Fullstack developer.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white text-green-700 rounded-full font-medium shadow">Connect on LinkedIn</a>
                <a href="#projects" className="px-4 py-2 border border-white rounded-full opacity-90">See Projects</a>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="text-sm">
                  <div className="font-semibold">Graduated</div>
                  <div className="opacity-90">Ajayi Crowther University, Ibadan</div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                <span className="text-sm">Your Photo</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold text-green-700">About Me</h3>
          <p className="mt-4 text-lg leading-relaxed">
            I'm <strong>Oni Adedeji Samuel</strong>. I build experiences — whether with sound, visuals, or code.
            My approach blends storytelling, product thinking, and reliable engineering.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">What I Do</h4>
              <p className="mt-2 text-sm text-gray-600">Fullstack web apps, AI integrations, music & media production, event promotion.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Where I'm From</h4>
              <p className="mt-2 text-sm text-gray-600">Ibadan, Nigeria — Ajayi Crowther University alumni.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Contact</h4>
              <p className="mt-2 text-sm text-gray-600">Available for hire, collaborations, and consultations.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-green-700">Skills & Expertise</h3>
            <p className="mt-2 text-gray-600">A few areas I frequently work in.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((s) => (
                <div key={s.title} className="p-5 border rounded-2xl bg-gray-50">
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm mt-2 text-gray-600">{s.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="max-w-5xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold text-green-700">My Life Journey</h3>
          <ol className="mt-6 border-l-2 border-green-100 pl-6 space-y-6">
            <li>
              <div className="text-sm text-gray-500">2008 — 2014</div>
              <div className="mt-1 font-semibold">Early creativity</div>
              <div className="text-gray-600 text-sm">Started exploring music, photography and short films.</div>
            </li>
            <li>
              <div className="text-sm text-gray-500">2015 — 2019</div>
              <div className="mt-1 font-semibold">University & Growth</div>
              <div className="text-gray-600 text-sm">Studied at Ajayi Crowther University, sharpened both technical and creative skills.</div>
            </li>
            <li>
              <div className="text-sm text-gray-500">2020 — Present</div>
              <div className="mt-1 font-semibold">Professional work</div>
              <div className="text-gray-600 text-sm">Working as a developer, producer, promoter and helping brands tell better stories.</div>
            </li>
          </ol>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-green-700">Selected Projects</h3>
              <a href="#contact" className="text-sm text-green-700">Hire me →</a>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <div key={p.title} className="p-6 bg-white rounded-2xl shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{p.title}</h4>
                      <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                    </div>
                    <div className="text-sm text-gray-400">{p.tags.join(" • ")}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / SOCIAL */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-green-700">Let's Connect</h3>
            <p className="mt-2 text-gray-600">Reach me on any of these platforms — let's collaborate.</p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="https://api.whatsapp.com/send/?phone=2349075225395&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg">WhatsApp</a>
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg">Instagram</a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg">LinkedIn</a>
              <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg">GitHub</a>
            </div>

            <div className="mt-8 text-sm text-gray-500">Or email: <span className="font-medium text-gray-700">you@domain.com</span></div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <div>© {new Date().getFullYear()} Oni Adedeji Samuel</div>
            <div className="mt-3 md:mt-0">Built with ❤️ — React + Tailwind</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

