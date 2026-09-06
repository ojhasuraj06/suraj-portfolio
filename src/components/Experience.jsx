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
    company: "Certed Tecnologies with collaboration of Haridwar University",
    description:
      "Developed a full-stack MERN Vehicle Rental System with user authentication, vehicle booking, admin dashboard, payment integration, and responsive UI.",
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
    <section id="experience" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-4 border-cyan-400 pl-8">

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-11 top-2 w-5 h-5 bg-cyan-400 rounded-full"></div>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-cyan-400 font-semibold">
                {item.company}
              </p>

              <p className="text-gray-400 mb-3">{item.year}</p>

              <p className="text-gray-300 leading-7">
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