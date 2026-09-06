import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-cyan-400"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaGraduationCap className="text-4xl text-cyan-400" />
            <div>
              <h3 className="text-2xl font-bold">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-cyan-400">
                Computer Science & Engineering
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-2">
            <strong>College:</strong> Roorkee collage of smart computing
          </p>

          <p className="text-gray-300 mb-2">
            <strong>University:</strong> Haridwar University Roorkee (Uttrakhand), 247667
          </p>

          <p className="text-gray-300">
            <strong>Duration:</strong> 2023 - 2027
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;