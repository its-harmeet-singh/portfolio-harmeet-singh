// Portfolio.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import projectsData from "../src/data/projectData.js";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Harmeet.Dev | Software Craftsman";
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-mono">
      {/* Mobile menu toggle */}
      <div className="fixed top-4 right-4 md:hidden z-20">
        <motion.button
          onClick={toggleMenu}
          initial={false}
          animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-gray-800 text-white rounded focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            className="fixed top-0 left-0 h-full w-52 bg-gray-800 border-r border-gray-700 p-4 flex flex-col items-start z-10"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <h1 className="text-xl font-bold text-indigo-400 mb-6">harmeet.dev</h1>
            <nav className="flex flex-col gap-4">
              {["about", "projects", "experience", "contact"].map((sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  onClick={closeMenu}
                  className="hover:text-indigo-400 capitalize"
                >
                  {sec}
                </a>
              ))}
              <a
                href="https://drive.google.com/uc?export=download&id=1eBHcdI-Fm8qOxcjUAu3c6d_RPXB8DikQ"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="hover:text-indigo-400"
              >
                resume
              </a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 h-full w-52 bg-gray-800 border-r border-gray-700 p-4 hidden md:flex flex-col items-start">
        <h1 className="text-xl font-bold text-indigo-400 mb-6">harmeet.dev</h1>
        <nav className="flex flex-col gap-4">
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#experience" className="hover:text-indigo-400">Experience</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
          <a
            href="https://drive.google.com/uc?export=download&id=1eBHcdI-Fm8qOxcjUAu3c6d_RPXB8DikQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            Download Resume
          </a>
        </nav>
      </aside>

      {/* Hero */}
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
          <FaLinkedin size={28} />
          <FaGithub size={28} />
          <FaEnvelope size={28} />
          <FaFileDownload size={25} />
        </motion.div>
      </section>

      {/* Main content */}
      <section className="ml-0 md:ml-52 py-1 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Whoami & Tech Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-1 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6"
          >
            <motion.p variants={itemVariants} className="text-green-400">
              $ whoami
            </motion.p>
            <motion.p variants={itemVariants} className="text-white">
              Harmeet Singh - Software Craftsman
            </motion.p>
            <motion.p variants={itemVariants} className="text-green-400 mt-4">
              $ tech-stack --full
            </motion.p>
            <motion.pre
              variants={itemVariants}
              className="bg-black text-white p-4 rounded mt-2 text-sm overflow-x-auto"
            >{`{
  languages: ["JavaScript", "TypeScript", "Python", "Node.js", "C#", "Java"],
  frameworks: ["React", "AngularJS", "Express.js", "ASP.NET Core", "Spring Boot", "Django"],
  databases: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Firebase", "NoSQL", "Oracle", "DynamoDB"],
  devOps: ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD"],
  testing: ["Unit Testing", "Integration Testing", "Postman", "Cypress", "Debugging", "Code Reviews"],
  tools: ["Git", "GitHub", "GitLab", "Jira", "Bitbucket", "TFS", "VS Code"],
  practices: ["Agile", "Scrum", "Kanban", "RESTful API Design", "Documentation", "TDD"],
  ai_apis: ["OpenAI API Integration", "REST APIs", "GraphQL"],
  core_competencies: ["Analytical Thinking", "Problem Solving", "Team Collaboration", "Customer Empathy"]
}`}</motion.pre>
          </motion.div>

          {/* About */}
          <motion.div
            id="about"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-10 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6"
          >
            <motion.p variants={itemVariants} className="text-green-400">
              $ about --me
            </motion.p>
            <motion.p variants={itemVariants} className="text-white mt-2">
              I'm a full-stack developer who loves clean code, scalable systems, and solving real-world problems with modern tech. Whether it's front-end animations or secure APIs, I ship quality.
            </motion.p>
          </motion.div>

          {/* Projects */}
          <motion.div
            id="projects"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-10 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6"
          >
            <motion.p variants={itemVariants} className="text-green-400">
              $ cat projects.js
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm text-gray-400 mb-4">
              Click on project to get detailed description and links
            </motion.p>
            {Object.entries(projectsData).map(([category, projects]) => (
              <motion.div
                key={category}
                variants={containerVariants}
                className="mt-6"
              >
                <motion.h3 variants={itemVariants} className="text-indigo-400 text-lg font-semibold mb-2">
                  {category} Projects
                </motion.h3>
                <div className="space-y-4">
                  {projects.map((project, idx) => (
                    <ProjectCard
                      key={idx}
                      project={project}
                      onClick={() => setSelectedProject(project)}
                      variants={itemVariants}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            id="experience"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-10 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6"
          >
            <motion.p variants={itemVariants} className="text-green-400">
              $ experience
            </motion.p>
            <div className="mt-4 text-white space-y-6">
              {/** Wrap each job entry */}
              <motion.div variants={itemVariants}>
                <p className="text-indigo-400 font-semibold">
                  Material Handler — Progistix Solutions, North York, ON
                </p>
                <p className="text-sm text-gray-400">June 2024 – Present</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300 text-sm space-y-1">
                  <li>Completed and managed efficient kitting and packing of 2200+ orders daily with accurate delivery.</li>
                  <li>Collaborated in a fast-paced environment with 8+ team members to boost productivity.</li>
                  <li>Trained 10+ new employees on safety protocols, improving onboarding speed and team efficiency.</li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-indigo-400 font-semibold">
                  Software Engineer II — Publicis Sapient, Gurgaon, Haryana
                </p>
                <p className="text-sm text-gray-400">February 2022 – April 2024</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300 text-sm space-y-1">
                  <li>Built scalable backend systems with Spring Boot and REST APIs, boosting system performance by 15%.</li>
                  <li>Led real-time tech integration for cloud scalability and reliability.</li>
                  <li>Improved database speed and efficiency via SQL optimization.</li>
                  <li>Wrote unit tests to uphold clean deployments and CI pipelines.</li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-indigo-400 font-semibold">
                  Software Developer — JK Technosoft, Noida, UP
                </p>
                <p className="text-sm text-gray-400">August 2021 – January 2022</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300 text-sm space-y-1">
                  <li>Built web apps using Spring, and Angular.</li>
                  <li>Integrated real-time synchronization & API logic for seamless user experiences.</li>
                  <li>Focused on testing and scalability strategies throughout the SDLC.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            id="contact"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-10 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6"
          >
            <motion.p variants={itemVariants} className="text-green-400">
              $ ping me
            </motion.p>
            <form action="https://formspree.io/f/mpwropjp" method="POST" className="mt-4 space-y-4">
              <motion.input
                variants={itemVariants}
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                required
              />
              <motion.input
                variants={itemVariants}
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                required
              />
              <motion.textarea
                variants={itemVariants}
                name="message"
                placeholder="Your Message"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                rows={4}
                required
              />
              <motion.button
                variants={itemVariants}
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <footer className="text-center text-sm text-gray-500 mt-12">
            © 2025 Harmeet Singh. All rights reserved.
          </footer>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  );
}

// Updated ProjectCard to accept motion variants
function ProjectCard({ project, onClick, variants }) {
  return (
    <motion.div
      onClick={onClick}
      variants={variants}
      className="bg-black border border-gray-700 rounded p-4 cursor-pointer hover:border-indigo-400"
    >
      <h3 className="text-indigo-400 font-bold">{project.title}</h3>
      <p className="text-gray-300 mt-1 text-sm">
        Tech Stack: {project.techStack.join(", ")}
      </p>
    </motion.div>
  );
}
