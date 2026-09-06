import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import vehicleImg from "../assets/project/vehicle-rental.png";
import gitaMitra from "../assets/project/gitamitra.png";

const projects = [
  {
    title: "Vehicle Rental System",
    image: vehicleImg,
    description:
      "A full-stack MERN application for vehicle booking, user authentication, admin dashboard and online payments.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ojhasuraj65/vehicle-rental-system",
    live: "https://vehicle-rental-system-knf7.vercel.app",
  },

  {
    title: "GitaMitra",
    image: gitaMitra,
    description:
      "A full-stack Bhagavad Gita web application where users can explore chapters and shlokas, read Sanskrit verses with Hindi and English meanings, and learn about the teachings of the Bhagavad Gita.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ojhasuraj65/gita-mitra",
    live: "https://gita-mitra.onrender.com/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          My Projects
        </motion.h2>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-700 hover:border-cyan-400 transition"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">

                <h3 className="text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-5 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 px-5 py-2 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;