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
      className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-center
            text-cyan-400
            mb-10
            sm:mb-12
            lg:mb-16
          "
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              className="
                bg-slate-800
                rounded-xl
                sm:rounded-2xl
                overflow-hidden
                shadow-xl
                border
                border-slate-700
                hover:border-cyan-400
                transition-all
                duration-300
              "
            >

              {/* Project Image */}
              <div className="w-full bg-slate-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-48
                    sm:h-56
                    lg:h-64
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6">

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-5 leading-6 sm:leading-7 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        bg-cyan-500/20
                        text-cyan-300
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        sm:text-sm
                        border
                        border-cyan-500/20
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      w-full
                      sm:w-auto
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-cyan-400
                      text-black
                      px-5
                      py-3
                      rounded-lg
                      font-semibold
                      text-sm
                      sm:text-base
                      hover:bg-cyan-300
                      transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      w-full
                      sm:w-auto
                      flex
                      items-center
                      justify-center
                      gap-2
                      border
                      border-cyan-400
                      px-5
                      py-3
                      rounded-lg
                      text-cyan-400
                      font-semibold
                      text-sm
                      sm:text-base
                      hover:bg-cyan-400
                      hover:text-black
                      transition
                    "
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