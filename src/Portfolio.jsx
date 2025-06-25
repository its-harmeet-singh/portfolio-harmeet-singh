// Portfolio.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import projectsData from "../src/data/projectData.js";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.title = "Harmeet.Dev | Software Craftsman";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-mono">
      <section className="ml-0 md:ml-52 flex flex-col items-center justify-center text-center pt-4 pb-0 px-4 min-h-[45vh]">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {"> Hello, I'm Harmeet Singh"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-3 text-xl text-indigo-400"
        >
          // Full Stack Developer | Cloud Enthusiast
        </motion.p>
        <motion.div
          className="mt-5 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <a
            href="https://www.linkedin.com/in/its-harmeet-singh/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/its-harmeet-singh"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={28} />
          </a>
          <a href="mailto:harmeet.singh.official@outlook.com">
            <FaEnvelope size={28} />
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1eBHcdI-Fm8qOxcjUAu3c6d_RPXB8DikQ" target="_blank"
  rel="noopener noreferrer">
            <FaFileDownload size={25} />
          </a>
        </motion.div>
      </section>

      <aside className="fixed top-0 left-0 h-full w-52 bg-gray-800 border-r border-gray-700 p-4 hidden md:flex flex-col items-start">
        <h1 className="text-xl font-bold text-indigo-400 mb-6">harmeet.dev</h1>
        <nav className="flex flex-col gap-4">
          <a href="#about" className="hover:text-indigo-400">
            About
          </a>
          <a href="#skills" className="hover:text-indigo-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-indigo-400">
            Projects
          </a>
          <a href="#experience" className="hover:text-indigo-400">
            Experience
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1eBHcdI-Fm8qOxcjUAu3c6d_RPXB8DikQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            Download Resume
          </a>
          <a href="#contact" className="hover:text-indigo-400">
            Contact
          </a>
        </nav>
      </aside>

      <section className="ml-0 md:ml-52 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mt-1 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6">
            <p className="text-green-400">$ whoami</p>
            <p className="text-white">Harmeet Singh - Software Craftsman</p>
            <p className="text-green-400 mt-4">$ tech-stack --full</p>
            <pre className="bg-black text-white p-4 rounded mt-2 text-sm overflow-x-auto">
              {`{
  languages: ["JavaScript", "TypeScript", "Python", "Node.js", "C#", "Java"],
  frameworks: ["React", "AngularJS", "Express.js", "ASP.NET Core", "Spring Boot", "Django"],
  databases: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Firebase", "NoSQL"],
  devOps: ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD"],
  testing: ["Unit Testing", "Integration Testing", "Postman", "Cypress", "Debugging", "Code Reviews"],
  tools: ["Git", "GitHub", "GitLab", "Jira", "Bitbucket", "TFS", "VS Code"],
  practices: ["Agile", "Scrum", "Kanban", "RESTful API Design", "Documentation", "TDD"],
  databases: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "DynamoDB"],
  ai_apis: ["OpenAI API Integration", "REST APIs", "GraphQL"],
  core_competencies: ["Analytical Thinking", "Problem Solving", "Team Collaboration", "Customer Empathy"]
}`}
            </pre>
          </div>

          <div
            className="mt-10 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6"
            id="about"
          >
            <p className="text-green-400">$ about --me</p>
            <p className="text-white mt-2">
              I'm a full-stack developer who loves clean code, scalable systems,
              and solving real-world problems with modern tech. Whether it's
              front-end animations or secure APIs, I ship quality.
            </p>
          </div>

          <div
            className="mt-10 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6"
            id="projects"
          >
            <p className="text-green-400">$ cat projects.js</p>
            {Object.entries(projectsData).map(([category, projects]) => (
              <div key={category} className="mt-6">
                <h3 className="text-indigo-400 text-lg font-semibold mb-2">
                  {category} Projects
                </h3>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div
            className="mt-10 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6"
            id="experience"
          >
            <p className="text-green-400">$ experience</p>
            <div className="mt-4 text-white space-y-6">
              <div>
                <p className="text-indigo-400 font-semibold">
                  Material Handler — Progistix Solutions, North York, ON
                </p>
                <p className="text-sm text-gray-400">June 2024 – Present</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300 text-sm space-y-1">
                  <li>
                    Completed and managed efficient kitting and packing of 2200+
                    orders daily with accurate delivery.
                  </li>
                  <li>
                    Collaborated in a fast-paced environment with 8+ team
                    members to boost productivity.
                  </li>
                  <li>
                    Trained 10+ new employees on safety protocols, improving
                    onboarding speed and team efficiency.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-indigo-400 font-semibold">
                  Software Engineer II — Publicis Sapient, Gurgaon, Haryana
                </p>
                <p className="text-sm text-gray-400">
                  February 2022 – April 2024
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-300 text-sm space-y-1">
                  <li>
                    Built scalable backend systems with Spring Boot and REST
                    APIs, boosting system performance by 15%.
                  </li>
                  <li>
                    Led real-time tech integration for cloud scalability and
                    reliability.
                  </li>
                  <li>
                    Improved database speed and efficiency via SQL optimization.
                  </li>
                  <li>
                    Wrote unit tests to uphold clean deployments and CI
                    pipelines.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-indigo-400 font-semibold">
                  Software Developer — JK Technosoft, Noida, UP
                </p>
                <p className="text-sm text-gray-400">
                  August 2021 – January 2022
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-300 text-sm space-y-1">
                  <li>Built web apps using Spring, and Angular.</li>
                  <li>
                    Integrated real-time synchronization & API logic for
                    seamless user experiences.
                  </li>
                  <li>
                    Focused on testing and scalability strategies throughout the
                    SDLC.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="mt-10 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6"
            id="contact"
          >
            <p className="text-green-400">$ ping me</p>
            <form
              action="https://formspree.io/f/mpwropjp"
              method="POST"
              className="mt-4 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

          <footer className="text-center text-sm text-gray-500 mt-12">
            © 2025 Harmeet Singh. All rights reserved.
          </footer>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-black border border-gray-700 rounded p-4 cursor-pointer hover:border-indigo-400"
    >
      <h3 className="text-indigo-400 font-bold">{project.title}</h3>
      <p className="text-gray-300 mt-1 text-sm">
        Tech Stack: {project.techStack.join(", ")}
      </p>
    </div>
  );
}
