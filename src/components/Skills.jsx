import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-4xl sm:text-5xl" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-4xl sm:text-5xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-4xl sm:text-5xl" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-4xl sm:text-5xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-4xl sm:text-5xl" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-white text-4xl sm:text-5xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-4xl sm:text-5xl" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-4xl sm:text-5xl" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white text-4xl sm:text-5xl" />,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-cyan-400 mb-10 sm:mb-12 lg:mb-16"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}

              // Small hover effect on desktop
              whileHover={{
                scale: 1.05,
                y: -5,
              }}

              className="
                bg-slate-800
                rounded-xl sm:rounded-2xl
                p-4 sm:p-6
                min-h-[130px] sm:min-h-[160px]
                flex flex-col
                items-center
                justify-center
                text-center
                shadow-lg
                hover:shadow-cyan-500/30
                border border-transparent
                hover:border-cyan-400/40
                transition
                duration-300
              "
            >

              {/* Icon */}
              <div className="flex justify-center items-center">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold">
                {skill.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;