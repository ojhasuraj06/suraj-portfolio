import { motion } from "framer-motion";

const experience = [
  {
    year: "2025",
    title: "Frontend Web Developer Intern",
    company: "Vaishnav Technologies",
    description:
      "Worked as a Frontend Developer Intern. Built responsive user interfaces using React.js, JavaScript, HTML, CSS and Tailwind CSS. Collaborated with the team to improve UI/UX and develop reusable components.",
  },
  {
    year: "2025",
    title: "Spotify Recommendation System",
    company:
      "Certed Tecnologies with collaboration of Haridwar University",
    description:
      "Developed a Spotify Recommendation System that recommends songs based on user preferences and song features. Worked on the recommendation logic, backend integration, and responsive user interface.",
  },
  {
    year: "2026",
    title: "MERN Stack Intern",
    company: "Aarsh AI Technology",
    description:
      "Worked on full-stack web applications using React.js, Node.js, Express.js and MongoDB. Developed REST APIs, integrated databases, and contributed to complete MERN stack projects.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24"
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
          Experience
        </motion.h2>

        {/* Timeline */}
        <div
          className="
            relative
            border-l-2
            sm:border-l-4
            border-cyan-400
            ml-2
            sm:ml-4
            pl-6
            sm:pl-8
          "
        >
          {experience.map((item, index) => (
            <motion.div
              key={`${item.title}-${item.year}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                mb-10
                sm:mb-12
                last:mb-0
                relative
                bg-slate-900
                rounded-xl
                sm:rounded-2xl
                p-5
                sm:p-6
                lg:p-7
                border
                border-slate-700
                hover:border-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/20
                transition-all
                duration-300
              "
            >

              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  -left-[33px]
                  sm:-left-[43px]
                  top-6
                  w-4
                  h-4
                  sm:w-5
                  sm:h-5
                  bg-cyan-400
                  rounded-full
                  border-2
                  border-slate-950
                  shadow-[0_0_10px_rgba(34,211,238,0.7)]
                "
              ></div>

              {/* Year */}
              <p
                className="
                  text-cyan-400
                  font-semibold
                  text-sm
                  sm:text-base
                  mb-2
                "
              >
                {item.year}
              </p>

              {/* Job / Project Title */}
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-bold
                  leading-snug
                  mb-2
                "
              >
                {item.title}
              </h3>

              {/* Company */}
              <p
                className="
                  text-cyan-400
                  font-semibold
                  text-sm
                  sm:text-base
                  leading-6
                  mb-3
                "
              >
                {item.company}
              </p>

              {/* Description */}
              <p
                className="
                  text-gray-300
                  text-sm
                  sm:text-base
                  leading-7
                "
              >
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;