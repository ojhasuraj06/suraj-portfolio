import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
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
          Education
        </motion.h2>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-slate-800
            rounded-xl
            sm:rounded-2xl
            p-5
            sm:p-7
            lg:p-8
            shadow-lg
            border
            border-cyan-400/60
            hover:border-cyan-400
            hover:shadow-cyan-500/20
            transition-all
            duration-300
          "
        >

          {/* Degree Header */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-4
              mb-6
            "
          >
            {/* Icon */}
            <div className="shrink-0">
              <FaGraduationCap
                className="
                  text-4xl
                  sm:text-5xl
                  text-cyan-400
                "
              />
            </div>

            {/* Degree */}
            <div>
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-bold
                  leading-snug
                "
              >
                Bachelor of Technology (B.Tech)
              </h3>

              <p
                className="
                  text-cyan-400
                  mt-1
                  text-sm
                  sm:text-base
                  lg:text-lg
                "
              >
                Computer Science & Engineering
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 mb-6"></div>

          {/* College */}
          <div className="mb-4">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-7">
              <strong className="text-white">College:</strong>{" "}
              Roorkee collage of smart computing
            </p>
          </div>

          {/* University */}
          <div className="mb-4">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-7">
              <strong className="text-white">University:</strong>{" "}
              Haridwar University Roorkee (Uttrakhand), 247667
            </p>
          </div>

          {/* Duration */}
          <div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-7">
              <strong className="text-white">Duration:</strong>{" "}
              2023 - 2027
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Education;