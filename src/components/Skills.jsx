import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={45} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
  { name: "Express", icon: <SiExpress size={45} className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={45} className="text-sky-400" /> },
  { name: "GitHub", icon: <FaGithub size={45} className="text-white" /> },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.08 }}
              className="bg-slate-800 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-cyan-500/30 transition"
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;